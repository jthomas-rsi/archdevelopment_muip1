import { Menu, MenuItem } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ServiceMenu = ({ anchorEl, open, handleClose, setValue }) => {
  // const close = () => {
  //   handleClose();
  // };

  useEffect(() => {
    // close();
  }, []);
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      sx={(theme) => {
        return {
          "& .MuiMenu-list": {
            backgroundColor: theme.palette.primary.main,
          },
        };
      }}
      MenuListProps={{
        sx: {
          // TODO = fix the on mouse leave functionality of the service tab menu
          // onmouseleave: () => close,
        },
      }}
    >
      <MenuItem
        onClick={() => {
          handleClose();
          setValue(1);
        }}
        component={Link}
        to="/services"
        sx={(theme) => {
          return {
            ...theme.typography.tab,
          };
        }}
      >
        Services
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          setValue(1);
        }}
        component={Link}
        to="/customsoftware"
        sx={(theme) => {
          return {
            ...theme.typography.tab,
          };
        }}
      >
        Custom Software Development
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          setValue(1);
        }}
        component={Link}
        to="/mobileapps"
        sx={(theme) => {
          return {
            ...theme.typography.tab,
          };
        }}
      >
        Mobile App Development
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          setValue(1);
        }}
        component={Link}
        to="/websites"
        sx={(theme) => {
          return {
            ...theme.typography.tab,
          };
        }}
      >
        Website Development
      </MenuItem>
    </Menu>
  );
};

export default ServiceMenu;
