import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/siteData";
import BotanicalDecor from "@/components/BotanicalDecor";

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      // 'group' enables hover styling for child elements
      className="group bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-all duration-300 relative h-[380px] flex flex-col"
    >
      {/* Thumbnail Image Container */}
      <div className="absolute inset-0 z-0">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        ) : (
          <div className="w-full h-full gradient-forest opacity-80" />
        )}
        {/* Overlay gradient ensures text is legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
      </div>

      {/* Content Container positioned at the bottom */}
      <div className="relative z-20 mt-auto p-6 flex flex-col justify-end text-white h-full transition-transform duration-500 transform translate-y-[120px] group-hover:translate-y-0">
        
        <div>
          <span className="text-xs font-body font-semibold text-amber-light uppercase tracking-wider mb-2 block">
            {project.category}
          </span>
          <h3 className="font-heading text-xl font-bold text-white mb-2 line-clamp-2 shadow-sm">{project.title}</h3>
        </div>

        {/* Hidden Content that reveals on Hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex-1 flex flex-col">
          <p className="font-body text-sm text-white/90 mb-4 line-clamp-3 leading-relaxed border-t border-white/20 pt-4 mt-2">
            {project.description}
          </p>

          {/* Progress bar */}
          <div className="mb-4 mt-auto">
            <div className="flex justify-between text-xs font-body mb-1">
              <span className="text-white/80">Progress</span>
              <span className="text-amber-light font-semibold">{project.progress}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full gradient-amber transition-all duration-1000 ease-out"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>

          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-1 text-sm font-body font-bold text-amber-light hover:text-white transition-colors"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <BotanicalDecor variant="projects" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-2">My Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
