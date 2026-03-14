import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Clock, Users, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/siteData";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-foreground">Project not found.</p>
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Navbar solid />
      
      {/* ─── TOP: RESEARCH TOPIC ─────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-muted/30 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1 text-primary hover:text-accent font-body text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Research
          </Link>

          <div className="mb-5">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-3 py-1 bg-accent/10 text-accent font-body text-xs font-bold uppercase tracking-wider rounded-full"
            >
              {project.category}
            </motion.span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-xl md:text-2xl font-bold text-foreground leading-snug mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-base text-foreground/80 leading-relaxed max-w-4xl"
          >
            {project.description}
          </motion.p>

          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5 inline-flex items-center gap-2 text-primary font-body font-bold hover:text-accent transition-colors underline decoration-2 underline-offset-4"
            >
              Visit Project Link <ArrowRight className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* ─── MIDDLE: ABSTRACT ───────────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="font-heading text-2xl font-bold text-foreground">Abstract</h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-sm relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-24 h-24 text-accent/5 -rotate-12" />
            <p className="font-body text-lg text-foreground/80 leading-relaxed italic relative z-10 text-left md:text-justify">
              {project.abstract}
            </p>
          </div>
        </section>

        {/* ─── BOTTOM MIDDLE: SUPERVISOR, CO-SUPERVISOR & TEAM ────────── */}
        <section className="mb-20 grid md:grid-cols-12 gap-10">

          {/* LEFT COLUMN: text content stacked vertically */}
          <div className="md:col-span-7 flex flex-col gap-8">

            {/* SUPERVISOR */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-widest">Supervisor</h3>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="bg-muted/50 rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full gradient-forest flex-shrink-0 flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {project.supervisor.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold text-foreground">{project.supervisor.name}</h4>
                    <p className="font-body text-sm text-accent font-semibold mb-1">{project.supervisor.institution}</p>
                    {project.supervisor.detail && (
                      <p className="font-body text-sm text-foreground/70 leading-relaxed">{project.supervisor.detail}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* CO-SUPERVISOR */}
            {project.coSupervisor && (
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-widest">Co-Supervisor</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="bg-muted/50 rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-300 flex-shrink-0 flex items-center justify-center text-amber-800 font-bold text-lg">
                      {project.coSupervisor.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-foreground">{project.coSupervisor.name}</h4>
                      {project.coSupervisor.institution && (
                        <p className="font-body text-sm text-accent font-semibold mb-1">{project.coSupervisor.institution}</p>
                      )}
                      {project.coSupervisor.detail && (
                        <p className="font-body text-sm text-foreground/70 leading-relaxed">{project.coSupervisor.detail}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MEMBERS */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-heading text-sm font-bold text-foreground uppercase tracking-widest">Members</h3>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.team.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border shadow-sm group hover:shadow-md hover:border-accent/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center border-2 border-muted group-hover:border-accent/40 transition-colors flex-shrink-0">
                      {member.avatar ? (
                        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <span className="text-primary font-bold text-sm">{member.name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <p className="font-body text-sm font-bold text-foreground leading-tight">{member.name}</p>
                      <p className="font-body text-xs text-muted-foreground font-mono">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Institution */}
            <div className="bg-card rounded-2xl p-5 border border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-body">Institution</p>
              <p className="font-heading text-sm font-bold text-foreground">{project.supervisor.institution}</p>
            </div>
          </div>

          {/* RIGHT COLUMN: mood image in same place */}
          <div className="md:col-span-5">
            {project.showMoodImage && project.moodImage && (
              <motion.div
                initial={{ opacity: 0, rotate: 2 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-24 relative group"
              >
                <div className="absolute inset-0 bg-accent/20 rounded-3xl translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                <img
                  src={project.moodImage}
                  alt="Research Context"
                  className="relative z-10 w-full h-[28rem] object-cover rounded-3xl shadow-xl border-4 border-card"
                />
              </motion.div>
            )}
          </div>

        </section>

        {/* ─── BOTTOM: HORIZONTAL TIMELINE + CIRCULAR PROGRESS ─────── */}
        <section className="bg-muted/40 rounded-3xl border border-border p-10 mb-10">

          <div className="flex items-center gap-4 mb-10">
            <h3 className="font-heading text-lg font-bold text-foreground uppercase tracking-widest">Timeline</h3>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* ── HORIZONTAL ALTERNATING TIMELINE ── */}
          <div className="relative w-full mb-14 overflow-x-auto pb-4 custom-scrollbar">
            <div 
              className="relative" 
              style={{ 
                height: 280, 
                minWidth: Math.max(600, project.milestones.length * 150) 
              }}
            >

              {/* ── Center horizontal rule (at exact midpoint 140px) ── */}
              <div
                className="absolute left-0 right-0 bg-border"
                style={{ top: 140, height: 2 }}
              />

              {project.milestones.map((ms, i) => {
                const total = project.milestones.length;
                // 12%–88% range gives each edge label (half-width ≈52px)
                // enough room on a 560px+ container: 12%*560=67px > 52px ✓
                const leftPct = 12 + (i / (total - 1)) * 76;
                const isAbove = i % 2 === 0;

                //  ── Pixel layout (all values relative to 280px container) ──
                //  Center line is at y=140. Dot is 16px tall → top=132, center=140.
                //
                //  ABOVE layout (label → card → dash → dot → line):
                //    label  : top=10, height≈22
                //    card   : top=34, height=28
                //    dash   : top=62 → 132 (height=70) — connects card to dot top
                //    dot    : top=132
                //
                //  BELOW layout (line → dot → dash → card → label):
                //    dot    : top=132
                //    dash   : top=148 (dot bottom) → height=70
                //    card   : top=218
                //    label  : top=252

                const dotTop     = 132;
                const dashHeight = 70;

                const aboveDashTop  = dotTop - dashHeight;    // 62
                const aboveCardTop  = aboveDashTop - 28;      // 34
                const aboveLabelTop = aboveCardTop  - 24;     // 10

                const belowDashTop  = dotTop + 16;            // 148  (dotTop + dotHeight)
                const belowCardTop  = belowDashTop + dashHeight; // 218
                const belowLabelTop = belowCardTop + 30;      // 248

                const dashTop  = isAbove ? aboveDashTop  : belowDashTop;
                const cardTop  = isAbove ? aboveCardTop  : belowCardTop;
                const labelTop = isAbove ? aboveLabelTop : belowLabelTop;

                return (
                  <div key={ms.title}>
                    {/* Dashed vertical connector */}
                    <div
                      className={`absolute border-l-2 border-dashed ${
                        ms.completed ? "border-accent" : "border-border/50"
                      }`}
                      style={{
                        left: `calc(${leftPct}% - 1px)`,
                        top: dashTop,
                        height: dashHeight,
                      }}
                    />

                    {/* Dot exactly on center line */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.12 }}
                      className={`absolute w-4 h-4 rounded-full border-2 z-10 ${
                        ms.completed
                          ? "bg-forest border-forest shadow-[0_0_10px_rgba(22,163,74,0.5)]"
                          : "bg-background border-muted-foreground/40"
                      }`}
                      style={{
                        left: `calc(${leftPct}% - 8px)`,
                        top: dotTop,
                      }}
                    />

                    {/* Date badge */}
                    <div
                      className="absolute bg-card border border-border rounded-lg px-2 py-1 text-center shadow-sm"
                      style={{
                        left: `calc(${leftPct}% - 44px)`,
                        width: 88,
                        top: cardTop,
                      }}
                    >
                      <p className="font-body text-[10px] text-foreground/80 leading-tight whitespace-nowrap">{ms.date}</p>
                    </div>

                    {/* Milestone title label */}
                    <div
                      className="absolute text-center"
                      style={{
                        left: `calc(${leftPct}% - 52px)`,
                        width: 104,
                        top: labelTop,
                      }}
                    >
                      <p className={`font-body text-[9px] font-extrabold uppercase tracking-wide leading-tight ${
                        ms.completed ? "text-accent" : "text-muted-foreground"
                      }`}>
                        {ms.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── CIRCULAR PROGRESS RING ── */}
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <div className="flex flex-col items-center">
              {/* SVG ring */}
              {(() => {
                const size = 160;
                const stroke = 14;
                const radius = (size - stroke) / 2;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (project.progress / 100) * circumference;
                return (
                  <div className="relative" style={{ width: size, height: size }}>
                    <svg width={size} height={size} className="-rotate-90">
                      <defs>
                        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="50%" stopColor="#16a34a" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      {/* Track */}
                      <circle
                        cx={size / 2} cy={size / 2} r={radius}
                        fill="none" stroke="currentColor"
                        strokeWidth={stroke}
                        className="text-muted-foreground/10"
                      />
                      {/* Progress arc */}
                      <motion.circle
                        cx={size / 2} cy={size / 2} r={radius}
                        fill="none"
                        stroke="url(#ringGrad)"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                      />
                    </svg>
                    {/* Centre label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="font-heading text-3xl font-black text-primary leading-none"
                      >
                        {project.progress}%
                      </motion.span>
                    </div>
                  </div>
                );
              })()}
              <p className="font-body text-sm text-muted-foreground mt-3 font-semibold">Overall Progress</p>
            </div>

            <div className="flex flex-col gap-3 min-w-[200px]">
              <p className="font-heading text-lg font-bold text-foreground">Project Progress</p>
              <p className="font-body text-sm text-muted-foreground">Status: Active Research Phase</p>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-forest" />
                  <span className="font-body text-xs text-foreground">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-border border border-border" />
                  <span className="font-body text-xs text-foreground">Pending</span>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {project.milestones.map((ms) => (
                  <div key={ms.title} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      ms.completed ? 'bg-forest' : 'bg-muted-foreground/30'
                    }`} />
                    <span className="font-body text-xs text-foreground/80 truncate">{ms.title}</span>
                    <span className="font-body text-[10px] text-muted-foreground ml-auto flex-shrink-0">{ms.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default ProjectDetail;
