import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";

const Header = () => {
  console.log(window.innerWidth);
  const [showMobileMenu, setShowMobileMenu] = useState(window.innerWidth < 600);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //

  return (
    <HeaderWrapper>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileMenu
          isOpen={showMobileMenu}
          onDismiss={() => setShowMobileMenu(!showMobileMenu)}
        />
      </MainHeader>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  @media (max-width: ${(props) => props.theme.queries.phone}) {
    border-top: 5px solid ${COLORS.gray[900]};
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  @media (max-width: ${(props) => props.theme.queries.phone}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
