import {
  cloneElement,
  useEffect,
  useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar,Button, Toolbar, useScrollTrigger, Tab, Tabs,Box, } from "@mui/material";

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
  
  
  const location = useLocation();
  
    useEffect(()=>{ 
    if(location.pathname === "/" ){ setValue(0)} 
    else if(location.pathname === "/services"){setValue(1)}
    else if(location.pathname === "/revolution" ){setValue(2)}
    else if(location.pathname === "/about"){setValue(3)}
    else if(location.pathname === "/contact"){setValue(4)}
    else if(location.pathname === "/estimate"){setValue(5)}
  }, [location.pathname] )



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const tabs = [
    {tabLabel:'Home', url:'/'},
    {tabLabel:'Services', url:'/services'},
    {tabLabel:'The Revolution', url:'/revolution'},
    {tabLabel:'About Us', url:'/about'},
    {tabLabel:'Contact Us', url:'/contact'},
    {tabLabel:'Free Estimate', url:'/estimate'},
  ]
    return(
        <ElevationScroll>
          <AppBar position="fixed" color="primary">
            <Toolbar disableGutters>
            <Button
            disableRipple={true}
              component={Link}
              to="/"
              sx={()=>{
                return{
                  padding:'0px',
                  "&:hover":{
                    backgroundColor:'transparent'
                  }
                }}}
            >
              <Box
                component='img'
                src={logo}
                sx={()=>{
                  return{
                    minHeight: '7em',
                    padding:'0px'
                  }}}
                  />
              </Button>
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
              { tabs.map((tab, idx)=> {
                if(tab.url === '/estimate'){
                return <Tab
                  component={Link}
                  to={tab.url}
                  key={idx}
                  value={idx}
                  label={tab.tabLabel}
                  sx={(theme)=>{
                    return{
                      ...theme.typography.estimate
                    }}
                  }
                  />
                }
                return <Tab
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
                }
              ) }
              </Tabs>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
    )
}

export default Header;