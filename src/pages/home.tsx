import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Nav } from "@/components/nav";
import { Mail, Phone, ExternalLink, Code, Cpu, Activity, Bot, Terminal, Github, Linkedin, X } from "lucide-react";

// Replace public/profile.jpg with your own photo to change this image.
const avatarImage = "/profile.jpg";

export function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [sramDetailOpen, setSramDetailOpen] = useState(false);
  const [cacheDetailOpen, setCacheDetailOpen] = useState(false);
  const [pipelineDetailOpen, setPipelineDetailOpen] = useState(false);
  const [oooDetailOpen, setOooDetailOpen] = useState(false);
  const [krittikaReportOpen, setKrittikaReportOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [robolabsDetailOpen, setRobolabsDetailOpen] = useState(false);

  return (
    <div className="min-h-screen relative circuit-pattern">
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-background/80 via-background to-background z-0"></div>
      
      <Nav onContactClick={() => setContactOpen(true)} />

      <main className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-24">
        {/* Hero Section */}
        <section id="home" className="min-h-[85vh] flex flex-col justify-center pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
              Suryaa Senthilkumar Shanthi
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-mono mb-8">
              <span className="text-primary">{`> `}</span>Robotics Systems Engineer
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
              Operating at the intersection of hardware and software. Building real physical systems that move through the world with precision and autonomy.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setContactOpen(true)} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors cursor-pointer rounded-sm">
                INITIALIZE CONTACT <ChevronRightIcon className="w-4 h-4" />
              </button>
              <button onClick={() => setCvOpen(true)} className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium transition-colors border border-border cursor-pointer rounded-sm">
                RESUME
              </button>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7"
            >
              <SectionHeader title="ABOUT_ME" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Robotics Systems Engineer with hands-on experience building autonomous navigation pipelines, multi-sensor fusion systems, and real-time embedded control on edge compute platforms (Jetson Nano, Raspberry Pi).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proven track record deploying object detection, PID-based motor control, and A* path planning in dynamic environments. Background spans RTL/FPGA design, embedded firmware, and systems-level hardware-software integration.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5 flex justify-center"
            >
              <div className="relative w-64 md:w-80">
                <img 
                  src={avatarImage} 
                  alt="Avatar" 
                  className="relative z-10 w-full h-auto block rounded-sm border border-border bg-card filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 border border-primary/30 rounded-sm transform translate-x-4 translate-y-4 pointer-events-none"></div>
                <div className="absolute inset-0 border border-primary/10 rounded-sm transform -translate-x-4 -translate-y-4 pointer-events-none"></div>
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-20 pointer-events-none rounded-sm"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 border-t border-border">
          <SectionHeader title="WORK_EXPERIENCE" />
          <div className="mt-12 space-y-12">
            <CompanyGroup
              company="Robolabs, LLC"
              location="Dublin, CA"
              onReadMore={() => setRobolabsDetailOpen(true)}
              roles={[
                {
                  title: "Robotics Systems Engineer",
                  date: "May 2025–Present",
                  bullets: [
                    "Designed and deployed a full autonomous robotics stack in C++ — spanning edge AI integration, multi-sensor fusion, real-time path planning, and closed-loop motion control",
                    "Implemented EKF-based localization fusing GPS, IMU, and wheel odometry for continuous 3-DOF (position + heading) pose estimation at 30 Hz",
                    "Architected a low-latency serial communication pipeline between a Jetson Nano vision system and an embedded motor controller with custom protocol design and thread-safe data handling",
                    "Delivered a fully autonomous system capable of real-time object detection, path replanning, and precise actuation with sub-3 cm positioning accuracy"
                  ],
                  skills: ["C++", "Sensor Fusion", "Autonomous Navigation", "Firmware Design/Debug"]
                }
              ]}
            />
          </div>
        </section>

        {/* Internships Section */}
        <section id="internships" className="py-24 border-t border-border">
          <SectionHeader title="INTERNSHIPS" />
          <div className="mt-12 space-y-12">
            <CompanyGroup
              company="Biio, Inc."
              location="San Francisco, CA"
              roles={[
                {
                  title: "ASIC & Embedded Design Intern",
                  date: "Jan 2025–May 2025",
                  bullets: [
                    "SystemVerilog-based feature extraction pipeline with I2C master-slave communication protocol",
                    "Protocol-accurate FSM supporting read/write ops over I2C with edge-detection, clock stretching, ACK/NACK logic",
                    "Synthesizable top-level wrapper integrating streaming data modules with parameterized signal widths",
                    "Improved RTL verification efficiency by 35%"
                  ],
                  skills: ["SystemVerilog", "Xilinx Vivado", "RTL Design", "I2C Protocol", "FSM Design", "ASIC Design"]
                }
              ]}
            />

            <CompanyGroup
              company="Geopogo"
              location="Berkeley, CA"
              roles={[
                {
                  title: "Embedded Software Development Engineer (Contract)",
                  date: "Jul 2024–Dec 2024",
                  bullets: [
                    "ZoneQuest platform data integration; ML algorithms improved UI performance by 10%",
                    "Integrated Generative AI system into Magic Leap 2 device for real-time processing"
                  ],
                  skills: ["Machine Learning", "DNN Optimization", "Generative AI"]
                },
                {
                  title: "AR & Embedded Systems Design Intern",
                  date: "May 2023–Dec 2023",
                  bullets: [
                    "3D models for industrial applications using Unity Engine",
                    "AR models with hardware-level I/O, XR plugins, I2C, GPIO, real-time debugging"
                  ],
                  skills: ["Embedded Systems", "RTOS", "Multi-threading", "Unity Engine", "AR/VR"]
                }
              ]}
            />

            <CompanyGroup
              company="Decibels Lab"
              location="Bangalore, India"
              roles={[
                {
                  title: "RTL Design Intern",
                  date: "May 2021–Jul 2021",
                  bullets: [
                    "RTL code blocks in Verilog on Vivado; enhanced FPGA operational efficiency by 20%",
                    "Timing analysis, constraint validation using check_timing and report_clocks"
                  ],
                  skills: ["RTL Design", "FPGA Development", "Xilinx Vivado", "Static Timing Analysis"]
                }
              ]}
            />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 border-t border-border">
          <SectionHeader title="EDUCATION" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <EducationCard 
              school="Georgia Institute of Technology"
              degree="M.S., Electrical and Computer Engineering"
              date="Aug 2022–May 2024"
              location="Atlanta, GA"
              gpa="3.67/4"
              courses="Adv Computer Architecture, Embedded Systems Design, Adv Programming Techniques, Adv VLSI Systems, Hardware Machine Learning"
              logo="/gt-logo.png"
            />
            
            <EducationCard 
              school="SRM Institute of Science and Technology"
              degree="B.Tech., Electronics and Communication Engineering"
              date="Jun 2018–May 2022"
              location="Chennai, India"
              gpa="9.24/10"
              courses="Digital Logic Design, Digital Logic Verification, Linear Integrated Circuits, Verilog, Microprocessors, Hardware Security"
              logo="/srm-logo.png"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 border-t border-border">
          <SectionHeader title="PROJECTS_&_SCHEMATICS" />

          {/* Side-by-side: Personal | Academic */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start">

            {/* Personal column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs text-primary tracking-widest">// PERSONAL</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <GridProjectCard
                title="Clutch Simulator"
                subtitle="Mechanical Systems Simulation"
                date="Present"
                description="Interactive clutch mechanism simulator built in HTML/JS. Models real-world clutch engagement physics, slip dynamics, and torque transfer for mechanical systems analysis."
                tags={["HTML", "JavaScript", "Physics Simulation", "Mechanical Systems"]}
                githubUrl="https://github.com/suryaa2902/Clutch-Simulator"
                inProgress
              />
            </div>

            {/* Academic column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-mono text-xs text-primary tracking-widest">// ACADEMIC</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <GridProjectCard
                  title="Simulator Enhancements for Krittika"
                  subtitle="Georgia Tech"
                  date="Mar–Apr 2024"
                  description="Extended Krittika with 11 new SIMD-based non-linear activation functions (GeLU, Swish, Mish, Sigmoid). Set up RISC-V simulation with Rocket Core, GNU Toolchain, Spike ISA Simulator."
                  tags={["RISC-V", "GNU Toolchain", "C", "SIMD Profiling", "Deep Learning Accelerators"]}
                  onReadMore={() => setKrittikaReportOpen(true)}
                />
                <GridProjectCard
                  title="16×4 SRAM Array design"
                  subtitle="Georgia Tech"
                  date="Oct–Dec 2023"
                  description="Designed 16×4 SRAM array using 6T SRAM cell in Cadence Virtuoso. Array power: 1.2mW at 800mV."
                  tags={["Cadence Virtuoso", "SRAM Memory Design", "Analog Circuit Design", "Verilog", "Xilinx Vivado"]}
                  githubUrl="https://github.com/suryaa2902/512-bit-SRAM"
                  onReadMore={() => setSramDetailOpen(true)}
                />
                <GridProjectCard
                  title="Multi-core Cache Partitioning"
                  subtitle="Georgia Tech"
                  date="Nov 2022"
                  description="Multi-level cache hierarchy (private L1, shared L2), DRAM model with 16 banks. Up to 30% reduction in average memory access time."
                  tags={["C++", "Cache Architecture", "DRAM Modeling", "Cache Coherency", "Memory Hierarchy"]}
                  githubUrl="https://github.com/suryaa2902/Cache-Partitioning-for-Multi-Level-System"
                  onReadMore={() => setCacheDetailOpen(true)}
                />
                <GridProjectCard
                  title="Superscalar Out-of-Order Pipeline"
                  subtitle="Georgia Tech"
                  date="Oct–Nov 2022"
                  description="Superscalar processor pipeline in C++ with register renaming (RAT + ROB). Average CPI: 1.033 across diverse benchmarks."
                  tags={["C++", "Computer Architecture", "Tomasulo Algorithm"]}
                  githubUrl="https://github.com/suryaa2902/Out-of-Order-Pipeline-with-In-Order-Commit"
                  onReadMore={() => setOooDetailOpen(true)}
                />
                <GridProjectCard
                  title="I2C Driver for ENS160 Sensor"
                  subtitle="Georgia Tech"
                  date="Oct–Nov 2022"
                  description="C++ I2C driver for SparkFun Qwiic ENS160 air quality sensor; LCD display for AQI, CO2, TVOC."
                  tags={["C++", "I2C", "Embedded Systems"]}
                  githubUrl="https://github.com/suryaa2902/Cpp-Driver-for-ENS160"
                  onReadMore={() => window.open("https://github.com/suryaa2902/Cpp-Driver-for-ENS160", "_blank")}
                />
                <GridProjectCard
                  title="Superscalar Pipeline Branch Prediction"
                  subtitle="Georgia Tech"
                  date="Aug–Sep 2022"
                  description="GShare, Bimodal, Always Taken predictors with Global History Table. 20% reduction in branch mispredictions."
                  tags={["C++", "Branch Prediction", "Computer Architecture", "Verilog", "Xilinx Vivado", "RTL"]}
                  githubUrl="https://github.com/suryaa2902/5-Stage-Superscalar-Pipeline"
                  githubUrl2="https://github.com/suryaa2902/Superscalar-Pipeline-in-Verilog"
                  onReadMore={() => setPipelineDetailOpen(true)}
                />
                <GridProjectCard
                  title="Pacman"
                  subtitle="Georgia Tech"
                  date="Sep 2022"
                  description="Faithful recreation of the classic Pacman arcade game built in C++. Features ghost AI, collision detection, score tracking, and all classic game mechanics."
                  tags={["C++", "Game Development", "SFML"]}
                  githubUrl="https://github.com/suryaa2902/Pacman"
                  onReadMore={() => window.open("https://github.com/suryaa2902/Pacman", "_blank")}
                />
              </div>
            </div>

          </div>
        </section>

        <section id="skills" className="py-24 border-t border-border">
          <SectionHeader title="SYSTEM_CAPABILITIES" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <SkillCategory 
              title="Programming" 
              icon={<Code className="text-primary w-5 h-5" />}
              skills={["C", "C++", "Verilog", "SystemVerilog", "Assembly Language", "TCL", "SQL", "Python"]}
            />
            <SkillCategory 
              title="Embedded & Hardware" 
              icon={<Cpu className="text-primary w-5 h-5" />}
              skills={["Jetson Nano", "LPC1768", "Arduino", "Raspberry Pi", "ESP8266", "ENS160", "I2C", "SPI", "UART"]}
            />
            <SkillCategory 
              title="Robotics & Autonomy" 
              icon={<Bot className="text-primary w-5 h-5" />}
              skills={["Sensor Fusion", "Path Planning", "PID Control", "Object Detection", "Autonomous Navigation", "Robot Operating System (ROS)"]}
            />
            <SkillCategory 
              title="Tools & Tech" 
              icon={<Terminal className="text-primary w-5 h-5" />}
              skills={["Git", "VS Code", "Linux", "Cadence Virtuoso", "Xilinx Vivado"]}
            />
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-24 border-t border-border">
          <SectionHeader title="PUBLICATIONS" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 border border-border bg-card rounded-sm"
          >
            <h3 className="text-xl font-bold mb-2">Ultrasound Image Analysis of Carotid Artery</h3>
            <p className="text-muted-foreground mb-4 font-mono text-sm">IEEE International Conference of Computing and Communication Technologies (ICCCT), 2025</p>
            <p className="text-sm text-muted-foreground mb-6">
              <span className="text-foreground">Authors:</span> S S Suryaa, Srinivas Raman S, Ajay Prakash K, Dr. S. Latha, Dr. P. Muthu
            </p>
            <a 
              href="https://ieeexplore.ieee.org/document/11019420" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm"
            >
              <ExternalLink className="w-4 h-4" /> VIEW_DOCUMENT
            </a>
          </motion.div>
        </section>

      </main>
      
      <footer className="border-t border-border bg-card mt-0 relative z-10">
        <div className="container mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <img src="/robot-icon.png" alt="Logo" className="w-12 h-12 mb-3 opacity-80" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Robotics Systems Engineer building autonomous systems that move through the world with precision and purpose.
              </p>
            </div>

            {/* Quick Nav */}
            <div>
              <p className="font-mono text-xs text-muted-foreground tracking-widest mb-4">// NAVIGATE</p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {(["about", "experience", "internships", "projects", "skills"] as const).map((id) => (
                  <button
                    key={id}
                    onClick={() => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" }); }}
                    className="text-sm text-muted-foreground hover:text-primary font-mono text-left transition-colors"
                  >
                    {id.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="font-mono text-xs text-muted-foreground tracking-widest mb-4">// CONNECT</p>
              <div className="space-y-3 mb-5">
                <a href="mailto:suryaa29ss@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
                  <Mail className="w-3.5 h-3.5" /> suryaa29ss@gmail.com
                </a>
                <a href="https://linkedin.com/in/suryaa29ss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <a href="https://github.com/suryaa2902" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
              </div>
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 font-mono font-bold text-xs hover:bg-primary/90 transition-colors rounded-sm"
              >
                INITIALIZE CONTACT <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} SURYAA SENTHILKUMAR SHANTHI
            </p>
          </div>
        </div>
      </footer>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
      <RobolabsDetailModal open={robolabsDetailOpen} onClose={() => setRobolabsDetailOpen(false)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <OOODetailModal open={oooDetailOpen} onClose={() => setOooDetailOpen(false)} />
      <KrittikaReportModal open={krittikaReportOpen} onClose={() => setKrittikaReportOpen(false)} />
      <SRAMDetailModal open={sramDetailOpen} onClose={() => setSramDetailOpen(false)} />
      <CacheDetailModal open={cacheDetailOpen} onClose={() => setCacheDetailOpen(false)} />
      <PipelineDetailModal open={pipelineDetailOpen} onClose={() => setPipelineDetailOpen(false)} />
    </div>
  );
}

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Left door panel */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-background/60 backdrop-blur-xl border-r border-primary/20"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* decorative scan lines */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(180 100% 45%) 2px, hsl(180 100% 45%) 3px)", backgroundSize: "100% 6px" }}
            />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />
          </motion.div>

          {/* Right door panel */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-background/60 backdrop-blur-xl border-l border-primary/20"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(180 100% 45%) 2px, hsl(180 100% 45%) 3px)", backgroundSize: "100% 6px" }}
            />
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />
          </motion.div>

          {/* Backdrop click-to-close */}
          <div className="absolute inset-0 z-[1]" onClick={onClose} />

          {/* Contact content */}
          <motion.div
            className="relative z-[2] w-full max-w-2xl mx-6 bg-card/80 backdrop-blur-2xl border border-primary/30 rounded-sm shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
          >
            {/* Glowing top edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs text-primary tracking-widest">ESTABLISH_CONNECTION</span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-sm hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Currently open for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you.
                </p>
                <div className="space-y-4">
                  <ContactLink icon={<Mail className="w-4 h-4" />} href="mailto:suryaa29ss@gmail.com" label="suryaa29ss@gmail.com" />
                  <ContactLink icon={<Phone className="w-4 h-4" />} href="tel:+14708833236" label="+1 470 883 3236" />
                  <ContactLink icon={<Linkedin className="w-4 h-4" />} href="https://linkedin.com/in/suryaa29ss" label="linkedin.com/in/suryaa29ss" external />
                  <ContactLink icon={<Github className="w-4 h-4" />} href="https://github.com/suryaa2902" label="github.com/suryaa2902" external />
                </div>
              </div>

              {/* Form */}
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-muted-foreground">ID_STRING</label>
                  <input type="text" className="w-full bg-background border border-border px-3 py-2 focus:outline-none focus:border-primary transition-colors font-mono text-sm rounded-sm" placeholder="Your Name" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-muted-foreground">CONTACT_VECTOR</label>
                  <input type="email" className="w-full bg-background border border-border px-3 py-2 focus:outline-none focus:border-primary transition-colors font-mono text-sm rounded-sm" placeholder="Email Address" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-muted-foreground">PAYLOAD</label>
                  <textarea rows={3} className="w-full bg-background border border-border px-3 py-2 focus:outline-none focus:border-primary transition-colors font-mono text-sm resize-none rounded-sm" placeholder="Message content..." />
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2.5 font-mono font-bold hover:bg-primary/90 transition-colors text-sm rounded-sm">
                  TRANSMIT
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tight text-foreground">
        <span className="text-primary mr-2">{"//"}</span>{title}
      </h2>
      <div className="h-px bg-border flex-grow"></div>
    </div>
  );
}

interface Role {
  title: string;
  date: string;
  bullets: string[];
  skills: string[];
}

function CompanyGroup({ company, location, roles, onReadMore }: { company: string; location: string; roles: Role[]; onReadMore?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors duration-300"
    >
      {/* Company dot */}
      <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background"></div>

      {/* Company header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground tracking-tight">{company}</h3>
        <p className="text-sm font-mono text-muted-foreground mt-1">{location}</p>
      </div>

      {/* Roles */}
      <div className="space-y-8">
        {roles.map((role, i) => (
          <div key={i} className="relative pl-5 border-l border-border/50">
            <div className="absolute -left-[5px] top-[6px] w-2 h-2 rounded-full bg-muted-foreground border border-background"></div>
            <div className="mb-3">
              <p className="text-base font-semibold text-foreground">{role.title}</p>
              <p className="text-xs font-mono text-primary mt-0.5">{role.date}</p>
            </div>
            <ul className="space-y-2 mb-4">
              {role.bullets.map((bullet, j) => (
                <li key={j} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-1 shrink-0">›</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {role.skills.map((skill, k) => (
                <span key={k} className="px-2 py-1 text-xs font-mono border border-border bg-background text-muted-foreground rounded-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {onReadMore && (
        <button
          onClick={onReadMore}
          className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80 transition-colors border border-primary/30 hover:border-primary/60 px-3 py-1.5 rounded-sm"
        >
          READ_MORE <span className="text-primary/60">→</span>
        </button>
      )}
    </motion.div>
  );
}

function EducationCard({ school, degree, date, location, gpa, courses, logo }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 border border-border bg-card hover:border-primary/50 transition-colors rounded-sm"
    >
      <div className="flex items-start justify-between gap-4 mb-1">
        <h3 className="text-lg font-bold leading-tight">{school}</h3>
        {logo && (
          <div className="shrink-0 w-20 h-12 rounded-sm bg-white flex items-center justify-center p-1.5 border border-border/40 overflow-hidden">
            <img src={logo} alt={school + " logo"} className="w-full h-full object-contain" />
          </div>
        )}
      </div>
      <p className="text-primary font-mono text-sm mb-4">{degree}</p>
      
      <div className="flex flex-col gap-1 text-sm font-mono text-muted-foreground mb-6">
        <span>{date} | {location}</span>
        <span>GPA: <span className="text-foreground">{gpa}</span></span>
      </div>
      
      <div>
        <p className="text-xs font-mono text-muted-foreground mb-2 border-b border-border pb-1">RELEVANT_COURSEWORK</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{courses}</p>
      </div>
    </motion.div>
  );
}

function SkillCategory({ title, icon, skills }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-6 border border-border bg-card rounded-sm"
    >
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="text-lg font-bold font-mono">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill: string, i: number) => (
          <span 
            key={i} 
            className="px-3 py-1.5 text-xs font-mono bg-background border border-border hover:border-primary text-foreground transition-colors cursor-default rounded-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function GridProjectCard({ title, subtitle, date, description, tags, githubUrl, githubUrl2, inProgress, onReadMore }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group flex flex-col border rounded-sm p-5 transition-colors duration-300 min-h-[220px] ${inProgress ? "border-primary/40 bg-primary/5" : "border-border bg-card hover:border-primary/40"}`}
    >
      <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{title}</h3>
          {inProgress && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 shrink-0">IN PROGRESS</span>
          )}
        </div>
        <span className="text-xs font-mono text-primary shrink-0">{date}</span>
      </div>
      <p className="text-xs text-muted-foreground font-mono mb-2">{subtitle}</p>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 mt-3 border-t border-border">
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {tags.map((tag: string, i: number) => (
            <span key={i} className="text-xs font-mono text-muted-foreground">#{tag}</span>
          ))}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {onReadMore && (
            <button
              onClick={onReadMore}
              className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:text-primary/80 transition-colors border border-primary/30 hover:border-primary/60 px-2 py-0.5 rounded-sm"
            >
              READ_MORE →
            </button>
          )}
          {githubUrl && !githubUrl2 && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-3 h-3" />
              SOURCE
            </a>
          )}
          {githubUrl && githubUrl2 && (
            <div className="flex items-center gap-2">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-3 h-3" />C++
              </a>
              <span className="text-border text-xs">|</span>
              <a href={githubUrl2} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-3 h-3" />VERILOG
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, subtitle, date, description, tags, githubUrl, githubUrl2, inProgress, last, onReadMore }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`relative pl-10 group ${last ? "pb-0" : "pb-8"}`}
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 flex items-center justify-center -translate-x-1/2 bg-background transition-colors duration-300 z-10 ${inProgress ? "border-primary" : "border-border group-hover:border-primary"}`}>
        <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${inProgress ? "bg-primary animate-pulse" : "bg-muted group-hover:bg-primary"}`} />
      </div>

      {/* Card */}
      <div className={`border rounded-sm p-5 transition-colors duration-300 ${inProgress ? "border-primary/40 bg-primary/5" : "border-border bg-card group-hover:border-primary/40"}`}>
        <div className="flex items-start justify-between gap-4 mb-1 flex-wrap">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
            {inProgress && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">IN PROGRESS</span>
            )}
          </div>
          <span className="text-xs font-mono text-primary shrink-0">{date}</span>
        </div>
        <p className="text-xs text-muted-foreground font-mono mb-3">{subtitle}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string, i: number) => (
              <span key={i} className="text-xs font-mono text-muted-foreground">#{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {onReadMore && (
              <button
                onClick={onReadMore}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80 transition-colors shrink-0 border border-primary/30 hover:border-primary/60 px-2 py-1 rounded-sm"
              >
                READ_MORE →
              </button>
            )}
            {githubUrl && !githubUrl2 && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors shrink-0">
                <Github className="w-3.5 h-3.5" />
                VIEW_SOURCE
              </a>
            )}
            {githubUrl && githubUrl2 && (
              <div className="flex items-center gap-2">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors shrink-0">
                  <Github className="w-3.5 h-3.5" />
                  C++
                </a>
                <span className="text-border text-xs">|</span>
                <a href={githubUrl2} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors shrink-0">
                  <Github className="w-3.5 h-3.5" />
                  VERILOG
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function RobolabsDetailModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) { document.addEventListener("keydown", onKey); document.body.style.overflow = "hidden"; }
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  const metrics = [
    { label: "CODEBASE", value: "7,900+", unit: "lines" },
    { label: "SOURCE MODULES", value: "35", unit: "modules" },
    { label: "SENSORS FUSED", value: "7", unit: "sensors" },
    { label: "CONTROL LOOP", value: "30", unit: "Hz" },
    { label: "VISION PIPELINE", value: "15", unit: "Hz" },
    { label: "PATH REPLANNING", value: "<100", unit: "ms" },
    { label: "POSITION TOLERANCE", value: "<3", unit: "cm" },
  ];

  const stack = ["C++ · Full System", "NVIDIA Jetson Nano", "YOLO Object Detection", "Extended Kalman Filter", "A* Path Planning", "Pure Pursuit", "PID Control", "CRC32 Serial Protocol", "Multithreading"];

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <motion.div className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.div
            className="relative z-10 w-full max-w-2xl h-full bg-card border-l border-primary/20 flex flex-col overflow-hidden"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />

            {/* Header */}
            <div className="shrink-0 flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs text-primary tracking-widest">ROBOLABS_DETAIL.SYS</span>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-sm hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["AUTONOMOUS SYSTEMS", "SENSOR FUSION", "PATH PLANNING", "EMBEDDED C++", "COMPUTER VISION", "REAL TIME CONTROL"].map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-sm">{t}</span>
                ))}
              </div>

              {/* Title */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1">Robotics Systems Engineer</h2>
                <p className="font-mono text-xs text-primary">Robolabs, LLC · Dublin, CA · May 2025–Present</p>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-4 gap-2">
                {metrics.map(({ label, value, unit }) => (
                  <div key={label} className="bg-background border border-border rounded-sm p-3">
                    <p className="text-[9px] font-mono text-muted-foreground mb-1 leading-tight">{label}</p>
                    <p className="text-lg font-bold text-primary leading-none">{value}</p>
                    <p className="text-[10px] font-mono text-muted-foreground">{unit}</p>
                  </div>
                ))}
              </div>

              {/* Architecture diagram */}
              <div className="bg-background border border-border rounded-sm p-4">
                <p className="text-[10px] font-mono text-muted-foreground mb-3">// SYSTEM_ARCHITECTURE</p>
                <div className="font-mono text-xs text-muted-foreground space-y-1">
                  <p className="text-center text-muted-foreground/50 mb-2">Serial (CRC32)</p>
                  <div className="flex items-start justify-center gap-6">
                    <div className="border border-border/60 rounded-sm p-2.5 text-center min-w-[130px]">
                      <p className="text-foreground text-[11px] font-semibold mb-1">Jetson Nano</p>
                      <p className="text-[10px] text-primary">YOLO Detection</p>
                      <p className="text-[10px] text-muted-foreground">~15 Hz · 6 targets</p>
                    </div>
                    <div className="flex items-center self-center text-primary text-lg">→</div>
                    <div className="border border-primary/30 rounded-sm p-2.5 text-center min-w-[150px]">
                      <p className="text-foreground text-[11px] font-semibold mb-1">ARM Embedded Controller</p>
                      <p className="text-[10px] text-primary">EKF · A* · PID · FSMs</p>
                      <p className="text-[10px] text-muted-foreground">30 Hz control loop</p>
                    </div>
                  </div>
                  <div className="flex justify-end pr-8 mt-1">
                    <div className="text-center">
                      <p className="text-muted-foreground/50 text-[10px]">↓ Wireless</p>
                      <p className="text-[10px] text-muted-foreground mt-1">Partner Robot Node</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sections */}
              {[
                {
                  title: "Overview",
                  body: "Designed and deployed a full autonomous ground vehicle system at Robolabs. The platform fuses data from GPS, IMU, and monocular camera through an Extended Kalman Filter to produce a robust state estimate. A* path planning computes optimal routes in real time, while a PID controller executes closed-loop motor commands at 30 Hz with <3 cm position tolerance."
                },
                {
                  title: "Navigation Stack",
                  body: "A* path planning runs on the ARM embedded controller, replanning in <100 ms when obstacles are detected. Pure Pursuit translates the path into steering commands. PID loops run at 30 Hz to maintain heading and velocity setpoints, with FSMs managing high-level behavior transitions (idle → navigate → acquire → return)."
                },
                {
                  title: "Sensor Fusion",
                  body: "An Extended Kalman Filter fuses 7 sensor streams — dual GPS receivers (for interference-free heading), IMU accelerometer/gyroscope, and wheel encoder odometry. The dual-GPS heading approach was chosen over a magnetometer due to motor and chassis EMI, providing a clean vector-based heading estimate with no additional hardware."
                },
                {
                  title: "Vision Pipeline",
                  body: "YOLOv8 runs on the Jetson Nano GPU at ~15 Hz, detecting up to 6 targets per frame. Bounding box centroids are projected into world coordinates using camera intrinsics and GPS altitude, then serialized over CRC32-validated serial packets to the ARM controller for target approach sequencing."
                },
                {
                  title: "Communication",
                  body: "A custom CRC32-protected serial protocol (UART) links the Jetson Nano to the ARM embedded controller. Multi-threaded design decouples vision inference, state estimation, and actuation to avoid pipeline stalls. End-to-end system latency reduced by 40% vs. prior single-threaded architecture."
                },
              ].map(({ title, body }) => (
                <div key={title}>
                  <p className="text-xs font-mono text-primary mb-2">// {title.toUpperCase().replace(/ /g, "_")}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}

              {/* Blockquote */}
              <blockquote className="border-l-2 border-primary pl-4 py-1 bg-primary/5 rounded-r-sm">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "The dual GPS heading solution was the most unconventional decision on the project. A magnetometer is the standard approach for heading without motion, but magnetic interference from motors and metal chassis makes it unreliable in practice. Mounting two receivers at a precisely measured offset turns the vector between their position readings into a clean, interference-free heading estimate with no additional hardware."
                </p>
              </blockquote>

              {/* Stack */}
              <div>
                <p className="text-[10px] font-mono text-muted-foreground mb-3">// STACK</p>
                <div className="flex flex-wrap gap-2">
                  {stack.map(s => (
                    <span key={s} className="text-[10px] font-mono px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-sm">{s}</span>
                  ))}
                </div>
              </div>

              <div className="pb-4" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function CVModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <motion.div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(0,200,180,0.05) 0%, rgba(0,0,0,0.72) 60%)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="relative z-10 w-full max-w-3xl h-full flex flex-col overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(0,200,180,0.03) 100%)",
              backdropFilter: "blur(48px) saturate(180%)",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "-24px 0 80px rgba(0,0,0,0.55), inset 1px 0 0 rgba(255,255,255,0.07)",
            }}
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Ambient orbs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full" style={{ background: "radial-gradient(circle, rgba(0,200,180,0.25) 0%, transparent 70%)", filter: "blur(40px)" }} />
              <div className="absolute bottom-16 -left-16 w-44 h-44 rounded-full" style={{ background: "radial-gradient(circle, rgba(80,100,255,0.2) 0%, transparent 70%)", filter: "blur(32px)" }} />
            </div>

            {/* Header */}
            <div className="relative z-10 shrink-0 flex items-center justify-between px-6 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "rgba(0,200,180,1)", boxShadow: "0 0 8px rgba(0,200,180,0.8)" }} />
                <span className="font-mono text-xs tracking-widest" style={{ background: "linear-gradient(90deg, #00c8b4, #64dcff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  CURRICULUM VITAE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="Suryaa_Senthilkumar_Shanthi_Resume.pdf"
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono px-3 py-1.5 rounded-full transition-all"
                  style={{ background: "rgba(0,200,180,0.1)", border: "1px solid rgba(0,200,180,0.25)", color: "rgba(0,200,180,0.9)" }}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" /></svg>
                  DOWNLOAD
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full transition-colors"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <div className="relative z-10 flex-1 overflow-hidden p-3">
              <div className="w-full h-full rounded-xl overflow-hidden" style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06)" }}>
                <iframe
                  src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
                  className="w-full h-full border-0"
                  title="Suryaa Senthilkumar Shanthi — CV"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function KrittikaReportModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(0,200,180,0.05) 0%, rgba(0,0,0,0.72) 60%)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Liquid glass panel */}
          <motion.div
            className="relative z-10 w-full max-w-3xl h-full flex flex-col overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(0,200,180,0.03) 100%)",
              backdropFilter: "blur(48px) saturate(180%)",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "-24px 0 80px rgba(0,0,0,0.55), inset 1px 0 0 rgba(255,255,255,0.07)",
            }}
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Ambient orbs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full" style={{ background: "radial-gradient(circle, rgba(0,200,180,0.25) 0%, transparent 70%)", filter: "blur(40px)" }} />
              <div className="absolute bottom-16 -left-16 w-44 h-44 rounded-full" style={{ background: "radial-gradient(circle, rgba(80,100,255,0.2) 0%, transparent 70%)", filter: "blur(32px)" }} />
            </div>

            {/* Header */}
            <div className="relative z-10 shrink-0 flex items-center justify-between px-6 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "rgba(0,200,180,1)", boxShadow: "0 0 8px rgba(0,200,180,0.8)" }} />
                <span className="font-mono text-xs tracking-widest" style={{ background: "linear-gradient(90deg, #00c8b4, #64dcff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  KRITTIKA · RESEARCH REPORT
                </span>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-full transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* PDF iframe — full remaining height */}
            <div className="relative z-10 flex-1 overflow-hidden p-3">
              <div className="w-full h-full rounded-xl overflow-hidden" style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.04)" }}>
                <iframe
                  src="/krittika-report.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
                  className="w-full h-full border-0"
                  title="Krittika Project Report"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function OOODetailModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <motion.div
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="relative z-10 w-full max-w-2xl h-full bg-card border-l border-primary/20 flex flex-col overflow-hidden"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-mono text-xs text-primary tracking-widest">PROJECT_DETAIL</span>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-sm hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">

              {/* Tags & title */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["COMPUTER ARCHITECTURE", "OUT OF ORDER EXECUTION", "REGISTER RENAMING", "C++", "PIPELINE SIMULATION"].map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-sm">{t}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">A Cycle-Accurate Superscalar Pipeline Simulator with Out-of-Order Execution and Register Renaming</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A full cycle-accurate simulator implemented in C++ that models a 7-stage superscalar pipeline with configurable execution width, in-order and out-of-order scheduling policies, register renaming via a Register Alias Table (RAT) and Reorder Buffer (ROB), and a load-latency model. The simulator is validated against SPEC2006 trace files and designed to quantify how much pipeline performance is recoverable through out-of-order scheduling under varying memory latency conditions.
                </p>
              </div>

              {/* Spec table */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-4">// SPECIFICATIONS</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "PIPELINE STAGES", value: "7 stages" },
                    { label: "PIPELINE WIDTH", value: "1 wide and 2 wide" },
                    { label: "EXECUTION", value: "In order and OOO" },
                    { label: "LOAD LATENCY", value: "1 cycle and 4 cycles" },
                    { label: "BRANCH PREDICTION", value: "Perfect (assumed)" },
                    { label: "BENCHMARKS", value: "SPEC2006" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-background border border-border rounded-sm p-3">
                      <p className="text-[10px] font-mono text-muted-foreground mb-1">{label}</p>
                      <p className="text-sm font-bold font-mono text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pipeline Structure */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// PIPELINE STRUCTURE</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  The 7-stage pipeline models Fetch, Decode, Rename, Dispatch, Issue, Execute, and Commit. The Rename stage maps architectural registers to physical registers using a RAT, eliminating WAR and WAW hazards and allowing true out-of-order execution limited only by RAW data dependencies.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Reorder Buffer enforces in-order commit, maintaining precise architectural state for exception handling and branch misprediction recovery. Pipeline width is configurable at N=1 and N=2 to isolate the effect of instruction-level parallelism on throughput.
                </p>
              </div>

              {/* Scheduling Policies */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// SCHEDULING POLICIES</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  The simulator implements two issue policies — <span className="text-foreground">in-order</span> (instructions issue in program order) and <span className="text-foreground">oldest-ready-first</span> (OOO, where the oldest instruction with all operands ready is issued first). These are crossed with two load latency models (1 cycle and 4 cycles) to produce four configurations whose IPC is compared across SPEC2006 workloads.
                </p>
              </div>

              {/* Comparison table */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-4">// CONFIGURATION COMPARISON</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      policy: "In order",
                      latency: "OB latency: 1",
                      tag: "Latency 1",
                      desc: "In order, instructions execute strictly in program order. Short load latency means limited opportunity cost."
                    },
                    {
                      policy: "Oldest ready first",
                      latency: "OOO",
                      tag: "Latency 1",
                      desc: "The most revealing configuration. The scheduler fills the four-cycle load latency window with independent instructions, recovering most of the stall cycles."
                    },
                    {
                      policy: "In order",
                      latency: "OB latency: 4",
                      tag: "Latency 4",
                      desc: "High load latency with no scheduling flexibility. Every load-dependent chain stalls the full pipeline for four cycles."
                    },
                    {
                      policy: "Oldest ready first",
                      latency: "OOO",
                      tag: "Latency 4",
                      desc: "Out-of-order scheduling at high latency shows the maximum benefit. Independent instructions keep functional units busy while loads resolve, minimising wasted cycles."
                    },
                  ].map(({ policy, latency, tag, desc }) => (
                    <div key={policy + tag} className="bg-background border border-border rounded-sm p-4 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-foreground">{policy}</span>
                        <span className="text-[10px] font-mono text-primary px-1.5 py-0.5 bg-primary/10 border border-primary/20 rounded-sm">{tag}</span>
                      </div>
                      <p className="text-[10px] font-mono text-muted-foreground">{latency}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key finding */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// KEY FINDING</p>
                <blockquote className="border-l-2 border-primary pl-4 py-1 bg-primary/5 rounded-r-sm">
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "The gap between in order and out of order scheduling widens dramatically as load latency increases. This is precisely the motivation for out of order execution in real processors: memory latency is not fixed, cache misses can cost hundreds of cycles, and the only way to hide that latency is to find independent work to execute while the load is pending. The simulator quantifies exactly how much of that latency can be recovered as a function of the instruction mix and pipeline width."
                  </p>
                </blockquote>
              </div>

              {/* Tools */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// TOOLS</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 p-3 bg-background border border-border rounded-sm">
                    <span className="font-mono text-xs text-primary font-bold">C++</span>
                    <span className="text-muted-foreground text-xs">:</span>
                    <span className="text-xs text-muted-foreground">Full Simulator</span>
                  </div>
                </div>
              </div>

              {/* GitHub */}
              <div className="pt-2 pb-4">
                <a
                  href="https://github.com/suryaa2902/Out-of-Order-Pipeline-with-In-Order-Commit"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary/50 px-4 py-2 rounded-sm"
                >
                  <Github className="w-4 h-4" />
                  VIEW_SOURCE — github.com/suryaa2902/Out-of-Order-Pipeline-with-In-Order-Commit
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function SRAMDetailModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            className="relative z-10 w-full max-w-2xl h-full bg-card border-l border-primary/20 flex flex-col overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Glowing left edge */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-mono text-xs text-primary tracking-widest">PROJECT_DETAIL</span>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-sm hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">

              {/* Title & tags */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["VLSI", "MEMORY DESIGN", "CADENCE VIRTUOSO", "VERILOG", "XILINX VIVADO"].map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-sm">{t}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Designing a 512-bit SRAM from the Ground Up</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A full-custom memory design project implementing a complete 16×4 SRAM array (512 bits total) using 6T SRAM cells in Cadence Virtuoso at 45nm predictive technology. The project spans transistor-level cell design, write margin characterisation, row decoder logic, column circuitry, precharge, sense amplifiers, and RTL modelling verified in Xilinx Vivado.
                </p>
              </div>

              {/* Spec table */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-4">// SPECIFICATIONS</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "ARRAY SIZE", value: "512 bits" },
                    { label: "CELL SIZING", value: "100 : 150 : 230" },
                    { label: "ADDRESS WIDTH", value: "6-bit" },
                    { label: "ROW DECODER", value: "4×16" },
                    { label: "GATE LENGTH", value: "45 nm" },
                    { label: "MUX", value: "4:1 TG" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-background border border-border rounded-sm p-3">
                      <p className="text-[10px] font-mono text-muted-foreground mb-1">{label}</p>
                      <p className="text-sm font-bold font-mono text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cell Design */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// CELL DESIGN</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  The 6T SRAM cell is built from two cross-coupled inverters, forming the storage latch, gated by two NMOS access transistors. Stability depends critically on transistor sizing. The <span className="text-foreground font-mono">cell ratio</span> (pull-down strength vs. access) governs read SNM, while the <span className="text-foreground font-mono">pull-up ratio</span> (access vs. pull-up) determines write-ability.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sizing was swept in Cadence Virtuoso DC simulations across Wpu : Wax : Wpd combinations. The final choice of <span className="text-foreground font-mono">100 : 150 : 230 nm</span> was selected to maintain a positive write margin and adequate read static noise margin (SNM) simultaneously; a non-trivial trade-off at this feature size.
                </p>
              </div>

              {/* Write Margin */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// WRITE MARGIN</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Write margin analysis was performed by sweeping transistor widths and measuring the minimum write voltage required to flip the cell. The butterfly curve method was used to extract SNM at each sizing point.
                </p>
                <blockquote className="border-l-2 border-primary pl-4 py-1 bg-primary/5 rounded-r-sm">
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "Write margin was characterised across varying transistor widths, confirming that the chosen sizing maintains a positive margin across process corners. This kind of cell-level analysis is critical before committing to array-level layout. A marginal cell degrades catastrophically at scale."
                  </p>
                </blockquote>
              </div>

              {/* Column Circuitry */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// COLUMN CIRCUITRY</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Each column pair includes a <span className="text-foreground">precharge circuit</span> that equalises BL and BLB to V<sub>DD</sub> before every access cycle, ensuring a clean differential for the sense amplifier. A PMOS equaliser transistor is also included to minimise precharge time.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  The <span className="text-foreground">sense amplifier</span> (cross-coupled latch type) detects the small differential signal developed during a read and amplifies it to full logic levels. It is enabled only after the differential has grown to a reliable threshold to prevent meta-stability.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Column selection uses a <span className="text-foreground font-mono">4:1 transmission-gate MUX</span> at L=45nm, W=90nm to route one of four bitline pairs to the shared sense amplifier, reducing area without sacrificing read performance.
                </p>
              </div>

              {/* Read Operation */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// READ OPERATION</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  During a read, both bitlines are precharged to V<sub>DD</sub>. The wordline then activates the access transistors, allowing the stored node to discharge one bitline. The resulting differential (typically 50–150 mV) is detected by the sense amplifier.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Read stability is preserved by ensuring the cell ratio keeps the internal storage node voltage below the trip point of the inverter, preventing a destructive read. Transient simulations in Cadence Virtuoso verified correct operation across slow, typical, and fast process corners.
                </p>
              </div>

              {/* Tools */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// TOOLS</p>
                <div className="flex flex-col gap-2">
                  {[
                    { name: "CADENCE VIRTUOSO", role: "Schematic & Layout" },
                    { name: "VERILOG", role: "RTL Model" },
                    { name: "XILINX VIVADO", role: "Simulation & Waveform" },
                  ].map(({ name, role }) => (
                    <div key={name} className="flex items-center gap-3 p-3 bg-background border border-border rounded-sm">
                      <span className="font-mono text-xs text-primary font-bold">{name}</span>
                      <span className="text-muted-foreground text-xs">:</span>
                      <span className="text-xs text-muted-foreground">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GitHub link */}
              <div className="pt-2 pb-4">
                <a
                  href="https://github.com/suryaa2902/512-bit-SRAM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary/50 px-4 py-2 rounded-sm"
                >
                  <Github className="w-4 h-4" />
                  VIEW_SOURCE — github.com/suryaa2902/512-bit-SRAM
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function CacheDetailModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <motion.div
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 w-full max-w-2xl h-full bg-card border-l border-primary/20 flex flex-col overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-mono text-xs text-primary tracking-widest">PROJECT_DETAIL</span>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-sm hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">

              {/* Title & tags */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["COMPUTER ARCHITECTURE", "CACHE DESIGN", "DRAM MODELING", "C++", "MULTICORE SYSTEMS"].map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-sm">{t}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Multi-core Cache Partitioning with DRAM-level Memory Modeling</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A full-system memory hierarchy simulator built in C++, modelling private L1 caches per core, a shared unified L2, and a 16-bank DRAM with realistic row-buffer behavior. The project investigates how cache partitioning strategies affect inter-application interference and average memory access time, benchmarked against SPEC2006 workloads.
                </p>
              </div>

              {/* Spec table */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-4">// SPECIFICATIONS</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "L1 CACHE", value: "Private per core" },
                    { label: "L2 CACHE", value: "Shared, unified" },
                    { label: "DRAM BANKS", value: "16" },
                    { label: "ROW BUFFER", value: "1024 bytes" },
                    { label: "WRITE POLICY", value: "Writeback + allocate" },
                    { label: "BENCHMARKS", value: "SPEC2006" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-background border border-border rounded-sm p-3">
                      <p className="text-[10px] font-mono text-muted-foreground mb-1">{label}</p>
                      <p className="text-sm font-bold font-mono text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cache Hierarchy */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// CACHE HIERARCHY</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Each core has a dedicated <span className="text-foreground">private L1 cache</span>, ensuring fast single-core access with no cross-core contention at the first level. The <span className="text-foreground">shared L2</span> is set-associative and serves all cores, making it the first point where inter-application interference can emerge.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cache partitioning is applied at the L2 level, statically allocating way-groups to each application. This prevents cache thrashing between co-running workloads and was observed to reduce L2 miss rates by up to 30% under mixed SPEC2006 pairs, directly lowering average memory access time.
                </p>
              </div>

              {/* DRAM Model */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// DRAM MODEL</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  The DRAM model implements a <span className="text-foreground">16-bank architecture</span> with a 1024-byte row buffer per bank. Requests are scheduled using a first-ready, first-come-first-served (FR-FCFS) policy, which prioritises row-buffer hits to maximise throughput.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Row buffer hit, miss, and conflict rates are tracked independently per bank. This granularity revealed that applications with streaming access patterns (e.g., LBM) systematically evict rows opened by latency-sensitive workloads (e.g., LIBQ), a form of interference invisible to cache-only models.
                </p>
              </div>

              {/* Cache Partitioning */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// CACHE PARTITIONING</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Partitioning experiments compared a baseline shared-cache configuration against static way-partitioned and dynamic priority-based schemes. The shared baseline showed significant L2 conflict misses when running mixed workloads, while static partitioning eliminated cross-application evictions entirely.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Results showed up to a <span className="text-foreground font-mono">30% reduction in average memory access time</span> with partitioning enabled, driven primarily by improved L2 hit rates and reduced DRAM row-buffer conflicts downstream.
                </p>
              </div>

              {/* Key Finding */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// KEY FINDING</p>
                <blockquote className="border-l-2 border-primary pl-4 py-1 bg-primary/5 rounded-r-sm">
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "The most revealing result came from comparing DRAM behavior in isolated vs. mixed runs. When two applications share DRAM banks, row buffer hit rates drop significantly; not because either application's memory access pattern changed, but because they thrash each other's open rows. This kind of interference is invisible at the cache level and only becomes measurable when modeling the full memory hierarchy end to end."
                  </p>
                </blockquote>
              </div>

              {/* Tools */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// TOOLS</p>
                <div className="flex flex-col gap-2">
                  {[
                    { name: "C++", role: "Full Simulator" },
                    { name: "SPEC2006", role: "RISC, LBM, LIBQ Benchmarks" },
                    { name: "MAKEFILE", role: "Build System" },
                  ].map(({ name, role }) => (
                    <div key={name} className="flex items-center gap-3 p-3 bg-background border border-border rounded-sm">
                      <span className="font-mono text-xs text-primary font-bold">{name}</span>
                      <span className="text-muted-foreground text-xs">:</span>
                      <span className="text-xs text-muted-foreground">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GitHub link */}
              <div className="pt-2 pb-4">
                <a
                  href="https://github.com/suryaa2902/Cache-Partitioning-for-Multi-Level-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary/50 px-4 py-2 rounded-sm"
                >
                  <Github className="w-4 h-4" />
                  VIEW_SOURCE — github.com/suryaa2902/Cache-Partitioning-for-Multi-Level-System
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function PipelineDetailModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <motion.div
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="relative z-10 w-full max-w-2xl h-full bg-card border-l border-primary/20 flex flex-col overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-mono text-xs text-primary tracking-widest">PROJECT_DETAIL</span>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-sm hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">

              {/* Title & tags */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["COMPUTER ARCHITECTURE", "VERILOG", "BRANCH PREDICTION", "OUT-OF-ORDER EXECUTION", "C++"].map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-sm">{t}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Superscalar Pipeline with Branch Prediction and Data Forwarding</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A cycle-accurate superscalar processor simulator built in C++, modelling a 5-stage out-of-order pipeline with N-wide fetch, register renaming via a Register Alias Table (RAT) and Reorder Buffer (ROB), a reservation station, and three interchangeable branch predictors. The design is validated against SPEC2006 benchmarks and cross-checked with a Verilog RTL implementation.
                </p>
              </div>

              {/* Spec table */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-4">// SPECIFICATIONS</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "N WIDE", value: "N = 1, 2" },
                    { label: "EX AND MEM PATHS", value: "Full forwarding" },
                    { label: "PREDICTORS", value: "Always Taken, GShare" },
                    { label: "HISTORY BITS", value: "12 bits" },
                    { label: "PREDICTOR TYPE", value: "2-bit saturating" },
                    { label: "BENCHMARKS", value: "SPEC2006" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-background border border-border rounded-sm p-3">
                      <p className="text-[10px] font-mono text-muted-foreground mb-1">{label}</p>
                      <p className="text-sm font-bold font-mono text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// FRONTEND: FETCH AND DECODE</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  The frontend fetches up to N instructions per cycle using a <span className="text-foreground">2-bit saturating counter branch predictor</span> paired with a Branch Target Buffer (BTB) for next-PC prediction. The BTB is indexed by the lower PC bits and holds the predicted target address for taken branches.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The decode stage implements a complete RISC instruction decoder with immediate extraction, sign extension, and illegal instruction detection, separating frontend concerns cleanly from backend dispatch.
                </p>
              </div>

              {/* Hazard / Reservation Station */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// HAZARD: RESERVATION STATION</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  The reservation station holds in-flight instructions waiting on operands, dispatching them to execution units as soon as both source operands become available. Entries are allocated at dispatch and freed on issue. An age-based priority scheme ensures forward progress and avoids starvation.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The station broadcasts result tags on execution completion via a common data bus (CDB), waking dependent instructions in the same cycle. This eliminates RAW hazards without stalling the pipeline for multi-cycle operations.
                </p>
              </div>

              {/* Backend */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// BACKEND AND DISPATCH: REGISTER RENAMING</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  A <span className="text-foreground">Register Alias Table (RAT)</span> maps architectural registers to physical registers, maintaining separate speculative and architectural state. The free list manager tracks available physical registers and reclaims them on commit or flush.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Renaming eliminates false dependencies (WAR and WAW hazards) and enables true out-of-order execution. Only RAW dependencies remain, and these are handled by the reservation station through CDB snooping.
                </p>
              </div>

              {/* Commit / ROB */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// COMMIT: REORDER BUFFER</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  The <span className="text-foreground">Reorder Buffer (ROB)</span> allows out-of-order execution while maintaining precise in-order commit. Instructions enter the ROB at dispatch and retire only when they reach the head and have completed execution, ensuring precise exception handling.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  On branch misprediction, the ROB drives a full pipeline flush, restoring the architectural RAT state and freeing all in-flight physical registers. Performance counters track IPC, branch accuracy, and ROB occupancy throughout execution.
                </p>
              </div>

              {/* Key finding */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// KEY FINDING</p>
                <blockquote className="border-l-2 border-primary pl-4 py-1 bg-primary/5 rounded-r-sm">
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "The most instructive result from the simulator was comparing forwarding off versus forwarding on at N=2. The cycle count difference was substantial, but the more revealing finding was where forwarding could not help: load instructions whose results are not available until the Memory stage still impose a one-cycle stall on any dependent instruction in the Execute slot, regardless of how wide the forwarding network is. The hazard is not a design flaw but a physical constraint."
                  </p>
                </blockquote>
              </div>

              {/* Tools */}
              <div>
                <p className="font-mono text-xs text-muted-foreground tracking-widest mb-3">// TOOLS</p>
                <div className="flex flex-col gap-2">
                  {[
                    { name: "C++", role: "Behavioral Simulator" },
                    { name: "VERILOG", role: "RTL Implementation" },
                    { name: "XILINX VIVADO", role: "Synthesis and Simulation" },
                    { name: "VPI", role: "Waveform Traces" },
                  ].map(({ name, role }) => (
                    <div key={name} className="flex items-center gap-3 p-3 bg-background border border-border rounded-sm">
                      <span className="font-mono text-xs text-primary font-bold">{name}</span>
                      <span className="text-muted-foreground text-xs">:</span>
                      <span className="text-xs text-muted-foreground">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GitHub links */}
              <div className="pt-2 pb-4 flex flex-col gap-2">
                <a
                  href="https://github.com/suryaa2902/5-Stage-Superscalar-Pipeline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary/50 px-4 py-2 rounded-sm"
                >
                  <Github className="w-4 h-4" />
                  C++ SIMULATOR — github.com/suryaa2902/5-Stage-Superscalar-Pipeline
                </a>
                <a
                  href="https://github.com/suryaa2902/Superscalar-Pipeline-in-Verilog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary/50 px-4 py-2 rounded-sm"
                >
                  <Github className="w-4 h-4" />
                  VERILOG RTL — github.com/suryaa2902/Superscalar-Pipeline-in-Verilog
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function ContactLink({ icon, href, label, external }: any) {
  return (
    <a 
      href={href} 
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
    >
      <div className="p-3 border border-border bg-card group-hover:border-primary/50 transition-colors rounded-sm">
        {icon}
      </div>
      <span className="font-mono text-sm">{label}</span>
    </a>
  );
}
