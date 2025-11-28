import Hero from './Components/Home/HeroSaction'
import WhatDefine from './Components/Home/WhatDefine'
import Footer from './components/global/Footer';
export default function Page() {
  return (
    <main className="relative bg-slate-100">
      <Hero/>
      <WhatDefine/>
      <Footer/>
    </main>
  );
}
