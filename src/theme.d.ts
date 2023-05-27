import { ThemeOptions } from "@mui/material/styles";

import React from 'react'
declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      },
    }

    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
          danger?: React.CSSProperties['color']
        },
      }

    interface Theme {
        shape: {
            borderRadius: string;
        },
    }

    interface ThemeOptions {
        shape?: {
            borderRadius?: string
        };
      }

      interface Palette{
        neutral?: PaletteColor
      }

      interface PaletteOptions{
        neutral?: PaletteColorOptions
      }

      interface SimplePaletteColorOptions{
        darker?: string
      }

      interface PaletteColor{
        darker?: string
      }
}