import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route,Routes  } from "react-router-dom";
import Header from "./Header";
import theme from "../utils/theme";
import Home from "./ui/Home";
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
          <Route path="/" element={<>Home Test</>} />
          <Route path="/services" element={<>services page</>} />
          <Route path="/revolution" element={<>The Revolution</>} />
          <Route path="/about" element={<>About Page</>} />
          <Route path="/contact" element={<>Contact Us</>} />
          <Route path="/estimate" element={<>Free Estimate</>} />
        </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
