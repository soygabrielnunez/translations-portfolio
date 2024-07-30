import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: colors.sky[600],
        secondary: colors.gray[500],
        tertiary: colors.gray[400],
      },
      fontFamily: {
        sans: ['Helvetica', 'sans-serif']
      },
    },
  },
}