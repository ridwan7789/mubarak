import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import crystalGlow from "@/assets/logo.jpeg";

const CONTRACT_ADDRESS = "TOLY...MUBARAK1234567890abcdef";

const TokenSpiritSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const principles = [
    { icon: "🕊️", text: "Fair launch" },
    { icon: "🔍", text: "No hidden mint" },
    { icon: "🤲", text: "No silent privileges" },
    { icon: "✨", text: "Transparency as worship" },
  ];

  return (
    <section id="token" className="section-padding bg-card">
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
          <p className="text-muted-foreground italic mb-8 text-sm">
            "Gains are welcomed, not chased."
          </p>

          {/* Contract address copy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-xs font-body text-muted-foreground mb-2 uppercase tracking-widest">
              Token Contract Address
            </p>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-3 bg-background border border-border rounded-full px-5 py-3 hover:border-accent transition-colors group cursor-pointer"
            >
              <span className="font-mono text-xs md:text-sm text-foreground truncate max-w-[200px] md:max-w-none">
                {CONTRACT_ADDRESS}
              </span>
              {copied ? (
                <Check className="w-4 h-4 text-primary shrink-0" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground shrink-0 transition-colors" />
              )}
            </button>
            {copied && (
              <p className="text-xs text-primary mt-2 font-body animate-fade-in">
                Copied! Barakah in your clipboard ✨
              </p>
            )}
          </motion.div>

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
