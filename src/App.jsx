import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Copy,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Terminal,
  UserRound,
  Wrench,
  X,
} from "lucide-react";

const profile = {
  name: "Gerardo Rodríguez Pérez",
  title: "Estudiante de Matemáticas Aplicadas y Computación",
  focus: "Desarrollo de Software | Análisis de Datos | Tecnologías de la Información",
  location: "Naucalpan, Edo. Méx.",
  email: "gerardousy@gmail.com",
  github: "https://github.com/GerardoRp",
  cvFile: `${import.meta.env.BASE_URL}CV_Gerardo_Rodriguez_Perez.pdf`,
};

const projects = [
  {
    id: 1,
    name: "StayFlow",
    type: "Backend",
    subtitle: "API y aplicación de reservas de alojamientos",
    status: "Proyecto universitario en desarrollo",
    description:
      "Participación en el desarrollo de una API para una aplicación de alojamientos y reservas, con enfoque en una estructura cercana a producción.",
    bullets: [
      "Desarrollo de funcionalidades relacionadas con alojamientos, manejo de datos, persistencia y lógica de negocio.",
      "Construcción, prueba y documentación de endpoints.",
      "Colaboración en equipo mediante control de versiones, ramas y flujo de trabajo con GitHub.",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "Postman", "Swagger", "GitHub"],
  },
  {
    id: 2,
    name: "Wide Receiver",
    type: "Automatización",
    subtitle: "Chatbot sobre reglas de la NFL",
    status: "Proyecto académico / personal",
    description:
      "Chatbot integrado a una página web para responder preguntas relacionadas con reglas de la NFL, manteniendo enfoque temático y consistencia en las respuestas.",
    bullets: [
      "Diseño del flujo de respuestas para reducir respuestas fuera de contexto.",
      "Integración de Typebot para interfaz, n8n para automatización y Pinecone como base de conocimientos.",
      "Evaluación del comportamiento del chatbot para mejorar precisión y claridad.",
    ],
    tech: ["Typebot", "n8n", "Pinecone", "API Keys", "Web"],
  },
  {
    id: 3,
    name: "NutriAcatlán",
    type: "Web",
    subtitle: "Página web para apoyo nutricional",
    status: "Proyecto académico",
    description:
      "Página web básica enfocada en creación de dietas, recomendación de alimentos y cálculo de calorías y macronutrientes.",
    bullets: [
      "Implementación de formularios y lógica para generar planes según necesidades del usuario.",
      "Aplicación de HTML, CSS y JavaScript para la interfaz y funcionalidades principales.",
      "Diseño de una experiencia orientada a facilitar la consulta de información nutricional.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "UI"],
  },
];

const skills = [
  {
    title: "Lenguajes",
    icon: Code2,
    items: ["Java", "Python", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks y tecnologías",
    icon: Wrench,
    items: ["Spring Boot", "React", "APIs REST", "Maven"],
  },
  {
    title: "Bases de datos",
    icon: Database,
    items: ["MySQL", "Consultas SQL", "Persistencia backend"],
  },
  {
    title: "Herramientas",
    icon: Terminal,
    items: ["Git", "GitHub", "Postman", "Swagger", "VS Code", "Power BI", "Excel"],
  },
];

const cvTabs = [
  {
    id: "perfil",
    label: "Perfil",
    icon: UserRound,
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 leading-relaxed">
          Estudiante de Matemáticas Aplicadas y Computación en la Facultad de Estudios Superiores Acatlán, UNAM,
          actualmente cursando el 8.º semestre, con interés en incorporarme como becario en desarrollo de software,
          análisis de datos o tecnologías de la información.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Cuento con conocimientos base en Java, Python, SQL, desarrollo web, APIs REST, bases de datos y herramientas
          como Spring Boot, React, MySQL, Power BI, Postman y GitHub. Destaco por mi pensamiento lógico, capacidad de
          aprendizaje, responsabilidad y disposición para aplicar mis conocimientos en entornos profesionales reales.
        </p>
      </div>
    ),
  },
  {
    id: "educacion",
    label: "Educación",
    icon: GraduationCap,
    content: (
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">Facultad de Estudios Superiores Acatlán, UNAM</h3>
        <p className="text-slate-300">Licenciatura en Matemáticas Aplicadas y Computación</p>
        <p className="text-sm text-slate-400">Actualmente cursando 8.º semestre | Egreso estimado: junio de 2027</p>
      </div>
    ),
  },
  {
    id: "experiencia",
    label: "Experiencia",
    icon: BriefcaseBusiness,
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white">Protactic — Operador de monitoreo y control de accesos</h3>
          <p className="text-sm text-slate-400">Diciembre 2022 – febrero 2026</p>
        </div>
        <ul className="space-y-2 text-slate-300">
          <li>Realicé control de entrada y salida de personal, vehículos y bienes, manteniendo registros organizados.</li>
          <li>Administré información relacionada con movimientos de activos y accesos, cuidando la precisión de los reportes.</li>
          <li>Propuse mejoras de seguridad basadas en la observación de procesos, riesgos operativos y áreas de oportunidad.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "formacion",
    label: "Formación",
    icon: BookOpen,
    content: (
      <div className="grid gap-3 sm:grid-cols-2">
        {["Oracle Java Foundations — Oracle", "Oracle Database Foundations — Oracle", "IBM SkillsBuild — Habilidades blandas", "Python 101 for Data Science — IBM, en curso"].map((course) => (
          <div key={course} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200">
            {course}
          </div>
        ))}
      </div>
    ),
  },
];

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <motion.div
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"
        animate={{ x: [0, 80, 20, 0], y: [0, 40, 90, 0], scale: [1, 1.18, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-20 h-[28rem] w-[28rem] rounded-full bg-violet-600/25 blur-3xl"
        animate={{ x: [0, -70, -20, 0], y: [0, 90, 30, 0], scale: [1, 0.9, 1.2, 1] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-rose-500/20 blur-3xl"
        animate={{ x: [0, 90, -40, 0], y: [0, -70, -20, 0], scale: [1, 1.15, 1, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/70 to-slate-950" />
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-slate-300">{description}</p>}
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-200 shadow-sm">
      {children}
    </span>
  );
}

export default function PortfolioCVGerardo() {
  const [activeTab, setActiveTab] = useState("perfil");
  const [filter, setFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);

  const projectTypes = ["Todos", ...Array.from(new Set(projects.map((project) => project.type)))];
  const filteredProjects = useMemo(
    () => (filter === "Todos" ? projects : projects.filter((project) => project.type === filter)),
    [filter]
  );

  const activeTabData = cvTabs.find((tab) => tab.id === activeTab);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen scroll-smooth text-slate-100">
      <AnimatedBackground />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/10 shadow-lg shadow-cyan-500/10">
              <span className="text-sm font-black text-white">GR</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Gerardo RP</p>
              <p className="text-xs text-slate-400">Portafolio CV</p>
            </div>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#cv">CV</a>
            <a className="hover:text-white" href="#proyectos">Proyectos</a>
            <a className="hover:text-white" href="#habilidades">Habilidades</a>
            <a className="hover:text-white" href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      <section id="inicio" className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-5 py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <Sparkles className="h-4 w-4" />
              Disponible para oportunidad como becario
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 text-xl font-medium text-slate-200 md:text-2xl">{profile.title}</p>
            <p className="mt-3 max-w-2xl text-lg text-slate-300">{profile.focus}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.cvFile}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
              >
                <Download className="h-5 w-5" />
                Descargar CV
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                <Rocket className="h-5 w-5" />
                Ver proyectos
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Code2 className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 via-violet-400/20 to-rose-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-2xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 font-mono text-sm text-slate-200">
                <p className="text-cyan-300">&gt; whoami</p>
                <p className="mb-4">{profile.name}</p>
                <p className="text-cyan-300">&gt; status</p>
                <p className="mb-4">Estudiante MAC - UNAM | Buscando oportunidad como becario</p>
                <p className="text-cyan-300">&gt; skills</p>
                <p className="mb-4">Java, Python, SQL, Spring Boot, React, Power BI</p>
                <p className="text-cyan-300">&gt; focus</p>
                <p>Desarrollo de software | Análisis de datos | TI</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="cv" className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeader
          eyebrow="CV interactivo"
          title="Una vista rápida de mi perfil"
          description="Información organizada para conocer mi formación, experiencia, competencias y objetivos profesionales."
        />

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 backdrop-blur-2xl">
            {cvTabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`mb-2 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                    active ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-semibold">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="min-h-[280px] rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-2xl md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  {activeTabData && <activeTabData.icon className="h-6 w-6 text-cyan-300" />}
                  <h3 className="text-2xl font-bold text-white">{activeTabData?.label}</h3>
                </div>
                {activeTabData?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="proyectos" className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeader
          eyebrow="Proyectos"
          title="Trabajo técnico aplicado"
          description="Proyectos académicos y personales que muestran mi aprendizaje en backend, desarrollo web, automatización y manejo de datos."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === type
                  ? "bg-white text-slate-950"
                  : "border border-white/10 bg-white/[0.06] text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex min-h-[360px] flex-col rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/[0.09]"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">{project.type}</span>
                <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">{project.name}</h3>
              <p className="mt-2 text-sm font-medium text-slate-300">{project.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/15"
              >
                Ver detalles
                <ExternalLink className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="habilidades" className="mx-auto max-w-7xl px-5 py-20">
        <SectionHeader
          eyebrow="Habilidades"
          title="Tecnologías y herramientas"
          description="Competencias organizadas por área para mostrar mi base técnica sin recurrir a porcentajes subjetivos."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-2xl"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-5 py-20">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.07] p-8 backdrop-blur-2xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contacto</p>
              <h2 className="text-4xl font-black text-white md:text-5xl">Construyamos algo útil.</h2>
              <p className="mt-5 max-w-2xl text-slate-300">
                Estoy abierto a oportunidades como becario donde pueda aprender, aportar en proyectos reales y fortalecer mi perfil en desarrollo de software, análisis de datos o TI.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100"
                >
                  <Copy className="h-5 w-5" />
                  {copied ? "Correo copiado" : "Copiar correo"}
                </button>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
                >
                  <Code2 className="h-5 w-5" />
                  Abrir GitHub
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/45 p-6">
              <div className="space-y-5">
                <div className="flex gap-3">
                  <Mail className="mt-1 h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="text-sm text-slate-400">Correo</p>
                    <a className="font-semibold text-white hover:text-cyan-200" href={`mailto:${profile.email}`}>
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="text-sm text-slate-400">Ubicación</p>
                    <p className="font-semibold text-white">{profile.location}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Code2 className="mt-1 h-5 w-5 text-cyan-300" />
                  <div>
                    <p className="text-sm text-slate-400">GitHub</p>
                    <a className="font-semibold text-white hover:text-cyan-200" href={profile.github} target="_blank" rel="noreferrer">
                      github.com/GerardoRp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Gerardo Rodríguez Pérez. Portafolio personal.
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-5 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] w-full max-w-2xl overflow-auto rounded-[2rem] border border-white/10 bg-slate-950 p-6 shadow-2xl md:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-6">
                <div>
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {selectedProject.type}
                  </span>
                  <h3 className="mt-4 text-3xl font-black text-white">{selectedProject.name}</h3>
                  <p className="mt-2 text-slate-300">{selectedProject.subtitle}</p>
                  <p className="mt-1 text-sm text-slate-500">{selectedProject.status}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-2xl border border-white/10 bg-white/10 p-2 text-white transition hover:bg-white/15"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="leading-relaxed text-slate-300">{selectedProject.description}</p>

              <ul className="mt-6 space-y-3 text-slate-300">
                {selectedProject.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
