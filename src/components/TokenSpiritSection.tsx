import { motion } from "framer-motion";
import crystalGlow from "@/assets/crystal-glow.jpg";

const TokenSpiritSection = () => {
  const principles = [
    { icon: "🕊️", text: "Fair launch" },
    { icon: "🔍", text: "No hidden mint" },
    { icon: "🤲", text: "No silent privileges" },
    { icon: "✨", text: "Transparency as worship" },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Blessed in <span className="text-gradient-crystal">Gains</span>
          </h2>
          <p className="text-muted-foreground italic mb-10 text-sm">
            "Gains are welcomed, not chased."
          </p>

          <div className="flex justify-center mb-12">
            <img
              src={crystalGlow}
              alt="Glowing crystal gem representing blessed gains"
              className="w-48 md:w-64 rounded-full glow-crystal animate-float-slow"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-background rounded-xl p-5 border border-border"
              >
                <span className="text-3xl mb-3 block">{p.icon}</span>
                <p className="text-sm font-body font-medium text-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenSpiritSection;
