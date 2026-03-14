import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ── Personal images ────────────────────────────────────────────────────────────
import personal1 from "@/assets/gallery-image/personal/Ford-1990.jpeg";
import personal2 from "@/assets/gallery-image/personal/Ford-1990__1.jpeg";
import personal3 from "@/assets/gallery-image/personal/Ford-1990__2.jpeg";

// ── Event images ───────────────────────────────────────────────────────────────
import event1 from "@/assets/gallery-image/events/HULT-Prize.jpg";
import event2 from "@/assets/gallery-image/events/HULT-Prize__1.jpg";
import event3 from "@/assets/gallery-image/events/HULT-Prize__2.jpg";
import event4 from "@/assets/gallery-image/events/HULT-Prize__3.jpg";
import event5 from "@/assets/gallery-image/events/HULT-Prize__4.jpg";
import event6 from "@/assets/gallery-image/events/Marathon.jpeg";
import event7 from "@/assets/gallery-image/events/Marathon__1.jpeg";
import event8 from "@/assets/gallery-image/events/Skill-Shikshya-Certificate.jpg";
import event9 from "@/assets/gallery-image/events/Student-Interaction-Program.jpg";

// ── Certificate images ─────────────────────────────────────────────────────────
import cert1 from "@/assets/gallery-image/certificate/Untitled-copy.jpg";
import cert2 from "@/assets/gallery-image/certificate/Untitled.jpg";
import cert3 from "@/assets/gallery-image/certificate/python_basic.jpg";

// ── Work images ────────────────────────────────────────────────────────────────
import work1 from "@/assets/gallery-image/work/1-Home-Page.png";
import work2 from "@/assets/gallery-image/work/2-About-Page.png";
import work3 from "@/assets/gallery-image/work/3-Education-page.png";
import work4 from "@/assets/gallery-image/work/Work.jpg";
import work5 from "@/assets/gallery-image/work/avatar2.png";
import work6 from "@/assets/gallery-image/work/avatar4.jpg";

// ── Typed gallery items ────────────────────────────────────────────────────────
type Category = "All" | "Personal" | "Events" | "Certificate" | "Work";

interface GalleryImage {
  src: string;
  title: string;
  caption: string;
  category: Exclude<Category, "All">;
}

const allImages: GalleryImage[] = [
  { src: personal1, title: "Ford 1990",         caption: "A personal moment captured",    category: "Personal" },
  { src: personal2, title: "Ford 1990",         caption: "Exploring the world",           category: "Personal" },
  { src: personal3, title: "Ford 1990",         caption: "Life in a frame",               category: "Personal" },

  { src: event1,    title: "HULT Prize",        caption: "HULT Prize competition",        category: "Events"   },
  { src: event2,    title: "HULT Prize",        caption: "Team collaboration at HULT",    category: "Events"   },
  { src: event3,    title: "HULT Prize",        caption: "Innovation & Ideas at HULT",    category: "Events"   },
  { src: event4,    title: "HULT Prize",        caption: "Presenting at HULT Prize",      category: "Events"   },
  { src: event5,    title: "HULT Prize",        caption: "Award ceremony at HULT Prize",  category: "Events"   },
  { src: event6,    title: "Marathon",          caption: "Crossing the marathon finish",  category: "Events"   },
  { src: event7,    title: "Marathon",          caption: "Running through the marathon",  category: "Events"   },
  { src: event8,    title: "Skill Shikshya",    caption: "Training at Skill Shikshya",    category: "Events"   },
  { src: event9,    title: "Student Program",   caption: "Student Interaction Program",   category: "Events"   },

  { src: cert1,     title: "Certificate",       caption: "Achievement unlocked",          category: "Certificate" },
  { src: cert2,     title: "Certificate",       caption: "Certified professional",        category: "Certificate" },
  { src: cert3,     title: "Python Basic",      caption: "HackerRank Python Certification", category: "Certificate" },

  { src: work1,     title: "Portfolio Home",    caption: "Home page of portfolio",        category: "Work"     },
  { src: work2,     title: "About Page",        caption: "About section design",          category: "Work"     },
  { src: work3,     title: "Education Page",    caption: "Education section layout",      category: "Work"     },
  { src: work4,     title: "Work",              caption: "At work",                        category: "Work"     },
  { src: work5,     title: "Avatar",            caption: "Profile design",                category: "Work"     },
  { src: work6,     title: "Avatar",            caption: "Creative avatar design",        category: "Work"     },
];

const CATEGORIES: Category[] = ["All", "Personal", "Events", "Certificate", "Work"];
const PAGE_SIZE = 12;

const Gallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [page, setPage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? allImages
    : allImages.filter((img) => img.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const pageImages = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const handleCategory = (cat: Category) => {
    setActiveCategory(cat);
    setPage(0);
  };

  return (
    <section id="gallery" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-2">Moments</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Gallery</h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`min-w-[90px] px-5 py-2 rounded-full text-sm font-body font-semibold border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground/60 border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* 3×4 Image Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + page}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
          >
            {pageImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(page * PAGE_SIZE + i)}
                className="relative group aspect-square overflow-hidden rounded-xl bg-muted"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover caption overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/65 transition-all duration-300 flex flex-col items-center justify-end p-3">
                  <p className="text-white font-heading text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md text-center leading-tight">
                    {img.title}
                  </p>
                  <p className="text-white/80 font-body text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-0.5 text-center">
                    {img.caption}
                  </p>
                </div>
              </button>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Slider Pagination (dots only) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === page
                    ? "w-6 h-2.5 bg-foreground"
                    : "w-2.5 h-2.5 bg-foreground/30 hover:bg-foreground/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox > 0 ? lightbox - 1 : filtered.length - 1); }}
              className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox < filtered.length - 1 ? lightbox + 1 : 0); }}
              className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <motion.div
              key={lightbox}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="flex flex-col items-center gap-4 max-w-3xl w-full"
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].title}
                loading="lazy"
                decoding="async"
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="text-center">
                <p className="text-white font-heading font-semibold text-lg">{filtered[lightbox].title}</p>
                <p className="text-white/60 font-body text-sm mt-1">{filtered[lightbox].caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
