import { Box, Drawer, Paper, Stack, Typography } from "@mui/material";
import Service from "../assets/service.png";
import NewsLetter from "../assets/news-letter-bg.png";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

const MenuDrawer = ({ showMenu, handleClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigation = (tab) => {
    if (tab === "home") {
      handleClose();
      navigate("/");
    } else {
      handleClose();
      navigate(`/${tab}`);
    }
  };
  const currentPage = useMemo(() => {
    if (location.pathname === "/") {
      return "Home";
    } else if (location.pathname === "/services") {
      return "Services";
    } else if (location.pathname === "/contact") {
      return "Contact";
    } else if (location.pathname === "/about") {
      return "About";
    } else if (location.pathname === "/gallery") {
      return "Gallery";
    }
  }, [location]);
  return (
    <Drawer
      open={showMenu}
      // onClose={handleClose}
      sx={{ position: "absolute", top: 0, left: 0 }}
    >
      <Paper
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
          // overflow: "hidden",
        }}
      >
        <Box width="50%" p={4} height="100%" display="flex" alignItems="center">
          {/* cross symbol */}
          <Box onClick={handleClose} sx={{ cursor: "pointer" }}>
            <svg
              preserveAspectRatio="xMidYMid meet"
              height={40}
              width={40}
              data-bbox="0.025 0 13.495 13.548"
              viewBox="0 0 13.52 13.52"
              xmlns="http://www.w3.org/2000/svg"
              data-type="ugc"
              role="presentation"
              aria-hidden="true"
              aria-label=""
            >
              <g>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="6.76"
                    x2="13.52"
                    y1="6.76"
                    id="0fcf69f6-d239-4341-a908-ee47a3a6b7fb_comp-kp528ayn_r_comp-kp528bky"
                  >
                    <stop stopColor="#2aace2" offset="0"></stop>
                    <stop stopColor="#662f90" offset="1"></stop>
                  </linearGradient>
                </defs>
                <g>
                  <path
                    d="m13.52 12-.08.09-1.32 1.33c-.1.1-.15 0-.23 0l-3.16-3.15C8.11 9.66 7.49 9 6.88 8.42c-.11-.11-.16-.1-.26 0l-5 5c-.16.17-.16.17-.33 0L.1 12.17c-.1-.11-.1-.17 0-.28l5-5c.18-.18.16-.15 0-.32L.13 1.67C0 1.5 0 1.5.13 1.33L1.3.15c.21-.2.16-.2.37 0C3.28 1.76 4.89 3.38 6.51 5c.24.24.24.24.49 0L11.86.12C12 0 12 0 12.17.12c.4.4.8.81 1.21 1.21.16.17.16.17 0 .33l-4.94 5c-.16.15-.16.15 0 .31l5 5s.06.03.08.03Z"
                    fill="url(#0fcf69f6-d239-4341-a908-ee47a3a6b7fb_comp-kp528ayn_r_comp-kp528bky)"
                  ></path>
                </g>
              </g>
            </svg>
          </Box>
          <Box textAlign="start" paddingLeft={5} sx={{ color: "black" }}>
            <Stack spacing={3} sx={{ paddingLeft: "60px" }}>
              <Box onClick={() => handleNavigation("home")} sx={{ cursor:"pointer"}}>
                <span className="fs-3 fw-bold ">0420 600 185</span>
                <Typography
                  className="menuItems"
                  sx={{ cursor:"pointer"}}
                  color={`${
                    currentPage === "Home" ? "rgb(42,172,226)" : "black"
                  }`}
                >
                  HOME
                </Typography>
              </Box>
              <Typography
                className="menuItems"
                sx={{ cursor:"pointer"}}
                onClick={() => handleNavigation("about")}
                color={`${
                  currentPage === "About" ? "rgb(42,172,226)" : "black"
                }`}
              >
                ABOUT US
              </Typography>
              <Typography
                className="menuItems"
                sx={{ cursor:"pointer"}}
                onClick={() => handleNavigation("services")}
                color={`${
                  currentPage === "Services" ? "rgb(42,172,226)" : "black"
                }`}
              >
                SERVICES
              </Typography>
              <Typography
                className="menuItems"
                sx={{ cursor:"pointer"}}
                onClick={() => handleNavigation("gallery")}
                color={`${
                  currentPage === "Gallery" ? "rgb(42,172,226)" : "black"
                }`}
              >
                GALLERY
              </Typography>
              <Typography
                className="menuItems"
                sx={{ cursor:"pointer"}}
                onClick={()=>handleNavigation("contact")}
                color={`${
                  currentPage === "Contact" ? "rgb(42,172,226)" : "black"
                }`}
              >
                CONTACT
              </Typography>
              <Link to="www.facebook.com" style={{textDecoration:"none", color:"black"}}>
              <span className="fs-5">Facebook</span>
              </Link>
            </Stack>
          </Box>
        </Box>

        <Box width="50%">
          <Box
            sx={{
              width: "100%",
              height: "60%",
              backgroundImage: `url(${Service})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <Box
            height="40%"
            sx={{
              backgroundImage: `url(${NewsLetter})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              py: "20px",
              textAlign: "center",
              color: "white",
              justifyContent: "center",
            }}
          >
            <Typography fontWeight={700} fontSize={24} mb={2}>
              SUBSCRIBE TO OUR NEWSLETTER
            </Typography>
            <input
              type="text"
              className=" m-0 newsletter"
              placeholder="Enter your email here*"
              style={{
                color: "white",
                background: "transparent",
                width: "430px",
                border: "1px solid white",
                paddingBlock: "15px",
                outline: "none",
              }}
            />
            <div
              className="news-submit mx-auto"
              style={{
                width: "430px",
                height: "60px",
                background: "white",
                textAlign: "end",
                color: "black",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span
                className="ms-auto me-3 fw-bold "
                style={{ fontSize: "14px" }}
              >
                SUBMIT
              </span>
            </div>
          </Box>
        </Box>
      </Paper>
    </Drawer>
  );
};

MenuDrawer.propTypes = {
  showMenu: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default MenuDrawer;
