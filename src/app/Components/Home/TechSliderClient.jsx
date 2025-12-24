'use client';

import dynamic from 'next/dynamic';

const TechSlider = dynamic(
  () => import('./TechSlider'),
  { ssr: false }
);

export default function TechSliderClient() {
  return <TechSlider />;
}
