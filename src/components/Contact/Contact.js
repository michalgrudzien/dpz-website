import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Loader from "react-spinners/PropagateLoader";

import Portal from "components/Portal";
import { ContactContext } from "components/PageLayout";
import ajax from "helpers/ajax";

import instagramIcon from "assets/images/instagram_w.svg";
import messengerIcon from "assets/images/messenger_w.svg";

import ContactForm from "./ContactForm";
import * as P from "./partials";
import colors from "utils/colors";

const FORM_STATES = {
  READY: "formState/ready",
  LOADING: "formState/loading",
  SUCCESS: "formState/success",
  ERROR: "formState/error",
};

const Contact = () => {
  const [formState, setFormState] = useState(FORM_STATES.READY);

  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      topic: "",
      content: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nie mozna nie mieć imienia."),
      email: Yup.string()
        .email("To ma być e-mail?")
        .required("Nie będziemy wiedzieli gdzie wysłać odpowiedź!"),
      topic: Yup.string()
        .max(160, "Ej, spróbuj się zmieścić w tych 160.")
        .required("W jakiej sprawie?"),
      content: Yup.string().required("W jakiej sprawie?"),
    }),
    onSubmit: values => {
      setFormState(FORM_STATES.LOADING);
      ajax(
        "POST",
        "https://formspree.io/mpzydeay", // TEST URL
        // "https://formspree.io/meqrgwjk", // PRODUCTION URL
        values,
        () => setFormState(FORM_STATES.SUCCESS),
        () => setFormState(FORM_STATES.ERROR)
      );
    },
  });

  const resetForm = () => {
    form.handleReset();
    setFormState(FORM_STATES.READY);
  };

  const renderForm = setContactOpen => {
    if (formState === FORM_STATES.LOADING) {
      return (
        <P.LoaderWrapper>
          <Loader loading={true} color={colors.turquoise} />
        </P.LoaderWrapper>
      );
    }
    if (formState === FORM_STATES.READY || formState === FORM_STATES.ERROR) {
      return (
        <ContactForm form={form} hasError={formState === FORM_STATES.ERROR} />
      );
    }

    if (formState === FORM_STATES.SUCCESS) {
      return (
        <div>
          <h1>Poszło!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <P.SuccessButton
            onClick={() => {
              setContactOpen(false);
              resetForm();
            }}
          >
            Wracam na stronę
          </P.SuccessButton>
        </div>
      );
    }
  };

  return (
    <Portal>
      <ContactContext.Consumer>
        {({ isContactOpen, setContactOpen }) => (
          <P.Wrapper isOpen={isContactOpen}>
            <P.CloseButton
              isOpen={isContactOpen}
              onClick={() => {
                setContactOpen(false);
                resetForm();
              }}
            />
            <P.Header isOpen={isContactOpen}>
              <div>
                <h2>Skontaktuj się z nami!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <P.SocialIconsWrapper>
                <P.ContactSocialLink
                  url="https://www.instagram.com/de_pe_zet/"
                  title="Instagram: Dobra Praktyka Żeglarska"
                  icon={instagramIcon}
                />
                <P.ContactSocialLink
                  url="https://m.me/dobrapraktykazeglarska"
                  title="Messenger: Dobra Praktyka Żeglarska"
                  icon={messengerIcon}
                />
              </P.SocialIconsWrapper>
            </P.Header>
            <P.Content isOpen={isContactOpen}>
              {renderForm(setContactOpen)}
            </P.Content>
          </P.Wrapper>
        )}
      </ContactContext.Consumer>
    </Portal>
  );
};

export default Contact;
