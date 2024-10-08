'use client';

import { memo, useState } from 'react';
import Image from 'next/image';

import { siteConfig } from '@/config/siteConfig';
import { cn } from '@/lib/utils';

import { Heading as OriginalHeading } from './heading';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const Heading = memo(OriginalHeading);

export function NeonSignMaker() {
  const [font, setFont] = useState(siteConfig.fonts.capriola);
  const [size, setSize] = useState(siteConfig.sizes.medium);
  const [color, setColor] = useState(siteConfig.colors.green);
  const [text, setText] = useState('Your Text');

  return (
    <>
      <section className="container mx-auto py-6 md:py-12">
        <div className="mx-4 space-y-6 md:mx-6 lg:mx-0">
          <div className="space-y-2 text-center">
            <Heading />
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
              <div className="space-y-2">
                <Label className="text-base">Color</Label>
                <RadioGroup
                  defaultValue={color}
                  className="flex flex-row items-center space-x-4"
                  onValueChange={(val) => {
                    setColor(val);
                  }}
                >
                  {Object.entries(siteConfig.colors).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <RadioGroupItem value={value} id={`color-${key}`} />
                      <Label
                        htmlFor={`color-${key}`}
                        className={cn('md:text-base', value)}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px]">
                <Image
                  alt="Neon sign preview"
                  className="aspect-square rounded-lg object-fill opacity-80"
                  height={500}
                  width={500}
                  quality={100}
                  src="/wall.jpg"
                />

                <div
                  className={cn(
                    'absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white',
                    //'p-4 rounded-lg border-2',
                    color,
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
