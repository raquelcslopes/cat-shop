import SVGButtons from "../SVGButtons";
import searchIcon from "../../assets/search.svg";
import accountIcon from "../../assets/account.svg";
import CartIcon from "../SVGButtons/CartIcon";
import { useState } from "react";
import { BrandName, ButtonsContainer, Li, ListContainer, Nav } from "./styles";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  navItems: string[];
}

function NavBar({ navItems }: NavBarProps) {
  const navigate = useNavigate();

  return (
    <Nav>
      <BrandName onClick={() => navigate("/")}>ARISTOCATS</BrandName>
      <ListContainer>
        {navItems.map((item, index) => (
          <Li
            key={index}
            onClick={() =>
              navigate(`${item.replaceAll(" ", "-").toLowerCase()}`)
            }
          >
            {item}
          </Li>
        ))}
      </ListContainer>
      <ButtonsContainer>
        <SVGButtons
          src={searchIcon}
          alt={"Search Icon"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></SVGButtons>
        <SVGButtons
          src={accountIcon}
          alt={"Account/Profile Icon"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></SVGButtons>
        <CartIcon />
      </ButtonsContainer>
    </Nav>
  );
}

export default NavBar;
