/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper>
      <ButtonWrapper onClick={() => onDismiss(!isOpen)}>
        <Icon id="menu" strokeWidth={1} />
      </ButtonWrapper>
      {isOpen && (
        <>
          <nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </nav>
          <footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </footer>
        </>
      )}
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

export default MobileMenu;
