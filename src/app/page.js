import ClientVideoSlot from './Components/VideoComponents/ClientVideoSlot';

import Hero from './Components/Home/HeroSaction'
import WhatDefine from './Components/Home/WhatDefine'
import VideoClient from './Components/Home/VideoClient';
import Marquee from './Components/Home/Marquee';
import FramedVideo from './Components/Home/FramedVideo';
import StrategySection from './Components/Home/StrategySection';
import TechSliderClient from './Components/Home/TechSliderClient';
export default function Page() {
  return (
    <main className="relative bg-slate-100 ">
      <Hero/>
      <WhatDefine/>
      <VideoClient /> 
      <Marquee />  

      <ClientVideoSlot>
          <FramedVideo />
      </ClientVideoSlot>
      
      <StrategySection />
      <TechSliderClient /> 
    </main>
  );
}
