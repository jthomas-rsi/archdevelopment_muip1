import { ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import theme from "../utils/theme";
import { Typography } from "@mui/material";


function App() {
  return (
    <ThemeProvider theme={theme} >
      <Header/>
      <Typography 
      sx={(theme)=>{
        return {
          marginTop:'8em'
          }
        }}
      >
      {'Hello!'}
      </Typography>
    </ThemeProvider>
  );
}

export default App;
