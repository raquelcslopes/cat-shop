import { useState } from "react";
import { Nav, Menu, MenuItem, Burger, MobileMenu } from "./styles";
import { useNavigate } from "react-router-dom";

const ResponsiveMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Nav>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Shop Now</MenuItem>
        <MenuItem>Breeds</MenuItem>
        <MenuItem>Top Favorites</MenuItem>
      </Menu>

      <Burger onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>

      <MobileMenu $open={open}>
        <MenuItem
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            navigate("/shop-now");
          }}
        >
          Shop Now
        </MenuItem>
        <MenuItem
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            navigate("/breed");
          }}
        >
          Breeds
        </MenuItem>
        <MenuItem
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            navigate("/top-favorites");
          }}
        >
          Top Favorites
        </MenuItem>
      </MobileMenu>
    </Nav>
  );
};

export default ResponsiveMenu;
