import { useState } from "react";
import {
  Nav,
  Menu,
  MenuItem,
  Burger,
  MobileMenu
} from "./styles";

const ResponsiveMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>

      <Burger onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>

      <MobileMenu $open={open}>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MobileMenu>
    </Nav>
  );
};

export default ResponsiveMenu;
