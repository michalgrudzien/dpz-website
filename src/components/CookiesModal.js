import React, { useState } from "react";
import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import Cookies from "js-cookie";

import colors from "utils/colors";
import Button from "components/shared/Button";

import cookieImg from "assets/images/cookie.svg";
import { boxShadow } from "utils/styles";
import { graphql, Link, useStaticQuery } from "gatsby";

import { GDPR_COOKIE_NAME } from "utils/constants";

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

const getGdprCookie = () => Cookies.get(GDPR_COOKIE_NAME);
const setGdprCookie = (value) =>
  Cookies.set(GDPR_COOKIE_NAME, value, {
    expires: 365,
  });

const setLocalStorageAnswered = () =>
  localStorage.setItem("gdpr-consent-answered", 1);

const CookiesModal = ({ enabledOnPage }) => {
  const gdprAnswered = localStorage.getItem("gdpr-consent-answered");

  const [isAlreadyShown, setAlreadyShown] = useState(!!parseInt(gdprAnswered));
  const isModalOpen = !isAlreadyShown && enabledOnPage;

  //Update expiration date
  setGdprCookie(getGdprCookie());

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
    setGdprCookie(true);
    setLocalStorageAnswered();
    setAlreadyShown(true);
  };

  const handleRejectionClick = () => {
    setGdprCookie(false);
    setLocalStorageAnswered();
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
