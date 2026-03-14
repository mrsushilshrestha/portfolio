import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, researchAreas } from "@/data/siteData";

const Research = () => (
  <>
    <Navbar solid />
    <section className="pt-16 gradient-forest">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <FlaskConical className="w-10 h-10 text-accent mx-auto mb-4" />
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Research</h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Exploring the rich botanical heritage of Nepal through taxonomy, ethnobotany, and conservation science.
          </p>
        </motion.div>
      </div>
    </section>

    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-16 mb-16">
        {[
          { value: "3", label: "Active Projects" },
          { value: "142+", label: "Species Documented" },
          { value: "28", label: "Field Sites" },
          { value: "5+", label: "Publications" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-5 shadow-md border border-border text-center"
          >
            <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
            <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Focus Areas */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Focus Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-muted rounded-xl p-5 border border-border"
            >
              <h3 className="font-heading text-base font-semibold text-foreground mb-2">{area.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="mb-16">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
            >
              <span className="text-xs font-body font-semibold text-accent uppercase tracking-wider">{project.category}</span>
              <h3 className="font-heading text-lg font-bold text-foreground mt-2 mb-2">{project.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">{project.description}</p>

              <div className="mb-4">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="h-full rounded-full gradient-forest"
                  />
                </div>
                <p className="text-right font-body text-xs text-primary font-semibold mt-1">{project.progress}%</p>
              </div>

              {/* Team avatars */}
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {project.team.slice(0, 3).map((m) => (
                    <div
                      key={m.name}
                      className="w-8 h-8 rounded-full gradient-forest border-2 border-card flex items-center justify-center text-primary-foreground font-body text-xs font-bold"
                      title={m.name}
                    >
                      {m.name.charAt(0)}
                    </div>
                  ))}
                </div>
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center gap-1 text-sm font-body font-semibold text-accent hover:text-amber-light transition-colors"
                >
                  Details <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default Research;
