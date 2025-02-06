import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
const Section1 = () => {
  return (
    <div className="max-w-screen h-auto min-h-screen bg-gradient-to-br from-emerald-900 via-zinc-900 to-teal-900 bg-fixed">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
    </div>
  );
};

export default Section1;
