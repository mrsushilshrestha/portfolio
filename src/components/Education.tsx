import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, FlaskConical, Map, Leaf, Monitor, Code, Terminal, Database, Cpu } from "lucide-react";
import { education, training } from "@/data/siteData";
import BotanicalDecor from "@/components/BotanicalDecor";
import educationBg from "@/assets/education.jpg";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  FlaskConical: <FlaskConical className="w-5 h-5" />,
  Map: <Map className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
  Monitor: <Monitor className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
};

const TimelineItem = ({
  item,
  index,
  side,
}: {
  item: { year: string; title: string; institution: string; description?: string; icon: string };
  index: number;
  side: "left" | "right";
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex items-start gap-6 group mb-10"
    >
      <div className="flex flex-col items-center flex-shrink-0 relative">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 z-10 border border-white/20">
          {iconMap[item.icon]}
        </div>
        {/* Vertical connector line */}
        <div className="absolute top-12 bottom-[-40px] w-0.5 bg-gradient-to-b from-white/40 via-white/10 to-transparent left-1/2 -translate-x-1/2" />
      </div>
      <div className="flex-1 bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)] hover:bg-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
        {/* Soft glow highlight inside card */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-body text-white font-semibold px-3 py-1 bg-white/10 rounded-full border border-white/10">{item.year}</span>
        </div>
        <h4 className="font-heading text-xl font-bold text-white drop-shadow-md leading-tight">{item.title}</h4>
        <p className="font-body text-sm text-white/90 font-medium mt-1 drop-shadow-sm">{item.institution}</p>
        <div className="w-12 h-px bg-white/30 my-4" />
        <p className="font-body text-sm text-white/70 leading-relaxed font-light">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="education" 
      className="section-padding relative text-white group" 
      ref={ref}
    >
      {/* Mobile-safe fixed background workaround: Prevents zooming/jumping on mobile scroll */}
      <div className="absolute inset-0 z-0 [clip-path:inset(0)]">
        <div 
          className="fixed inset-0 w-[100vw] h-[100vh] bg-cover bg-center md:bg-top bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url(${educationBg})` }}
        />
      </div>

      {/* Dark overlay specifically for background legibility: lighter at top, darker at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90 pointer-events-none z-0" />

      {/* Since we have a transparent background over the dark overlay, we might remove the botanical decor, or keep it with low opacity */}
      <div className="relative z-10">
        <BotanicalDecor variant="education" />
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-white/80 font-body text-sm tracking-widest uppercase mb-2 font-semibold">Academic Background</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white drop-shadow-md">Education & Training</h2>
        </motion.div>

          <div className="grid md:grid-cols-2 gap-12 text-white">
          {/* Education Column */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-white mb-6">
              Education
            </h3>
            {education.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} side="left" />
            ))}
          </div>

          {/* Training Column */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-white mb-6">
              Training & Certificates
            </h3>
            {training.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} side="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
