import {
  Advent_Pro,
  Capriola,
  Dancing_Script,
  Inter as FontSans,
} from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const capriola = Capriola({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-capriola',
});

export const adventPro = Advent_Pro({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-advent-pro',
});

export const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dancing-script',
});
