import { createTheme, ThemeProvider } from '@mui/material';
import { ReactNode, FC, useState, createContext, useMemo, useEffect } from 'react'


export const ColorModeContext = createContext({ toggleTheme: () => { } });

const Theme: FC<Props> = ({ children }) => {

  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = {
    toggleTheme: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      document.documentElement.setAttribute('theme', mode)
      localStorage.setItem("theme", mode);
    },
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (storedTheme) {
      document.documentElement.setAttribute('theme', storedTheme)
      setMode((prevMode) => (prevMode === storedTheme ? 'dark' : 'light'))
    }
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
};

export { Theme };

type Props = { children: ReactNode }
