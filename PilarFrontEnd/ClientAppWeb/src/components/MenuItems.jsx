import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StadiumIcon from '@mui/icons-material/Stadium';
import BarChartIcon from "@mui/icons-material/BarChart";
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

const MenuItems = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate("/")}>
        <ListItemIcon>
          <StadiumIcon />
        </ListItemIcon>
        <ListItemText primary="Panel Inicio" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/stadiums")}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Stadiums" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/Map")}>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="Mapa" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/profile")}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/Login")}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Ingresar / Registrar" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default MenuItems;
