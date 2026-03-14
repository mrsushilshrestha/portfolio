const Footer = () => (
  <footer className="gradient-forest text-primary-foreground py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="font-heading text-lg font-semibold">Sushil Shrestha</span>
      </div>
      <p className="font-body text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Sushil Shrestha. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
