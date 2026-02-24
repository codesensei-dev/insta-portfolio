import { motion } from 'framer-motion';

const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      aria-label="Toggle theme"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4, type: 'spring', stiffness: 200 }}
      style={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 100,
        width: 60,
        height: 30,
        borderRadius: 15,
        border: 'none',
        cursor: 'pointer',
        padding: 3,
        display: 'flex',
        alignItems: 'center',
        background: isDark
          ? 'linear-gradient(135deg, #1e293b, #334155)'
          : 'linear-gradient(135deg, #7dd3fc, #38bdf8)',
        boxShadow: isDark
          ? '0 2px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
          : '0 2px 12px rgba(56,189,248,0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
        transition: 'background 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      {/* Track icons — sun on left, moon on right */}
      <div style={{
        position: 'absolute',
        left: 8,
        top: '50%',
        transform: 'translateY(-50%)',
        color: isDark ? 'rgba(255,255,255,0.2)' : '#f59e0b',
        transition: 'color 0.4s ease',
        display: 'flex',
        alignItems: 'center',
      }}>
        <SunIcon />
      </div>
      <div style={{
        position: 'absolute',
        right: 8,
        top: '50%',
        transform: 'translateY(-50%)',
        color: isDark ? '#a5b4fc' : 'rgba(7,89,133,0.2)',
        transition: 'color 0.4s ease',
        display: 'flex',
        alignItems: 'center',
      }}>
        <MoonIcon />
      </div>

      {/* Sliding knob */}
      <motion.div
        layout
        style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: isDark ? '#f59e0b' : '#ffffff',
          boxShadow: isDark
            ? '0 2px 8px rgba(245,158,11,0.4)'
            : '0 2px 8px rgba(0,0,0,0.15)',
          zIndex: 1,
          marginLeft: isDark ? 0 : 30,
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}
        animate={{ marginLeft: isDark ? 0 : 30 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );
}
