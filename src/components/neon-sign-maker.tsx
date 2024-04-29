'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RadioGroup } from '@radix-ui/react-radio-group';

import { siteConfig } from '@/config/siteConfig';
import { cn } from '@/lib/utils';

import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroupItem } from './ui/radio-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { SparklesCore } from './ui/sparkles';

export function NeonSignMaker() {
  const [font, setFont] = useState(siteConfig.fonts.capriola);
  const [size, setSize] = useState(siteConfig.sizes.medium);
  const [text, setText] = useState('Your Text');

  return (
    <>
      <section className="container mx-auto py-6 md:py-12">
        <div className="mx-4 space-y-6 md:mx-6 lg:mx-0">
          <div className="space-y-2 text-center">
            {/* START: Sparks */}
            <div className="w-full bg-background flex flex-col items-center justify-center overflow-hidden rounded-md">
              <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center relative z-20">
                NeonSpark
              </h1>
              <div className="w-[40rem] relative">
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
                <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
            {/* END: Sparks */}

            <p className="max-w-[700px] md:text-xl">
              Design your own unique neon sign with our easy-to-use tool. Choose
              your text, font, and size, then see the preview come to life.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div className="grid gap-4 space-y-2">
                <div className="space-y-2">
                  <Input
                    className="w-full h-14 text-lg"
                    id="text"
                    placeholder="Enter your text"
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Select onValueChange={(val) => setFont(val)}>
                    <SelectTrigger
                      defaultValue={font}
                      className="h-14 w-full text-lg"
                    >
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fonts</SelectLabel>
                        {Object.entries(siteConfig.fonts).map(
                          ([key, value]) => (
                            <SelectItem value={value} key={key}>
                              <span className={cn(value)}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </span>
                            </SelectItem>
                          )
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <RadioGroup
                    defaultValue={size}
                    className="flex flex-row items-center space-x-4"
                    onValueChange={(val) => {
                      setSize(val);
                    }}
                  >
                    {Object.entries(siteConfig.sizes).map(([key, value]) => (
                      <div key={key} className="flex items-center space-x-2">
                        <RadioGroupItem value={value} id={`size-${key}`} />
                        <Label htmlFor={`size-${key}`} className="md:text-base">
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
                  className="aspect-square rounded-lg object-fill opacity-70"
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
