import BootScreen from "@/components/BootScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import SystemStatus from "@/sections/SystemStatus";
import Missions from "@/sections/Missions";
import Modules from "@/sections/Modules";
import Archive from "@/sections/Archive";
import Contact from "@/sections/Contact";
import AITerminal from "@/components/AITerminal";
import MouseGlow from "@/components/MouseGlow";
import FloatingParticles from "@/components/FloatingParticles";
import MissionControl from "@/sections/MissionControl";
import RecruiterMode from "@/components/RecruiterMode";
import Footer from "@/components/Footer";
import CurrentObjective from "@/sections/CurrentObjective";

export default function Home() {
  return (
    <main>
      <BootScreen />
      <FloatingParticles />
      <MouseGlow />
      <Navbar />
      <Hero />
      <CurrentObjective />
      <SystemStatus />
      <MissionControl />
      <Missions />
      <Modules />
      <Archive />
      <Contact />
      <Footer />
      <AITerminal />
      <RecruiterMode />
    </main>
  );
}