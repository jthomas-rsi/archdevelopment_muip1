import { cloneElement, useState } from "react";
import { AppBar,Button, Toolbar, useScrollTrigger, Tab, Tabs  } from "@mui/material";

import logo from '../assets/logo.svg'

const ElevationScroll = (props) => {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const Header = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const labels = ['Home','Services','The Revolution','About Us','Contact Us', ]
    return(
        <ElevationScroll>
          <AppBar position="fixed" color="primary">
            <Toolbar disableGutters> 
              <img alt="company logo" src={logo} style={{maxHeight: '7em'}}/>
              <Tabs
              indicatorColor="secondary"
              value={value}
              onChange={handleChange}
              sx={(theme)=>{
                return{
                marginLeft:'auto',
                "&& .Mui-selected": {  color: theme.palette.common.white }
                }
              }}
              >
              { labels.map((tabLabel, idx)=>(
                <Tab
                  key={idx}
                  value={idx}
                  label={tabLabel}
                  sx={(theme)=>{
                    return{
                      ...theme.typography.tab
                    }}
                  }
                  />
              )) }
              </Tabs>
              <Button variant="contained" color="secondary" 
              sx={(theme)=>{
                return{
                  ...theme.typography.estimate
                    }
                  }
                }
              >
                Free Estimate
              </Button>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
    )
}

export default Header;