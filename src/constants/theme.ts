// CSS Variables from index.css
export const COLORS = {
   primary: 'var(--color-primary-green)',
   google: 'var(--color-google-red)',
   facebook: 'var(--color-facebook-blue)',
   linkedin: 'var(--color-linkedin-blue)',
   gray: {
      light: 'var(--color-gray-light)',
      medium: 'var(--color-gray-medium)',
      dark: 'var(--color-gray-dark)',
      border: 'var(--color-gray-border)'
   }
} as const

// Tailwind utility classes for colors
export const COLOR_CLASSES = {
   primary: {
      text: 'text-primary-green',
      bg: 'bg-primary-green',
      border: 'border-primary-green'
   },
   social: {
      google: 'bg-google-red',
      facebook: 'bg-facebook-blue',
      linkedin: 'bg-linkedin-blue'
   },
   gray: {
      light: 'text-gray-light',
      medium: 'text-gray-medium',
      dark: 'text-gray-dark',
      border: 'border-gray-custom'
   }
} as const

export const FORM_WIDTHS = {
   default: 'w-[630px]',
   wide: 'w-[800px]'
} as const
