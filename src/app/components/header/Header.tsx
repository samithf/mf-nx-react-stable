import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          STABLE
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
