import { Menu, MenuItem } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ServiceMenu = ({ anchorEl, open, handleClose, setValue }) => {
  const close = () => {
    handleClose();
  };

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
          //   onmouseleave: () => close,
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
      >
        Website Development
      </MenuItem>
    </Menu>
  );
};

export default ServiceMenu;
