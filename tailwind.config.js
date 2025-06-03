module.exports = {
    theme: {
      extend: {
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
        animation: {
          float: 'float 2s ease-in-out infinite',
        },
      },
    },
  }