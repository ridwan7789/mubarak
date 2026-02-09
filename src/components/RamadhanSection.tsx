import { motion } from "framer-motion";
import characterMosque from "@/assets/character-mosque.jpg";

const RamadhanSection = () => {
  return (
    <section id="ramadhan" className="section-padding bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-10">
            <img
              src={characterMosque}
              alt="Character holding crystal near mosque under crescent moon"
              className="w-full max-w-2xl rounded-2xl glow-gold"
            />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
            A Ramadhan <span className="text-gradient-gold">Moment</span>
          </h2>

          <div className="max-w-xl mx-auto space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>Markets move fast.</p>
            <p>Ramadhan teaches patience.</p>
            <p className="text-foreground font-medium">
              Toly Mubarak stands where faith, culture, and technology align.
            </p>
          </div>

          <p className="mt-10 text-2xl md:text-3xl font-display text-gradient-gold font-bold">
            Ramadhan Kareem 🌙
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RamadhanSection;
