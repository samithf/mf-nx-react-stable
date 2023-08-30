import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SideNav = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <Link to="/nser" style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <ListItemButton>
          <ListItemIcon>
            <AlternateEmailIcon />
          </ListItemIcon>
          <ListItemText primary="NSER" />
        </ListItemButton>
      </Link>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AlternateEmailIcon />
        </ListItemIcon>
        <ListItemText primary="CMS" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link
            to="/cms/create-banner"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Create Banner" />
            </ListItemButton>
          </Link>
          <Link
            to="/cms/planned-outage"
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Planned Outage" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </List>
  );
};
