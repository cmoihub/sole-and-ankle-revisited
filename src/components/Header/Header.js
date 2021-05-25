import React, { useState } from "react";
import styled from "styled-components/macro";

import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";

const Header = () => {
  console.log(window.innerWidth);
  const [showMobileMenu, setShowMobileMenu] = useState(window.innerWidth < 600);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:

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
    border-top: 5px solid var(--color-gray-900);
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
`;

const Nav = styled.nav`
  display: flex;
  margin: 0px 48px;
  /* Minimum 1.5rem, when 600px or smaller
  Maximum 3rem, when 1300px or larger*/
  gap: clamp(1rem, 5.9vw - 1rem, 3rem);
  overflow-x: scroll;

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
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--secondary);
  }
`;

export default Header;
