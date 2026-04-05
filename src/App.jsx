import React from 'react';
import Scene from './components/Scene';
import TerminalWindow from './components/TerminalWindow';
import ThemeToggle from './components/ThemeToggle';
import PipelineFlow from './components/PipelineFlow';
import { motion } from 'framer-motion';

function App() {
  const [botPos, setBotPos] = React.useState({ bottom: '2rem', right: '2rem' });
  const [hoverCount, setHoverCount] = React.useState(0);
  const [systemState, setSystemState] = React.useState('normal');

  React.useEffect(() => {
    if (systemState === 'hacked') {
      const audio = new Audio(`${import.meta.env.BASE_URL}fahhhhh.mp3`);
      audio.play().catch(e => console.log("Audio play blocked", e));
    } else if (systemState === 'collab') {
      const audio = new Audio(`${import.meta.env.BASE_URL}among-us-role-reveal-sound.mp3`);
      audio.play().catch(e => console.log("Audio play blocked", e));
    }
  }, [systemState]);

  // Browser Autoplay Policy Unlocker
  React.useEffect(() => {
    const unlockAudio = () => {
      // Just a silent play attempt to unlock the browser's audio context for future hover-events.
      const testAudio = new Audio(`${import.meta.env.BASE_URL}fahhhhh.mp3`);
      testAudio.volume = 0;
      testAudio.play().then(() => testAudio.pause()).catch(() => { });
      window.removeEventListener('click', unlockAudio);
    };
    window.addEventListener('click', unlockAudio);
    return () => window.removeEventListener('click', unlockAudio);
  }, []);

  const moveBot = () => {
    // Keep it within standard view bounds avoiding edges
    const newBottom = Math.floor(Math.random() * 80) + 10;
    const newRight = Math.floor(Math.random() * 80) + 10;
    setBotPos({ bottom: `${newBottom}vh`, right: `${newRight}vw` });

    setHoverCount(prev => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setSystemState('hacked');
      } else if (newCount === 10) {
        setSystemState('collab');
      }
      return newCount;
    });
  };

  return (
    <div>
      {systemState === 'hacked' && (
        <div className="hacked-overlay">
          <div className="matrix-bg">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="matrix-column" style={{ left: `${i * 2}%`, animationDelay: `${Math.random() * 2}s` }}>
                101001011010101110100010101010010011010101011101010010101
              </div>
            ))}
          </div>
          <div className="hacked-warning">
            <h1>⚠️ SYSTEM COMPROMISED ⚠️</h1>
            <h2>DON'T TOUCH ME!</h2>
            <button className="btn" style={{ borderColor: 'red', color: 'red', background: 'black' }} onClick={() => setSystemState('normal')}>
              Reboot System
            </button>
          </div>
        </div>
      )}

      {systemState === 'collab' && (
        <div className="collab-overlay">
          <div className="glowing-lines-bg">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="glowing-line" style={{ left: `${i * 3.33}%`, animationDelay: `${Math.random() * 4}s` }}></div>
            ))}
          </div>
          <div className="collab-content">
            <img src={`${import.meta.env.BASE_URL}charcter_with_multiple_hands.png`} alt="Multi-talented DevOps Engineer" className="floating-3d" style={{ maxWidth: '250px', marginBottom: '1rem' }} />
            <h1>You're Persistent! Let's Connect.</h1>
            <p style={{ color: 'var(--text-muted)' }}>If you're determined enough to hunt down that bot 10 times, we'd definitely make a great team. Let's build scalable, professional infrastructure together!</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              <a href="https://www.linkedin.com/in/deven-kalathiya/" target="_blank" className="btn" rel="noreferrer" style={{ background: 'var(--accent-color)', color: 'var(--bg-color)', fontWeight: 'bold' }}>
                Connect on LinkedIn
              </a>
              <button className="btn" onClick={() => { setSystemState('normal'); setHoverCount(0); }}>
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3D Background */}
      <Scene />

      {/* Main Content Layout */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Navigation */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 0', fontFamily: '"Fira Code", monospace', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--accent-color)' }}>
             [visitor@deven-portfolio ~]$
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#about" style={{ color: 'var(--text-main)', textDecoration: 'none' }}><span style={{ color: '#00ff88' }}>./</span>skills.sh</a>
            <a href="#experience" style={{ color: 'var(--text-main)', textDecoration: 'none' }}><span style={{ color: '#00ff88' }}>./</span>experience.sh</a>
            <a href="#projects" style={{ color: 'var(--text-main)', textDecoration: 'none' }}><span style={{ color: '#00ff88' }}>./</span>projects.sh</a>
            <a href="#contact" style={{ color: 'var(--text-main)', textDecoration: 'none' }}><span style={{ color: '#00ff88' }}>./</span>contact.sh</a>
            <ThemeToggle />
          </div>
        </nav>

        {/* Hero Section */}
        <section className="section split-section" style={{ minHeight: '80vh' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="split-content"
          >
            <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Hi, I'm <span className="glow-text">Deven Kalathiya</span>.
            </h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
              ☁️ Cloud & DevOps Engineer
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              AWS Certified Cloud Practitioner with professional experience at Feedspot. I specialize in cloud infrastructure, CI/CD automation, and monitoring. Passionate about deploying secure applications, DevSecOps best practices, and integrating emerging AI solutions (Amazon Q, Bedrock, Copilot) into production environments.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#experience" className="btn">Execute system.log()</a>
              <a href="#contact" className="btn" style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>Initiate Handshake</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="split-image"
          >
            <img src={`${import.meta.env.BASE_URL}charcter_with_automation_tools.png`} alt="Automation Tools Character" className="floating-3d" />
          </motion.div>
        </section>

        {/* About / Skills Section */}
        <section id="about" className="section split-section">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="split-image"
          >
            <img src={`${import.meta.env.BASE_URL}charcter_with_multiple_hands.png`} alt="Multitasking DevOps" className="floating-3d" style={{ animationDelay: '-1s' }} />
          </motion.div>
          <div className="split-content">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Core <span className="glow-text">Capabilities</span></h2>
            <TerminalWindow />

          </div>
        </section>

        {/* Tools Grid (Full Page Width) */}
        <section className="section" style={{ paddingTop: 0, paddingBottom: '4rem' }}>
          <div className="tool-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'center', width: '100%', gap: '3rem' }}>
            <img src={`${import.meta.env.BASE_URL}docker.png`} alt="Docker" className="floating-icon" style={{ animationDelay: '0s', height: '120px' }} />
            <img src={`${import.meta.env.BASE_URL}ansible_3d.png`} alt="Ansible" className="floating-icon" style={{ animationDelay: '-1.5s', height: '120px' }} />
            <img src={`${import.meta.env.BASE_URL}jenkins.png`} alt="Jenkins" className="floating-icon" style={{ animationDelay: '-0.7s', height: '120px' }} />
            <img src={`${import.meta.env.BASE_URL}terraform_img.png`} alt="Terraform" className="floating-icon" style={{ animationDelay: '-0.5s', height: '120px' }} />
            <img src={`${import.meta.env.BASE_URL}k8s.png`} alt="Kubernetes" className="floating-icon" style={{ animationDelay: '-1.2s', height: '120px' }} />
            <img src={`${import.meta.env.BASE_URL}deven1003_github.png`} alt="GitHub" className="floating-icon" style={{ animationDelay: '-0.3s', height: '120px', width: '120px' }} />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Professional <span className="glow-text">Experience</span></h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel"
            style={{ maxWidth: '900px', margin: '0 auto', padding: '2.5rem', position: 'relative' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-color)' }}>DevOps Engineer</h3>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>Feedspot</h4>
              </div>
              <div style={{ textAlign: 'right', color: 'var(--text-muted)' }}>
                <div>June 2024 – Present</div>
                <div>India</div>
              </div>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent-color)' }}>▹</span> <span>Automated internal tools and pipelines, increasing processing efficiency by 30%.</span></li>
              <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent-color)' }}>▹</span> <span>Built containerized microservices using Docker to integrate with TikTok, Twitter, YouTube, iTunes, and Meta APIs for scalable data processing and automation.</span></li>
              <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent-color)' }}>▹</span> <span>Designed CI/CD pipelines in GitHub Actions & Jenkins for automated builds, tests, and deployments.</span></li>
              <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent-color)' }}>▹</span> <span>Configured WAF, firewall rules, and monitoring stacks with CloudWatch, Zabbix, and New Relic.</span></li>
              <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent-color)' }}>▹</span> <span>Researched and integrated AI-powered AWS solutions (Amazon Q, Bedrock, Copilot) into production systems.</span></li>
              <li style={{ display: 'flex', gap: '1rem' }}><span style={{ color: 'var(--accent-color)' }}>▹</span> <span>Built advanced web scraping systems for large datasets without rate-limit bans using Redis caching.</span></li>
            </ul>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section split-section">
          <div className="split-content" style={{ minWidth: '45%' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Automated <span className="glow-text">Pipelines</span> & Projects</h2>
            <PipelineFlow />

            <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-panel" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Jenkins-based CI/CD with Kubernetes</h3>
                <div style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '1rem', fontFamily: '"Fira Code", monospace' }}>AWS EKS | ArgoCD | Helm | Prometheus | Trivy | SonarQube</div>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                  <li>Built multi-node Jenkins agents for scalable deployments.</li>
                  <li>Integrated SonarQube & OWASP checks into the pipeline.</li>
                  <li>Used ArgoCD for GitOps deployment to AWS EKS.</li>
                  <li>Set up Helm-based Kubernetes monitoring with Prometheus & Grafana.</li>
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-panel" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>GitHub Actions DevSecOps (Tic-Tac-Toe Game)</h3>
                <div style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '1rem', fontFamily: '"Fira Code", monospace' }}>Docker | GitHub Actions | Trivy | ArgoCD | Nginx</div>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                  <li>Created optimized multi-stage Docker builds for Nginx frontend.</li>
                  <li>Automated testing, linting, and image building via GitHub Actions.</li>
                  <li>Used Trivy for vulnerability scans before pushing to GitHub Container Registry.</li>
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="split-image"
            style={{ flexDirection: 'column', gap: '3rem', justifyContent: 'flex-start', paddingTop: '4rem' }}
          >
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '20px', width: '100%', maxWidth: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 10px 30px rgba(0, 255, 136, 0.1)' }}>
              <img src={`${import.meta.env.BASE_URL}cicd_pipeline.png`} alt="CI/CD Pipeline" className="floating-3d" style={{ width: '100%', height: 'auto', animationDelay: '-2s' }} />
            </div>

            {/* Education and Certs Block */}
            <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '2rem', textAlign: 'left', marginTop: '2rem' }}>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>EDUCATION & CERTIFICATIONS</h3>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 'bold' }}>AWS Certified Cloud Practitioner</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Amazon Web Services (2024)</div>
              </div>

              <hr style={{ borderColor: 'var(--card-border)', margin: '1rem 0' }} />

              <div>
                <div style={{ fontWeight: 'bold' }}>B.E. Computer Science & Engineering</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Vidyavardhini’s College Of Engineering & Technology</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>CGPA: 9.143 | 2020 – 2024</div>
              </div>

              <hr style={{ borderColor: 'var(--card-border)', margin: '1rem 0' }} />

              <div>
                <div style={{ fontWeight: 'bold' }}>SSC (10th Grade)</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Score: 93%</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section split-section" style={{ paddingBottom: '8rem' }}>
          <div className="split-content">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Ready to Scale?</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Let's collaborate on building robust, automated infrastructure that can handle any load.
            </p>
            <a href="mailto:devengkalathiya@gmail.com" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 3rem', marginBottom: '1rem' }}>
              devengkalathiya@gmail.com
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="split-image"
            style={{ position: 'relative', width: '100%', minWidth: '400px' }}
          >
            <img src={`${import.meta.env.BASE_URL}charcter_with_social_handles.png`} alt="Contact Handles" className="floating-3d" style={{ animationDelay: '-1.2s', width: '100%', maxWidth: '650px', position: 'relative', zIndex: 1 }} />

            {/* Invisible clickable areas over the PNG. Adjust top/left/width/height % to move the invisible buttons over the actual drawn icons! */}
            <a href="https://www.linkedin.com/in/deven-kalathiya/" target="_blank" rel="noreferrer" style={{ position: 'absolute', top: '0%', left: '0%', width: '100%', height: '20%', zIndex: 10, cursor: 'pointer' }} title="LinkedIn"></a>
            <a href="https://github.com/deven1003" target="_blank" rel="noreferrer" style={{ position: 'absolute', top: '20%', left: '0%', width: '100%', height: '30%', zIndex: 10, cursor: 'pointer' }} title="GitHub"></a>
            <a href="https://www.instagram.com/devenkalathiya/" target="_blank" rel="noreferrer" style={{ position: 'absolute', top: '50%', left: '0%', width: '100%', height: '30%', zIndex: 10, cursor: 'pointer' }} title="Instagram"></a>
            <a href="https://www.chess.com/member/devenkalathiya" target="_blank" rel="noreferrer" style={{ position: 'absolute', top: '80%', left: '0%', width: '100%', height: '20%', zIndex: 10, cursor: 'pointer' }} title="Chess.com"></a>
          </motion.div>
        </section>

      </div>

      {/* Floating Chat Bot */}
      <div
        className="fixed-bot floating-icon"
        style={botPos}
        onMouseEnter={moveBot}
      >
        <img src={`${import.meta.env.BASE_URL}chat_bot.png`} alt="Chat Bot Support" />
      </div>

    </div>
  );
}

export default App;
