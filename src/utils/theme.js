import { createTheme } from '@mui/material/styles';

const archBlue = '#0B72B9';
const archOrange = '#FFBA60';


const theme = createTheme({
    palette:{
        common:{
            blue:`${archBlue}`,
            archOrange:`${archOrange}`,
        },
        primary:{
            main: `${archBlue}`
        },
        secondary:{
            main: `${archOrange}`
        },

    }
})

export default theme;