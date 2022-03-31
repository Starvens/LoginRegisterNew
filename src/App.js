import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LandingPagePPT1 from "./components/LandingPagePPT1";
import PdfConversionImage from "./components/PdfConversionImage";
import ConversionLinks from "./components/ConversionLinks";
import FirstPage from "./components/FirstPage";
import { ThirdPage } from "./components/ThirdPage";
import FourthPage from './components/FourthPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { ForgotPassword } from "./components/ForgotPassword";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#355E3B",
      },
      secondary: {
        main: "#E33E7F",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <NavBar></NavBar>
      <LandingPagePPT1></LandingPagePPT1>
      <PdfConversionImage></PdfConversionImage> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}> </Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        </Routes>
        {/* <FirstPage></FirstPage>
      <ConversionLinks></ConversionLinks>
      <ThirdPage></ThirdPage>
      <FourthPage></FourthPage> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
