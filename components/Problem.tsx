const ProblemCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Problem = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-4xl md:text-6xl tracking-tight mb-6">
            The Fundraising Grind is <span className="gradient-brand-text">Broken</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            You pour your heart into building something incredible, but getting funded feels impossible. Sound familiar?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProblemCard
            icon="⏰"
            title="Wasted Time & Effort"
            description="Spend weeks researching investors, crafting personalized emails, and following up—only to get ghosted or receive generic rejections."
          />

          <ProblemCard
            icon="🚪"
            title="Lack of Direct Access"
            description="Investors are buried in cold outreach. Without a warm intro, your brilliant pitch never makes it past their spam folder."
          />

          <ProblemCard
            icon="😰"
            title="Mounting Frustration"
            description="Every ignored email chips away at your confidence. You start doubting yourself, your idea, and whether this is even worth it."
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl md:text-3xl text-gray-700 font-semibold max-w-4xl mx-auto leading-relaxed">
            The traditional fundraising process wasn&apos;t built for you. It was built for insiders with networks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
