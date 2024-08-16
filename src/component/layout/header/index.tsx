import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Container,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Button,
  Tooltip,
  MenuItem,
  useMediaQuery,
  useTheme,
  Link,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const pages = [
  {
    name: "Works",
    link: "/projects",
  },
  {
    name: "Blog",
    link: "/blogs",
  },
];

const contacts = [
  {
    name: "Linked In",
    icon: "",
    link: "",
  },
  {
    name: "X(Formally Twitter)",
    icon: "",
    link: "",
  },
  {
    name: "Github",
    icon: (<GitHubIcon/>),
    link: "",
  },
  {
    name: "Mail",
    icon: (<EmailIcon/>),
    link: "",
  },
];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (link: string) => {
    navigate(link);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile  */}

          {isScreenSmall && (
            <>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                BIDYUT
              </Typography>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleCloseNavMenu(page.link)}
                    >
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          )}

          {!isScreenSmall && (
            <>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                BIDYUT
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page, index) => (
                  <Button
                    key={index}
                    onClick={() => handleCloseNavMenu(page.link)}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      borderRadius: "0",
                      borderBottom:
                        location.pathname === page.link
                          ? `2px solid ${theme.palette.tertiary.main}`
                          : "",
                      "&:hover": {
                        backgroundColor:
                          location.pathname === page.link
                            ? theme.palette.tertiary.main
                            : "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Feel free to contact me">
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    onMouseEnter={handleOpenUserMenu}
                    sx={{
                      mr: 2,
                      display: "flex",
                      fontWeight: 400,
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    Contacts
                  </Typography>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  MenuListProps={{
                    onMouseLeave: handleCloseUserMenu,
                  }}
                >
                  {contacts?.map((item, index) => (
                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                      <Link
                        href={item.link}
                        underline="none"
                        color="inherit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button sx={{textDecoration:'none'}}>
                          {item.icon} &nbsp;{item.name}
                        </Button>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
