import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Home from "../pages/Home" 
import useTheme from '../hooks/useTheme'
import { styled } from "@mui/material/styles" 
import Header from "../components/layouts/Header/Header" 
import Footer from "../components/layouts/Footer/Footer" 


const ThemeProvider = styled('div')({
})

const RouterControl = () => {
  const [theme, switchTheme] = useTheme()
  return (
    <>
      <ThemeProvider data-theme={theme}>
        <BrowserRouter>
          <Header theme={theme} switchTheme={switchTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  ) 
}

export default RouterControl 