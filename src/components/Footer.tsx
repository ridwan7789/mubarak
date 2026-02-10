const Footer = () => {
  return (
    <footer className="bg-night-sky py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-3">
          🌙 TOLY MUBARAK 🪙
        </h3>

        <p className="text-gold-glow/80 text-sm font-body mb-8 leading-relaxed">
          Fast in tech.<br />
          Strong in community.<br />
          Blessed in gains.
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-10">
          <a href="https://x.com/MubarokToly" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-gold transition-colors text-sm font-body font-medium">
            𝕏 Twitter
          </a>
          <a href="https://t.me/Mubarak_sol" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-gold transition-colors text-sm font-body font-medium">
            ✈️ Telegram
          </a>
          <a href="https://Tolymubarak.fun" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-gold transition-colors text-sm font-body font-medium">
            🌐 Website
          </a>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-primary-foreground/30 text-xs font-body">
            © 2026 Toly Mubarak. Built with barakah.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
