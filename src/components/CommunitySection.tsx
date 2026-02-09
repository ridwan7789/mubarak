import { motion } from "framer-motion";
import charactersTogether from "@/assets/characters-together.jpg";

const CommunitySection = () => {
  return (
    <section id="community" className="section-padding bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="flex justify-center">
            <img
              src={charactersTogether}
              alt="Two characters holding gems together representing community unity"
              className="w-72 md:w-96 rounded-2xl glow-gold"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Strong in <span className="text-gradient-gold">Community</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>This is not a whale playground.</p>
              <p className="font-semibold text-foreground text-xl">This is a <span className="text-gradient-gold">jamaah</span>.</p>
              <p>No one gets rich alone.</p>
              <p>We grow, protect, and celebrate together.</p>
            </div>
          </div>
        </motion.div>

        {/* Community video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-2xl rounded-2xl glow-crystal"
          >
            <source src="/videos/toly-video-2.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
