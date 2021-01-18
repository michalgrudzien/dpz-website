import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { graphql, useStaticQuery } from "gatsby";
import get from "lodash.get";

import Loader from "react-spinners/PropagateLoader";

import Portal from "components/Portal";
import { ContactContext } from "components/PageLayout";
import ajax from "helpers/ajax";
import colors from "utils/colors";

import instagramIcon from "assets/images/instagram_w.svg";
import messengerIcon from "assets/images/messenger_w.svg";

import ContactForm from "./ContactForm";
import * as P from "./partials";
import BlockContent from "components/BlockContent";

const FORM_STATES = {
  READY: "formState/ready",
  LOADING: "formState/loading",
  SUCCESS: "formState/success",
  ERROR: "formState/error",
};

const Contact = () => {
  const [formState, setFormState] = useState(FORM_STATES.ERROR);
  const response = useStaticQuery(graphql`
    query ContactQuery {
      allSanityContact {
        nodes {
          title
          _rawBody
          consent
          successMessage
          errorMessage
        }
      }
    }
  `);

  const data = get(response, "allSanityContact.nodes[0]", {});

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
        `https://formspree.io/${process.env.GATSBY_FORMSPREE_FORM_ID}`,
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
        <ContactForm
          form={form}
          hasError={formState === FORM_STATES.ERROR}
          errorMessage={data.errorMessage}
          consent={data.consent}
          setContactOpen={setContactOpen}
          resetForm={resetForm}
        />
      );
    }

    if (formState === FORM_STATES.SUCCESS) {
      return (
        <div>
          <h1>Poszło!</h1>
          <p>{data.successMessage}</p>
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
      <div>
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
                  <h2>{data.title}</h2>
                  <BlockContent blocks={data._rawBody} />
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
      </div>
    </Portal>
  );
};

export default Contact;
