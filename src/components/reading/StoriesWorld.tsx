import React, { useState } from 'react';
import { STORIES, type Story } from '../../data/learningData';
import { sound } from '../../utils/sound';
import { speech } from '../../utils/speech';
import { useApp } from '../../context/AppContext';
import { Volume2, ArrowLeft, ArrowRight, BookOpen, CheckCircle } from 'lucide-react';

interface StoriesWorldProps {
  onBack: () => void;
}

export const StoriesWorld: React.FC<StoriesWorldProps> = ({ onBack }) => {
  const { addStars } = useApp();
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  const startStory = (story: Story) => {
    sound.playPop();
    setSelectedStory(story);
    setPageIndex(0);
    setHasCompleted(false);
    speech.speak(story.title);
  };

  const currentPage = selectedStory ? selectedStory.pages[pageIndex] : null;

  const readPageAloud = () => {
    if (!currentPage) return;
    setIsReadingAloud(true);
    sound.playPop(600);
    speech.speak(currentPage.text, () => {
      setIsReadingAloud(false);
    });
  };

  const handleWordTap = (word: string) => {
    // Clean punctuation
    const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()"?]/g, '');
    sound.playPop(700);
    speech.speak(cleanWord);
  };

  const nextPage = () => {
    if (!selectedStory) return;
    sound.playPop();
    speech.stop();
    setIsReadingAloud(false);

    if (pageIndex < selectedStory.pages.length - 1) {
      setPageIndex((prev) => prev + 1);
    } else {
      if (!hasCompleted) {
        setHasCompleted(true);
        addStars(2);
        sound.playStarFanfare();
        speech.speak('You finished the story! You earned 2 stars!');
      }
    }
  };

  const prevPage = () => {
    if (pageIndex > 0) {
      sound.playPop();
      speech.stop();
      setIsReadingAloud(false);
      setPageIndex((prev) => prev - 1);
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px' }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
      }}>
        <button
          onClick={() => {
            sound.playPop();
            speech.stop();
            if (selectedStory) {
              setSelectedStory(null);
            } else {
              onBack();
            }
          }}
          className="kid-btn btn-white"
          style={{ padding: '10px 18px', fontSize: '1rem' }}
        >
          <ArrowLeft size={20} /> {selectedStory ? 'Choose Another Story' : 'Back to Hub'}
        </button>

        {selectedStory && (
          <span style={{
            fontSize: '1.1rem',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: '#0284C7',
          }}>
            Page {pageIndex + 1} of {selectedStory.pages.length}
          </span>
        )}
      </div>

      {!selectedStory ? (
        /* Story Shelf Selection */
        <div>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <h2 style={{
              fontSize: '2.5rem',
              color: '#0F172A',
              fontFamily: 'var(--font-display)',
              marginBottom: 8,
            }}>
              📚 Illustrated Storybooks
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#64748B', fontWeight: 600 }}>
              Read along with friendly voices, or tap any word to hear it pronounced!
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {STORIES.map((story) => (
              <div
                key={story.id}
                onClick={() => startStory(story)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '5px solid #38BDF8',
                  padding: 28,
                  textAlign: 'center',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-playful)',
                  transition: 'transform 0.15s ease',
                }}
                className="animate-bob"
              >
                <div style={{
                  fontSize: '4.5rem',
                  marginBottom: 16,
                }}>
                  {story.coverEmoji}
                </div>
                <h3 style={{
                  fontSize: '1.6rem',
                  fontFamily: 'var(--font-display)',
                  color: '#0369A1',
                  marginBottom: 12,
                }}>
                  {story.title}
                </h3>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#10B981',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                }}>
                  <BookOpen size={18} /> {story.pages.length} Pages • Tap to Read
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Interactive Story Reader Page */
        <div style={{
          background: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '6px solid #38BDF8',
          boxShadow: 'var(--shadow-floating)',
          overflow: 'hidden',
        }}>
          {/* Illustration Stage */}
          <div style={{
            background: currentPage?.bgColor || '#E0F2FE',
            padding: '48px 24px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 220,
            position: 'relative',
          }}>
            <div style={{
              fontSize: '6.5rem',
              filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.15))',
            }} className="animate-bob">
              {currentPage?.imageEmoji}
            </div>

            {/* Read to Me Button */}
            <button
              onClick={readPageAloud}
              style={{
                position: 'absolute',
                bottom: 16,
                right: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: '#FFFFFF',
                borderRadius: 999,
                padding: '8px 18px',
                border: '3px solid #38BDF8',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: '#0284C7',
                cursor: 'pointer',
                boxShadow: '0 4px 0 #BAE6FD',
              }}
            >
              <Volume2 size={20} color="#0284C7" />
              <span>{isReadingAloud ? 'Reading...' : 'Read Page'}</span>
            </button>
          </div>

          {/* Interactive Text Canvas */}
          <div style={{ padding: '36px 32px' }}>
            <div style={{
              fontSize: '1.8rem',
              lineHeight: 1.7,
              fontFamily: 'var(--font-display)',
              color: '#1E293B',
              marginBottom: 32,
              textAlign: 'center',
            }}>
              {currentPage?.text.split(' ').map((word, wIdx) => (
                <span
                  key={wIdx}
                  onClick={() => handleWordTap(word)}
                  style={{
                    display: 'inline-block',
                    margin: '0 5px',
                    padding: '2px 6px',
                    borderRadius: 8,
                    cursor: 'pointer',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#FEF08A')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  title="Tap to hear this word!"
                >
                  {word}
                </span>
              ))}
            </div>

            <div style={{
              textAlign: 'center',
              color: '#94A3B8',
              fontSize: '0.95rem',
              fontWeight: 600,
              marginBottom: 24,
            }}>
              💡 Tip: Tap any word to hear it pronounced!
            </div>

            {/* Story Navigation Controls */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '2px solid #F1F5F9',
              paddingTop: 20,
            }}>
              <button
                onClick={prevPage}
                disabled={pageIndex === 0}
                className="kid-btn btn-white"
                style={{ opacity: pageIndex === 0 ? 0.4 : 1 }}
              >
                <ArrowLeft size={20} /> Previous
              </button>

              {pageIndex < selectedStory.pages.length - 1 ? (
                <button onClick={nextPage} className="kid-btn btn-sky">
                  Next Page <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  onClick={nextPage}
                  className="kid-btn btn-grass"
                  style={{ fontSize: '1.15rem' }}
                >
                  <CheckCircle size={20} /> {hasCompleted ? 'Story Finished! ⭐' : 'Finish Story!'}
                </button>
              )}
            </div>

            {hasCompleted && (
              <div style={{
                textAlign: 'center',
                marginTop: 20,
                color: '#16A34A',
                fontWeight: 700,
                fontSize: '1.4rem',
                fontFamily: 'var(--font-display)',
              }} className="animate-pop">
                🎉 Congratulations! You read the whole story! +2 Stars! 🎉
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
