import React, { useEffect, useState } from 'react';
import { STORIES, type Story } from '../../data/learningData';
import { sound } from '../../utils/sound';
import { speech, clip, wordKey } from '../../utils/speech';
import { useKidTimers } from '../../utils/useKidTimers';
import { useApp } from '../../context/AppContext';
import { Volume2, ArrowLeft, ArrowRight, BookOpen, CheckCircle, Square } from 'lucide-react';

interface StoriesWorldProps {
  onBack: () => void;
}

export const StoriesWorld: React.FC<StoriesWorldProps> = ({ onBack }) => {
  const { addStars } = useApp();
  const { later } = useKidTimers();
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [tappedWord, setTappedWord] = useState<number | null>(null);

  useEffect(() => {
    speech.say([clip.phrase('greet_stories')]);
  }, []);

  const readPage = (story: Story, index: number, withTitle = false) => {
    setIsReadingAloud(true);
    const clips = [clip.storyPage(story.id, index)];
    if (withTitle) clips.unshift(clip.storyTitle(story.id));
    speech.say(clips, {
      fallback: story.pages[index].text,
      onEnd: () => setIsReadingAloud(false),
    });
  };

  const startStory = (story: Story) => {
    sound.playPop();
    setSelectedStory(story);
    setPageIndex(0);
    setHasCompleted(false);
    readPage(story, 0, true);
  };

  const currentPage = selectedStory ? selectedStory.pages[pageIndex] : null;
  const isLastPage = selectedStory ? pageIndex === selectedStory.pages.length - 1 : false;

  const toggleReadAloud = () => {
    if (!selectedStory) return;
    sound.playPop(600);
    if (isReadingAloud) {
      speech.stop();
      setIsReadingAloud(false);
    } else {
      readPage(selectedStory, pageIndex);
    }
  };

  const handleWordTap = (word: string, index: number) => {
    sound.playPop(700);
    setIsReadingAloud(false);
    setTappedWord(index);
    later(() => setTappedWord((cur) => (cur === index ? null : cur)), 900);

    const num = parseInt(word, 10);
    if (!isNaN(num) && num >= 0 && num <= 20) {
      speech.say([clip.number(num)]);
    } else if (wordKey(word)) {
      speech.say([clip.word(word)], { fallback: word.replace(/[^A-Za-z']/g, '') });
    }
  };

  const goToPage = (index: number) => {
    if (!selectedStory) return;
    sound.playPop();
    setPageIndex(index);
    setTappedWord(null);
    readPage(selectedStory, index);
  };

  const finishStory = () => {
    sound.playPop();
    if (hasCompleted) return;
    setHasCompleted(true);
    setIsReadingAloud(false);
    addStars(2);
    speech.say([clip.cheer(), clip.phrase('story_finished')]);
  };

  return (
    <div className="page" style={{ maxWidth: 860 }}>
      <div className="world-bar">
        <button
          onClick={() => {
            sound.playPop();
            speech.stop();
            setIsReadingAloud(false);
            if (selectedStory) setSelectedStory(null);
            else onBack();
          }}
          className="kid-btn btn-white back-btn"
          aria-label={selectedStory ? 'Back to bookshelf' : 'Back to home'}
        >
          <ArrowLeft size={22} /> <span className="btn-label">{selectedStory ? 'Bookshelf' : 'Back'}</span>
        </button>

        {selectedStory && (
          <div style={{ display: 'flex', gap: 6 }} aria-label={`Page ${pageIndex + 1} of ${selectedStory.pages.length}`}>
            {selectedStory.pages.map((_, i) => (
              <span
                key={i}
                style={{
                  width: i === pageIndex ? 26 : 12,
                  height: 12,
                  borderRadius: 999,
                  background: i <= pageIndex ? '#0EA5E9' : '#CBD5E1',
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
          </div>
        )}
      </div>

      {!selectedStory ? (
        /* Bookshelf */
        <div>
          <div style={{ textAlign: 'center', marginBottom: 18 }}>
            <h2 style={{ fontSize: 'clamp(1.7rem, 6vw, 2.4rem)', color: '#0F172A', marginBottom: 6 }}>
              📚 Story Time
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B', fontWeight: 600 }}>
              Pick a book. Tap any word to hear it!
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16,
          }}>
            {STORIES.map((story) => (
              <button
                key={story.id}
                className="btn-reset"
                onClick={() => startStory(story)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '5px solid #38BDF8',
                  padding: '22px 16px',
                  textAlign: 'center',
                  boxShadow: '0 6px 0 #BAE6FD, var(--shadow-playful)',
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: 8 }} aria-hidden>{story.coverEmoji}</div>
                <h3 style={{ fontSize: '1.4rem', color: '#0369A1', marginBottom: 10 }}>
                  {story.title}
                </h3>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#059669',
                  fontWeight: 700,
                  fontSize: '1rem',
                }}>
                  <BookOpen size={18} /> {story.pages.length} pages · Read me!
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Reader */
        <div style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '5px solid #38BDF8',
          boxShadow: 'var(--shadow-floating)',
          overflow: 'hidden',
        }}>
          <div style={{
            background: currentPage?.bgColor || '#E0F2FE',
            padding: '24px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'clamp(140px, 26vh, 220px)',
          }}>
            <div
              key={pageIndex}
              style={{ fontSize: 'clamp(4.5rem, 16vw, 6.5rem)', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.15))' }}
              className="animate-pop"
              aria-hidden
            >
              {currentPage?.imageEmoji}
            </div>
          </div>

          <div style={{ padding: '18px 14px 16px' }}>
            <p style={{
              fontSize: 'clamp(1.35rem, 5.2vw, 1.8rem)',
              lineHeight: 1.6,
              fontFamily: 'var(--font-display)',
              color: '#1E293B',
              marginBottom: 14,
              textAlign: 'center',
            }}>
              {currentPage?.text.split(' ').map((word, wIdx) => (
                <button
                  key={`${pageIndex}-${wIdx}`}
                  className="btn-reset"
                  onClick={() => handleWordTap(word, wIdx)}
                  style={{
                    display: 'inline-block',
                    margin: '0 1px',
                    padding: '0 5px',
                    borderRadius: 8,
                    background: tappedWord === wIdx ? '#FEF08A' : 'transparent',
                    transition: 'background 0.15s ease',
                    font: 'inherit',
                  }}
                >
                  {word}
                </button>
              ))}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <button
                onClick={toggleReadAloud}
                className={`kid-btn ${isReadingAloud ? 'btn-white' : 'btn-sun'}`}
                style={{ fontSize: '1.05rem' }}
              >
                {isReadingAloud ? <><Square size={18} /> Stop</> : <><Volume2 size={20} /> Read to me</>}
              </button>
            </div>

            <div style={{
              display: 'flex',
              gap: 10,
              borderTop: '2px solid #F1F5F9',
              paddingTop: 14,
            }}>
              <button
                onClick={() => goToPage(pageIndex - 1)}
                disabled={pageIndex === 0}
                className="kid-btn btn-white"
                style={{ flex: 1 }}
                aria-label="Previous page"
              >
                <ArrowLeft size={22} /> <span className="hide-mobile">Back</span>
              </button>

              {!isLastPage ? (
                <button onClick={() => goToPage(pageIndex + 1)} className="kid-btn btn-sky" style={{ flex: 2 }}>
                  Next Page <ArrowRight size={22} />
                </button>
              ) : (
                <button
                  onClick={finishStory}
                  className={`kid-btn ${hasCompleted ? 'btn-white' : 'btn-grass'}`}
                  style={{ flex: 2 }}
                >
                  <CheckCircle size={22} /> {hasCompleted ? 'All done! ⭐' : 'The End!'}
                </button>
              )}
            </div>

            {hasCompleted && (
              <div style={{
                textAlign: 'center',
                marginTop: 14,
                color: '#16A34A',
                fontWeight: 700,
                fontSize: '1.3rem',
                fontFamily: 'var(--font-display)',
              }} className="animate-pop">
                🎉 You read the whole story! +2 Stars!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
