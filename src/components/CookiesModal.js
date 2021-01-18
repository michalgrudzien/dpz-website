import React, { useState } from "react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";

import colors from "utils/colors";
import Button from "components/shared/Button";

import cookieImg from "assets/images/cookie.svg";
import isWindowDefined from "helpers/isWindowDefined";
import { boxShadow } from "utils/styles";
import { graphql, Link, useStaticQuery } from "gatsby";

const ModalBackground = styled(BaseModalBackground)`
  z-index: 500;
`;

const StyledModal = Modal.styled`
  position: relative;
  max-width: 720px;
  padding: 2em 1.5em 1em;
  margin: 0 15px;
  
  background-color: ${colors.turquoise};
  border-radius: 1em;
  ${boxShadow};

  &, p, h2 {
    color: ${colors.white};
  }
  h2 {
    margin-top: 0.75em;
  }
  a{
    color ${colors.white};
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
  isWindowDefined() ? localStorage.getItem("cookies-consent") : () => {};
const setLocalStorageCookie = value =>
  isWindowDefined() ? localStorage.setItem("cookies-consent", value) : () => {};

const CookiesModal = ({ enabledOnPage }) => {
  const [isAlreadyShown, setAlreadyShown] = useState(getLocalStorageCookie());
  let isModalOpen = !isAlreadyShown && enabledOnPage;

  const response = useStaticQuery(graphql`
    query CookiesModalQuery {
      allSanityPrivacyPolicy {
        nodes {
          bannerText
        }
      }
    }
  `);

  const data = response.allSanityPrivacyPolicy.nodes[0];

  const handleAcceptanceClick = () => {
    setLocalStorageCookie(1);
    setAlreadyShown(true);
  };

  const handleRejectionClick = () => {
    setLocalStorageCookie(0);
    setAlreadyShown(true);
  };

  return (
    <ModalProvider backgroundComponent={ModalBackground}>
      <StyledModal isOpen={isModalOpen}>
        <CookieImg src={cookieImg} alt="Cookie" />
        <h2>Trudne sprawy</h2>
        <p>
          {data.bannerText}
          <br />
          <Link to="/trudne-sprawy">Trudne sprawy - szczegóły</Link>
        </p>
        <ButtonsWrapper>
          <Button white naked onClick={handleRejectionClick}>
            Nie zgadzam się
          </Button>
          <Button white onClick={handleAcceptanceClick}>
            Zgoda
          </Button>
        </ButtonsWrapper>
      </StyledModal>
    </ModalProvider>
  );
};

export default CookiesModal;
