import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    main: {
      primary: '#f6e96b',
      secondary: '#bedc74',
      tertiary: '#a2ca71',
      quaternary: '#387f39',
      primaryDark: '#c4b312'
    },
    text: {
      black: '#333333',
      gray: '#777777',
      placeholder: '#ababab',
      link: '#0071c1',
      white: '#ffffff',
      danger: '#cb3a31',
      warning: '#cd7b2e',
      success: '#019b5f'
    },
    component: {
      border: '#e0e0e0',
      background: '#f8f7f6',
      overBackground: '#f5f8fa',
      backgroundDanger: '#fff4f2',
      backgroundWarning: '#fff9f2',
      backgroundSuccess: '#d8fff0',
      overlay: '#03030226',
      scrim: '#03030280',
      box: '#ffffff'
    },
    accent: {
      danger: '#cb3a31',
      warning: '#cd7b2e',
      success: '#019b5f'
    }
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: ' 20px'
  },
  fontSize: {
    textXXS: '0.625rem',
    textXS: '0.75rem',
    textS: '0.875rem',
    textM: '1rem',
    textL: '1.25rem',
    textXL: '1.5rem'
  },
  fontWeight: {
    regular: '400',
    bold: '600'
  },
  spacing: {
    xxs: '4px',
    xs: '8px',
    s: '12px',
    m: '16px',
    l: '24px',
    xl: '32px',
    xxl: '40px'
  },
  width: {
    sideBar: '60px'
  }
} as const)
