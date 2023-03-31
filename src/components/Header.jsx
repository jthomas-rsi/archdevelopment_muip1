import { cloneElement, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AppBar,Button, Toolbar, useScrollTrigger, Tab, Tabs,Box } from "@mui/material";

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

  useEffect(()=>{
    if(window.location.pathname === "/" && value !== 0){
      setValue(0)
    } else if(window.location.pathname === "/services" && value !== 0){
      setValue(1)
    } else if(window.location.pathname === "/revolution" && value !== 0){
      setValue(2)
    } else if(window.location.pathname === "/about" && value !== 0){
      setValue(3)
    } else if(window.location.pathname === "/contact" && value !== 0){
      setValue(4)
    } else if(window.location.pathname === "/estimate" && value !== 0)
    {setValue(5)
    }
  },[value])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handlePage = useMemo(()=> handleChange(value), [value] )

  const tabs = [
    {tabLabel:'Home', url:'/'},
    {tabLabel:'Services', url:'/services'},
    {tabLabel:'The Revolution', url:'/revolution'},
    {tabLabel:'About Us', url:'/about'},
    {tabLabel:'Contact Us', url:'/contact'},
  ]
    return(
        <ElevationScroll>
          <AppBar position="fixed" color="primary">
            <Toolbar disableGutters>
              <Box
                component='img'
                src={logo}
                sx={()=>{
                  return{
                    maxHeight: '7em'
                  }}}
                  />

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
              { tabs.map((tab, idx)=>(
                <Tab
                  component={Link}
                  to={tab.url}
                  key={idx}
                  value={idx}
                  label={tab.tabLabel}
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