import Image from "next/image";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 gradient-brand opacity-95"></div>
      <div className="relative max-w-7xl mx-auto px-8 text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <h2 className="font-extrabold text-4xl md:text-6xl tracking-tight mb-6 md:mb-8 text-white">
            Ready to Stop Chasing and Start Connecting?
          </h2>
          <p className="text-xl md:text-2xl text-white opacity-95 mb-10 md:mb-14 leading-relaxed max-w-3xl">
            Join hundreds of founders who have ditched the cold email grind and are now having real conversations with real investors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#pricing"
              className="bg-white text-[#667eea] font-bold px-10 py-5 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 text-lg"
            >
              Get Started Now
            </a>
            <a
              href="#features"
              className="border-3 border-white text-white font-bold px-10 py-5 rounded-lg hover:bg-white hover:text-[#667eea] transition-all duration-200 text-lg"
            >
              Learn More
            </a>
          </div>

          <p className="text-white text-sm mt-8 opacity-80">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
