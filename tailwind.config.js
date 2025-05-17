module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF2D55',
        secondary: '#00C1D4',
        tertiary: '#FFD700',
      },
      fontFamily: {
        audiowide: ['var(--font-audiowide)'],
        michroma: ['var(--font-michroma)'],
      },
      animation: {
        'neon-pulse': 'neonPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
};
