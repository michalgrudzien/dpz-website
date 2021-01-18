import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";

import TextField from "./TextField";
import TextareaField from "./TextareaField";
import { SubmitButton, AgreementText, ErrorText } from "./partials";
import { Link } from "gatsby";

const ContactForm = ({
  form: formik,
  hasError,
  errorMessage,
  consent,
  setContactOpen,
  resetForm,
}) => (
  <form onSubmit={formik.handleSubmit} method="POST" data-netlify="true">
    <Container fluid>
      <Row>
        <Col md={6}>
          <TextField
            type="text"
            name="name"
            label="Imię i nazwisko"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            touched={formik.touched.name}
            error={formik.errors.name}
          />
        </Col>
        <Col md={6}>
          <TextField
            type="text"
            name="email"
            label="Adres e-mail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
        </Col>
        <Col>
          <TextField
            type="text"
            name="topic"
            label="Temat wiadomości (do 160 znaków)"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.topic}
            touched={formik.touched.topic}
            error={formik.errors.topic}
          />
        </Col>
        <Col>
          <TextareaField
            name="content"
            label="Treść wiadomości"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
            touched={formik.touched.content}
            error={formik.errors.content}
          />
        </Col>
        <Col md={8}>
          <AgreementText>
            {consent}{" "}
            <Link
              to="/trudne-sprawy"
              onClick={() => {
                setContactOpen(false);
              }}
            >
              Dowiedz się więcej
            </Link>
          </AgreementText>
        </Col>
        <Col md={4}>
          <SubmitButton disabled={!formik.isValid} type="submit">
            Wyślij wiadomość
          </SubmitButton>
        </Col>
        {hasError && (
          <Col>
            <ErrorText>{errorMessage}</ErrorText>
          </Col>
        )}
      </Row>
    </Container>
  </form>
);

export default ContactForm;
