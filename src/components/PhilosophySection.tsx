import { motion } from "framer-motion";
import characterWalking from "@/assets/character-walking.jpg";

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Why <span className="text-gradient-gold">Toly Mubarak</span>?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
              In Ramadhan, we move fast — but with intention.<br />
              In crypto, we gain — but with responsibility.<br /><br />
              Toly Mubarak is built on three principles:
            </p>
            <div className="space-y-5">
              {[
                { icon: "⚡", title: "Speed without chaos", desc: "Moving fast with purpose and clarity." },
                { icon: "🤝", title: "Community over ego", desc: "Growing together, never alone." },
                { icon: "💎", title: "Gains with barakah", desc: "Blessed returns through honest intention." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-body font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={characterWalking}
              alt="Character walking with crystal gem"
              className="w-64 md:w-80 rounded-2xl glow-crystal animate-float-slow"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
