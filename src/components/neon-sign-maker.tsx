'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RadioGroup } from '@radix-ui/react-radio-group';

import { cn } from '@/lib/utils';

import { Label } from './ui/label';
import { RadioGroupItem } from './ui/radio-group';
import { SparklesCore } from './ui/sparkles';

const fonts = {
  capriola: 'font-capriola',
  adventPro: 'font-advent-pro',
  dancingScript: 'font-dancing-script',
};

const sizes = {
  small: 'text-3xl',
  medium: 'text-4xl',
  large: 'text-5xl',
  xlarge: 'text-6xl',
};

export function NeonSignMaker() {
  const [font, setFont] = useState(fonts.capriola);
  const [size, setSize] = useState(sizes.medium);
  const [text, setText] = useState('Your Text');

  return (
    <>
      <section className="container mx-auto py-6 md:py-12">
        <div className="mx-4 space-y-6 md:mx-6 lg:mx-0">
          <div className="space-y-2 text-center">
            {/* START: Sparks */}
            <div className="w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
              <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                NeonSpark
              </h1>
              <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
            {/* END: Sparks */}

            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Design your own unique neon sign with our easy-to-use tool. Choose
              your text, font, and size, then see the preview come to life.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="text">
                    Neon Text
                  </label>
                  <input
                    className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-gray-500 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-500"
                    id="text"
                    placeholder="Enter your text"
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="font">
                    Font
                  </label>
                  <select
                    className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm transition-colors focus:border-gray-500 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-500"
                    onChange={(e) => setFont(e.target.value)}
                    id="font"
                  >
                    {Object.entries(fonts).map(([key, value]) => (
                      <option key={key} value={value}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Size</p>
                <div className="flex items-center space-x-4">
                  <RadioGroup
                    defaultValue={size}
                    className="flex flex-row items-center space-x-4"
                    onValueChange={(val) => {
                      setSize(val);
                    }}
                  >
                    {Object.entries(sizes).map(([key, value]) => (
                      <div key={key} className="flex items-center space-x-2">
                        <RadioGroupItem value={value} id={`size-${key}`} />
                        <Label htmlFor={`size-${key}`}>
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
              {/* <button
                className="w-full rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-500"
                type="submit"
              >
                Preview Neon Sign
              </button> */}
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px]">
                <Image
                  alt="Neon sign preview"
                  className="aspect-square rounded-lg object-fill"
                  height={500}
                  width={500}
                  quality={100}
                  src="/wall.jpg"
                />

                <div
                  className={cn(
                    'absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white animate-glow',
                    size,
                    font
                  )}
                >
                  {text || 'Your Text'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
