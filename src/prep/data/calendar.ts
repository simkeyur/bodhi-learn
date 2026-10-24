// Upcoming state test windows for grade 5 math, from TEA's 2026-27 testing calendar and the HB 8 FAQ
// (SST windows: BOY from the 4th Monday in August to Sep 30, MOY Jan 2 - Feb 21, EOY May 1-30).
// Pure, so it can be tested.

export interface TestWindow {
  name: string;
  start: string; // yyyy-mm-dd
  end: string;
}

export const G5_MATH_WINDOWS: TestWindow[] = [
  { name: 'STAAR math', start: '2027-04-20', end: '2027-04-30' },
  { name: 'SST beginning-of-year test', start: '2027-08-23', end: '2027-09-30' },
  { name: 'SST middle-of-year test', start: '2028-01-02', end: '2028-02-21' },
  { name: 'SST end-of-year test', start: '2028-05-01', end: '2028-05-30' },
];

// The window that is open now or comes next, and how many days until it starts (0 while it is open)
export function nextWindow(windows: readonly TestWindow[], today: string): { window: TestWindow; days: number } | null {
  for (const w of windows) {
    if (today > w.end) continue;
    const days = today >= w.start ? 0 : Math.round((Date.parse(w.start) - Date.parse(today)) / 86_400_000);
    return { window: w, days };
  }
  return null;
}
