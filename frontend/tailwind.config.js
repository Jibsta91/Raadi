module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          'raadi-blue': '#2563eb',
          'raadi-dark': '#1e293b'
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography')
    ],
  }