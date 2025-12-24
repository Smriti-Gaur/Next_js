'use client';

import dynamic from 'next/dynamic';

const Video_one = dynamic(
  () => import('./Video_one'),
  { ssr: false }
);

export default function VideoClient() {
  return <Video_one />;
}
