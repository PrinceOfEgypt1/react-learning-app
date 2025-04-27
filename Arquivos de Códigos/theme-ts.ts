// src/styles/theme.ts
export type ThemeMode = 'light' | 'dark';

// Tipagem para nosso design system
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    success: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
  };
  typography: {
    fontFamily: {
      sans: string;
      heading: string;
      mono: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeight: {
      none: number;
      tight: number;
      normal: number;
      relaxed: number;
    };
  };
  spacing: {
    '0': string;
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '8': string;
    '10': string;
    '12': string;
    '16': string;
    '20': string;
    '24': string;
    '32': string;
    '40': string;
    '48': string;
    '64': string;
  };
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  zIndex: {
    base: number;
    dropdown: number;
    sticky: number;
    fixed: number;
    modal: number;
    toast: number;
  };
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
}

// Light theme
export const lightTheme: Theme = {
  colors: {
    primary: '#4361ee',
    secondary: '#3a86ff',
    accent: '#7209b7',
    success: '#06d6a0',
    background: '#f0f5ff',
    surface: '#ffffff',
    text: '#1e293b',
    textSecondary: '#475569',
    border: '#e2e8f0',
    error: '#ef4444'
  },
  typography: {
    fontFamily: {
      sans: "'Inter', system-ui, sans-serif",
      heading: "'Poppins', system-ui, sans-serif",
      mono: "'Fira Code', monospace"
    },
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.6,
      relaxed: 1.8,
    },
  },
  spacing: {
    '0': '0',
    '1': '0.25rem',    // 4px
    '2': '0.5rem',     // 8px
    '3': '0.75rem',    // 12px
    '4': '1rem',       // 16px
    '5': '1.25rem',    // 20px
    '6': '1.5rem',     // 24px
    '8': '2rem',       // 32px
    '10': '2.5rem',    // 40px
    '12': '3rem',      // 48px
    '16': '4rem',      // 64px
    '20': '5rem',      // 80px
    '24': '6rem',      // 96px
    '32': '8rem',      // 128px
    '40': '10rem',     // 160px
    '48': '12rem',     // 192px
    '64': '16rem',     // 256px
  },
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 100,
    fixed: 1000,
    modal: 1300,
    toast: 1400,
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Dark theme
export const darkTheme: Theme = {
  colors: {
    primary: '#6366f1',
    secondary: '#4f46e5', 
    accent: '#8b5cf6',
    success: '#059669',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f8fafc',
    textSecondary: '#cbd5e1',
    border: '#334155',
    error: '#dc2626'
  },
  typography: lightTheme.typography,
  spacing: lightTheme.spacing,
  borderRadius: lightTheme.borderRadius,
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.36)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.36)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.35)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.34)',
  },
  breakpoints: lightTheme.breakpoints,
  zIndex: lightTheme.zIndex,
  transitions: lightTheme.transitions,
};

export const getTheme = (mode: ThemeMode): Theme => {
  return mode === 'light' ? lightTheme : darkTheme;
};
