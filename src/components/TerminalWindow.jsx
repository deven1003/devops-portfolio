import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Server, Cloud } from 'lucide-react';

const TerminalWindow = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="glass-panel terminal-window"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}
    >
      {/* Terminal Header */}
      <div style={{
        background: 'rgba(0,0,0,0.5)',
        padding: '0.75rem 1rem',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--card-border)'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
        </div>
        <div style={{ margin: '0 auto', fontFamily: '"Fira Code", monospace', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          visitor@devops-portfolio:~
        </div>
      </div>

      {/* Terminal Body */}
      <div style={{ padding: '2rem', fontFamily: '"Fira Code", monospace', fontSize: '0.95rem', lineHeight: '1.6' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{ color: '#00ff88' }}>visitor@devops-portfolio:~$</span> whoami
          <br />
          <span style={{ color: '#00ccff' }}>System Architecture Designer & Automation Specialist</span>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{ color: '#00ff88' }}>visitor@devops-portfolio:~$</span> cat competencies.json
          <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cloud size={16} color="#FF9900" /> AWS, EC2, S3, IAM, Route53
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Server size={16} color="#326CE5" /> Docker, Jenkins, ArgoCD
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Terminal size={16} color="#7B42BC" /> Terraform, GitHub Actions
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={16} color="#ff3366" /> Prometheus, Grafana, Trivy
            </div>
          </div>
          <div style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
              {"// Programming: PHP, JS, PYTHON, BASH, SQL"}
          </div>
          <div style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
              {"// Certified: AWS Certified Cloud Practitioner"}
          </div>
        </div>

        <div>
          <span style={{ color: '#00ff88' }}>visitor@devops-portfolio:~$</span> <span className="blinking-cursor">_</span>
        </div>
      </div>
      
      <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 8px;
          height: 15px;
          background-color: var(--text-main);
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default TerminalWindow;
