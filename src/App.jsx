import Navbar from './components/Navbar/Navbar';
import SocialDock from './components/SocialDock/SocialDock';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import TeamCards from './components/TeamCards/TeamCards';

export default function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col selection:bg-[#16A34A] selection:text-white">
      <Navbar />
      <SocialDock />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Gallery />
        <WhatWeDo />
        <TeamCards />
      </main>
    </div>
  );
}
