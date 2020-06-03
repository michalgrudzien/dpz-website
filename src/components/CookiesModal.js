import React, { useState } from "react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";

import colors from "utils/colors";
import Button from "components/shared/Button";
import LinkButton from "components/shared/LinkButton";

import cookieImg from "assets/images/cookie.svg";
import isWindowDefined from "helpers/isWindowDefined";
import { boxShadow } from "utils/styles";

const ModalBackground = styled(BaseModalBackground)`
  z-index: 500;
`;

const StyledModal = Modal.styled`
  position: relative;
  max-width: 720px;
  padding: 2em 1.5em 1em;
  margin: 0 15px;
  
  background-color: ${colors.turquoise};
  ${boxShadow};

  &, p, h2 {
    color: ${colors.white};
  }
  h2 {
    margin-top: 0.75em;
  }

  ${media.md`
    padding: 0em 1.5em 1em 144px;
  `}
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  * {
    margin: 0.25em;
  }

  ${media.md`
    flex-direction: row;
    justify-content: flex-end;
  `}
`;

const CookieImg = styled.img`
  position: absolute;
  top: 0;
  left: 16px;
  width: 92px;
  transform: translateY(-70%);

  ${media.md`
    transform: translateY(-30%);
  `}
`;

const getLocalStorageCookie = () =>
  isWindowDefined() ? localStorage.getItem("cookies-accepted") : () => {};
const setLocalStorageCookie = value =>
  isWindowDefined()
    ? localStorage.setItem("cookies-accepted", value)
    : () => {};

const CookiesModal = ({ enabledOnPage }) => {
  const [isCookiesAccepted, setCookiesAccepted] = useState(
    getLocalStorageCookie()
  );
  let isModalOpen = !isCookiesAccepted && enabledOnPage;

  const handleAcceptanceClick = () => {
    setLocalStorageCookie(true);
    setCookiesAccepted(true);
  };

  return (
    <ModalProvider backgroundComponent={ModalBackground}>
      <StyledModal isOpen={isModalOpen}>
        <CookieImg src={cookieImg} alt="Cookie" />
        <h2>Trudne sprawy</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ButtonsWrapper>
          <LinkButton internal naked white to="/trudne-sprawy">
            Więcej o trudnych sprawach
          </LinkButton>
          <Button white onClick={handleAcceptanceClick}>
            OK, mam to
          </Button>
        </ButtonsWrapper>
      </StyledModal>
    </ModalProvider>
  );
};

export default CookiesModal;
