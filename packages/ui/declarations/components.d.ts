import React from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h7: string;
    h8: string;
    h9: string;
    ui: string;
    link: string;
    pointer: string;
    small: string;
    code: string;
  }

  interface TypographyVariantsOptions {
    h7?: React.CSSProperties;
    h8?: React.CSSProperties;
    h9?: React.CSSProperties;
    ui?: React.CSSProperties;
    link?: React.CSSProperties;
    pointer?: React.CSSProperties;
    small?: React.CSSProperties;
    code?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true;
    h8: true;
    h9: true;
    ui: true;
    link: true;
    pointer: true;
    small: true;
    code: true;
  }
}
