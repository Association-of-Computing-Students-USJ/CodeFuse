export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Background radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-pink opacity-10 blur-[120px]" />
          <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-neon-blue opacity-10 blur-[100px]" />
        </div>

        {/* Logo */}
        <div className="relative z-10 mb-6">
          <p className="font-mono text-neon-blue text-sm tracking-[0.4em] uppercase text-glow-blue">
            &#x7B;CODEFUSE 2.0&#x7D;
          </p>
        </div>

        {/* Tagline / Subtitle */}
        <p className="relative z-10 font-mono text-neon-pink text-xs tracking-[0.3em] uppercase mb-10 text-glow-pink">
          Intra-Faculty Coding Marathon
        </p>

        {/* Main Heading */}
        <h1 className="relative z-10 font-heading text-center leading-none mb-10">
          <span className="block text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-neon-pink text-glow-pink-lg">
            NEW QUESTION
          </span>
          <span className="block text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-neon-blue text-glow-blue-lg">
            RELEASED
          </span>
        </h1>

        {/* Code Icon */}
        <div className="relative z-10 flex items-center gap-4 mb-12">
          <div className="border border-neon-pink border-glow-pink rounded-lg px-6 py-3 flex items-center gap-3">
            <span className="font-mono text-neon-pink text-xl font-bold text-glow-pink">
              &lt;/&gt;
            </span>
            <span className="font-mono text-neon-blue text-xl font-bold text-glow-blue">
              +
            </span>
          </div>
          <p className="font-mono text-white/60 text-sm tracking-widest uppercase">
            Start Coding Now
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative z-10">
          <button
            type="button"
            className="font-mono text-sm tracking-widest uppercase px-10 py-4 border border-neon-blue text-neon-blue border-glow-blue rounded-md hover:bg-neon-blue hover:text-background transition-all duration-300 cursor-pointer"
          >
            Enter the Arena
          </button>
        </div>
      </section>

      {/* Footer — University Logos */}
      <footer className="bg-white w-full py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
          <p className="font-body text-background text-xs tracking-widest uppercase font-semibold">
            Organised by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {/* Placeholder logo slots — replace with actual <Image> components */}
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs font-mono">
              University Logo
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs font-mono">
              Faculty Logo
            </div>
            <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs font-mono">
              ACS Logo
            </div>
          </div>
          <p className="font-body text-background/50 text-xs">
            &copy; {new Date().getFullYear()} CODEFUSE 2.0. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
