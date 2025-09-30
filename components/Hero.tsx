import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-5xl lg:text-7xl tracking-tight leading-tight">
          Stop Chasing Investors. <span className="gradient-brand-text">Start Connecting.</span>
        </h1>
        <p className="text-xl opacity-80 leading-relaxed">
          Early-stage founders waste months sending cold emails and getting ignored. ConnectCap gives you direct, 1-on-1 phone call access to investors who actually want to hear your pitch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#pricing"
            className="gradient-brand text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-center"
          >
            Get Started Today
          </a>
          <a
            href="#features"
            className="border-2 border-[#667eea] text-[#667eea] font-semibold px-8 py-4 rounded-lg hover:bg-[#667eea] hover:text-white transition-all duration-200 text-center"
          >
            See How It Works
          </a>
        </div>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          alt="Founder connecting with investors"
          className="w-full rounded-2xl shadow-2xl"
          priority={true}
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default Hero;
