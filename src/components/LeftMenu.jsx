
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, TextField, InputAdornment, Divider} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; 
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import '../styles/LeftMenu.css'; 

function LeftMenu() {
  return (
    <div className="left-menu">
      <List>
        <ListItem className="search-item">
          <TextField 
            placeholder="Search" 
            variant="outlined" 
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </ListItem>
        {/* Other menu items */}
        <ListItem button className="menu-item">
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <PeopleAltOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <AccessTimeIcon /> 
          </ListItemIcon>
          <ListItemText primary="Timeoff" />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <LayersOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Company" />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <PieChartOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Reporting" />
        </ListItem>
        <ListItem button className="menu-item">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>

      </List>
      <div className="bottom-menu">
      <Divider />
        <ListItem button className="menu-item">
          <ListItemIcon>
            <SportsSoccerOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
      </div>
    </div>
  );
}

export default LeftMenu;
