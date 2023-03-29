import { createTheme } from '@mui/material/styles';

const archBlue = '#0B72B9';
const archOrange = '#FFBA60';
const white = '#FFFFFF'


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
    },
    typography:{
        tab:{
            fontFamily:'Raleway',
            textTransform: 'none',
            fontWeight: '700',
            fontSize:'1rem',
            marginLeft:'25px',
            color:`${white}`,
            minWidth:10
        },
        estimate:{
            borderRadius:'50px',
            marginLeft: '50px',
            marginRight: '25px',
            fontFamily:'Pacifico',
            fontSize:'1rem',
            textTransform: 'none',
            height: '45px',
            color:'white'
        }
    }
})

export default theme;