import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
  interface Theme {
    grid: {
      fontFamily: string;
    };
    effects: {
      boxShadow: string;
      textShadow: string;
      transition: string;
    };
  }
  interface ThemeOptions {
    grid?: {
      fontFamily: string;
    };
    effects?: {
      boxShadow: string;
      textShadow: string;
      transition: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#161F2A", //#4831D4
    },
    secondary: {
      main: "#3D155F",
    },
    tertiary: {
      main: "#CCF381",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
    },
    fontFamily: ["Interval Pro Regular", " sans-serif"].join(","),
  },
  grid: {
    fontFamily: ["Interval Pro Regular", " sans-serif"].join(","),
  },
  effects: {
    boxShadow: "0 1px 4px #0000001f !important",
    textShadow: "0 1px 1px #0000001f",
    transition: "all .25s cubic-bezier(0.4, 0, 0.2, 1) !important",
  },
  // Add other customizations here
});

export default theme;
