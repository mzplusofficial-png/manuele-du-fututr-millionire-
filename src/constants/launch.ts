// Official Launch Target Date: Monday 10 August 2026 at 20:00 (8:00 PM) UTC+1
// Date.UTC parameters: year 2026, month 7 (August, 0-indexed), day 10, hour 19 UTC (which is 20:00 UTC+1 / WAT)
export const FIXED_LAUNCH_TIMESTAMP = Date.UTC(2026, 7, 10, 19, 0, 0);

export function getLaunchTimeLeft(targetTimestamp: number = FIXED_LAUNCH_TIMESTAMP) {
  const now = Date.now();
  const difference = targetTimestamp - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

