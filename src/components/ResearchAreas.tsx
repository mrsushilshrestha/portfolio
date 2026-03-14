import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Users, Shield, BarChart3 } from "lucide-react";
import { researchAreas } from "@/data/siteData";
import BotanicalDecor from "@/components/BotanicalDecor";

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
};

const ResearchAreas = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted relative overflow-hidden" ref={ref}>
      <BotanicalDecor variant="default" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-2">Expertise</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Research Focus Areas</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative background accent line */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-accent/10 transition-colors" />
              
              <div className="absolute left-0 top-0 bottom-0 w-1.5 gradient-forest opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center text-forest mb-6 group-hover:scale-110 group-hover:bg-forest group-hover:text-white transition-all duration-300 shadow-sm">
                  {iconMap[area.icon]}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 leading-tight">{area.title}</h3>
                <div className="w-8 h-1 bg-accent/20 mb-4 rounded-full group-hover:w-16 group-hover:bg-accent/40 transition-all duration-300" />
                <p className="font-body text-sm text-foreground/80 leading-relaxed font-medium">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
