'use client';

import dynamic from 'next/dynamic';

const ClientVideoSlot = dynamic(
  () => import('./VideoSlot'),
  { ssr: false }
);

export default ClientVideoSlot;

