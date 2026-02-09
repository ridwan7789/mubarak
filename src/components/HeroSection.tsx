import { motion } from "framer-motion";
import heroImg from "@/assets/characters-together.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Star = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute text-gold animate-twinkle ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    ✦
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={heroBg}
        >
          <source src="/videos/toly-video-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-night-sky/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-sky/80 via-transparent to-night-sky/30" />
      </div>

      {/* Floating stars */}
      <Star className="top-[10%] left-[15%] text-2xl" delay={0} />
      <Star className="top-[20%] right-[20%] text-lg" delay={0.5} />
      <Star className="top-[15%] left-[45%] text-sm" delay={1} />
      <Star className="top-[30%] right-[35%] text-xl" delay={1.5} />
      <Star className="top-[8%] right-[10%] text-sm" delay={2} />
      <Star className="top-[25%] left-[8%] text-lg" delay={0.8} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-4 leading-tight">
            🌙 TOLY MUBARAK 🪙
          </h1>
          <p className="text-lg md:text-xl text-gold-glow font-body font-medium tracking-wide mb-6">
            Fast in tech. Strong in community. Blessed in gains.
          </p>
          <p className="text-sm md:text-base text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            A cultural crypto movement inspired by Ramadhan —
            where innovation meets intention, and profits meet purpose.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10"
        >
          <img
            src={heroImg}
            alt="Toly Mubarak characters holding gems together"
            className="mx-auto w-72 md:w-96 rounded-2xl glow-gold animate-float-slow"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#community"
            className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-body font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Join the Jamaah
          </a>
          <a
            href="#philosophy"
            className="px-8 py-3.5 border-2 border-gold text-gold rounded-full font-body font-semibold text-sm tracking-wide hover:bg-gold/10 transition-colors"
          >
            Enter the Barakah ✨
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
