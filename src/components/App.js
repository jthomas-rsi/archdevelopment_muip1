import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route,Routes  } from "react-router-dom";
import Header from "./Header";
import theme from "../utils/theme";
import Home from "./ui/Home";
import Services from './ui/Services';
import Revolution from "./ui/Revolution";
import About from './ui/About';
import Contact from './ui/Contact';
import Estimate from './ui/Estimate';
import Websites from "./ui/Websites";
import Software from "./ui/CustomSoftware";
import MobileApps from "./ui/MobileApps";
import { Box } from "@mui/material";


function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        <Header/>
        <Box
          sx={(theme)=>{
            return {
              marginTop:'8em'
              }
            }}
        >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/revolution" element={<Revolution/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/estimate" element={<Estimate/>} />
          <Route path="/customsoftware" element={<Software/>} />
          <Route path="/mobileapps" element={<MobileApps/>} />
          <Route path="/websites" element={<Websites/>} />
        </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
