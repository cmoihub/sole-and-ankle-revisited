/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  const open = () => onDismiss(true);
  const close = () => onDismiss(false);
  return (
    <Wrapper>
      <ButtonWrapper onClick={open}>
        <Icon id="menu" strokeWidth={1} />
      </ButtonWrapper>
      <Overlay
        style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
        isOpen={isOpen}
        onDismiss={close}
      >
        <Content style={{ boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)" }}>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
            <button onClick={close}>Exit.</button>
          </Footer>
        </Content>
      </Overlay>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-self: center;
`;
const ButtonWrapper = styled(UnstyledButton)`
  @media (min-width: ${(props) => props.theme.queries.phone}) {
    display: none;
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer``;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  position: relative;
  background: white;
  border-radius: 8px;
  width: 65%;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 0px 4px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  flex-basis: 5%;

  &:first-of-type {
    color: var(--secondary);
  }
`;

export default MobileMenu;
