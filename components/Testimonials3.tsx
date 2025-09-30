import Image from "next/image";
import { StaticImageData } from "next/image";
import config from "@/config";

const list: {
  username?: string;
  name: string;
  text: string;
  img?: string | StaticImageData;
  company?: string;
  raised?: string;
}[] = [
  {
    name: "Sarah Chen",
    company: "HealthTech Startup",
    raised: "Raised $2M",
    text: "After 4 months of cold emailing with zero responses, I tried ConnectCap. Within 3 weeks, I had 8 investor calls and closed my seed round. This platform changed everything for me.",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    name: "Marcus Rodriguez",
    company: "FinTech Platform",
    raised: "Raised $1.5M",
    text: "The investor matches were incredibly relevant. No more wasting time pitching to VCs who aren't interested in my space. Every call was productive and several led to term sheets.",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
  {
    name: "Jessica Taylor",
    company: "SaaS for E-commerce",
    raised: "Raised $750K",
    text: "The pitch prep support was invaluable. They helped me tighten my story and anticipate tough questions. I felt confident going into every investor conversation.",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  },
];

const Testimonial = ({ i }: { i: number }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative max-w-lg h-full p-8 md:p-10 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-md:text-sm flex flex-col border-2 border-gray-100">
        <blockquote className="relative flex-1">
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            {testimonial.text}
          </p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-6 mt-6 border-t border-gray-200">
          <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
            {testimonial.img ? (
              <Image
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
                src={list[i].img}
                alt={`${list[i].name}'s testimonial for ${config.appName}`}
                width={64}
                height={64}
              />
            ) : (
              <span className="w-14 h-14 md:w-16 md:h-16 rounded-full flex justify-center items-center text-xl font-medium bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
                {testimonial.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex-1">
            <div className="font-bold text-gray-900 text-lg">
              {testimonial.name}
            </div>
            {testimonial.company && (
              <div className="text-sm text-gray-600">
                {testimonial.company}
              </div>
            )}
            {testimonial.raised && (
              <div className="text-sm font-semibold gradient-brand-text mt-1">
                {testimonial.raised}
              </div>
            )}
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials3 = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-gray-50">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-gray-900">
              Founders Are <span className="gradient-brand-text">Closing Deals</span>
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-600">
            Real founders. Real results. See how ConnectCap helped them break through and secure funding.
          </p>
        </div>

        <ul
          role="list"
          className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
        >
          {[...Array(3)].map((e, i) => (
            <Testimonial key={i} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials3;
