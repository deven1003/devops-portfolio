import React from 'react';
import { motion } from 'framer-motion';

const PipelineFlow = () => {
  return (
    <div style={{ padding: '1rem 0 2rem 0' }}>
      {/* Advanced Animated Cyber-Flow Representation */}
      <div className="glass-panel" style={{ height: '12px', width: '100%', position: 'relative', overflow: 'hidden', borderRadius: '6px', borderLeft: '2px solid var(--accent-color)', borderRight: '2px solid var(--accent-color)' }}>
        <motion.div
          animate={{ x: ['-30%', '130%'] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '250px',
            background: 'linear-gradient(90deg, transparent, #00ff88, #00ff88, transparent)',
            opacity: 0.9,
            boxShadow: '0 0 15px #00ff88'
          }}
        />
      </div>
    </div>
  );
};

export default PipelineFlow;
