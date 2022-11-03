// import { ReactNode, FC, useState, useEffect, createContext, MouseEventHandler } from 'react'
// // import { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme } from "../styles/global";

// //@ts-ignore
// export const ThemeContext = createContext<[string, () => void]>()

// const Theme: FC<Props> = ({ children })=> {

//   const [theme, setTheme] = useState("light");
//   const isDarkTheme = theme === "dark";

//   const toggleTheme = () => {
//     const userChangeTheme = isDarkTheme ? "light" : "dark";
//     setTheme(userChangeTheme);
//     localStorage.setItem("theme", userChangeTheme);
//     document.documentElement.setAttribute('theme', userChangeTheme)
//   }

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
//     if (storedTheme) {
//       document.documentElement.setAttribute('theme', storedTheme)
//       setTheme(storedTheme)
//     }
//   }, []);


//   return (
//     // <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
//       {/* <GlobalStyles /> */}
//       <ThemeContext.Provider value={[theme, toggleTheme]}>
//         {children}
//       </ThemeContext.Provider>
//     // </ThemeProvider>
//   )
// };

// // export { Theme };

// type Props = { children: ReactNode }
