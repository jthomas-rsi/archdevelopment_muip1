import { ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import theme from "../utils/theme";


function App() {
  return (
    <ThemeProvider theme={theme} >
      <Header/>
      {'Hello!'}
    </ThemeProvider>
  );
}

export default App;
