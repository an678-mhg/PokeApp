import { Container, Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/LogoPoke.png";

const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div">
            <Link to="/">
              <img
                style={{
                  width: "105px",
                  height: "42px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                alt="Logo-app"
                src={Logo}
              />
            </Link>
          </Typography>
        </Toolbar>
        <Box></Box>
      </Container>
    </AppBar>
  );
};
export default Header;
