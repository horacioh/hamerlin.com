import { useState } from 'react'
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Formik, Form, Field } from "formik"
import { Button } from "./Button"
import { createLead, contactForm } from '../graphql/mutations'
import { API, graphqlOperation } from "aws-amplify"

function Label({ name }) {
  function getlabel(name) {
    switch (name) {
      case "fullname":
        return "Nombre completo"
      case "email":
        return "correo electrónico"
      case "phone":
        return "teléfono o celular:"
      case "service":
        return "Qué tipo de servicio necesitas?"
      case "comment":
        return "Tienes algún comentario que agregar?"
      default:
        return name
    }
  }

  return (
    <label
      htmlFor={name}
      sx={{
        color: "primary",
        fontSize: [2, 2],
        mb: 2,
        fontWeight: "body",
        fontFamily: "body",
        display: "inline-block",
      }}
    >
      {getlabel(name)}
    </label>
  )
}

function FieldWrapper(props) {
  return <div sx={{ width: "100%", position: "relative", mb: 3 }} {...props} />
}

function ErrorMessage({ children }) {
  return (
    <div
      sx={{
        width: "100%",
        py: 2,
        px: 3,
        borderRadius: 1,
        bg: "#f8d7da",
        borderColor: "#f5c6cb",
        my: 1,
      }}
    >
      <Styled.p sx={{ color: "#721c24", fontSize: [0, 0] }}>
        {children}
      </Styled.p>
    </div>
  )
}

function InputField({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  return (
    <FieldWrapper>
      <Label name={field.name} />
      <input
        sx={{
          display: "block",
          fontSize: 3,
          width: "100%",
          py: 10,
          px: 3,
          border: "1px solid #9E9F9E",
          borderRadius: 1,
        }}
        type="text"
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <ErrorMessage>{errors[field.name]}</ErrorMessage>
      )}
    </FieldWrapper>
  )
}

function Select(props) {
  return (
    <select
      {...props}
      sx={{
        display: "block",
        fontSize: 3,
        fontFamily: "body",
        lineHeight: "body",
        width: "100%",
        maxWidth: "100%",
        m: 0,
        py: 2,
        px: 3,
        borderRadius: 1,
        border: "1px solid #9E9F9E",
        appearance: "none",
        bg: "white",
        //TODO: cambiar imagen a el color correcto
        backgroundImage:
          "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')",
        backgroundRepeat: "no-repeat, repeat",
        backgroundPosition: "right .7em top 50%, 0 0",
        backgroundSize: ".65em auto, 100%",
        "::-ms-expand": {
          display: "none",
        },
        "::hover": {
          borderColor: "#888",
        },
        "::focus": {
          borderolor: "#aaa",
          boxShadow: "0 0 1px 3px rgba(59, 153, 252, .7)",
          // boxShadow: "0 0 0 3px -moz-mac-focusring",
          color: "#222",
          outline: "none",
        },
        option: {
          fontWeight: "normal",
        },
      }}
    />
  )
}

function SelectField({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  return (
    <FieldWrapper>
      <Label name={field.name} />
      <Select {...field} {...props}>
        <option value="--">Selecciona uno</option>
        <option value="RESIDENCIAL">Residencial</option>
        <option value="COMERCIAL">Comercial</option>
        <option value="INDUSTRIAL">Industrial</option>
      </Select>
      {touched[field.name] && errors[field.name] && (
        <ErrorMessage>{errors[field.name]}</ErrorMessage>
      )}
    </FieldWrapper>
  )
}

function TextAreaField({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  return (
    <FieldWrapper>
      <Label name={field.name} />
      <textarea
        {...field}
        {...props}
        sx={{
          display: "block",
          fontSize: 3,
          width: "100%",
          maxWidth: "100%",
          minHeight: 176,
          py: 2,
          px: 3,
          border: "1px solid #9E9F9E",
          borderRadius: 1,
        }}
      ></textarea>
      {touched[field.name] && errors[field.name] && (
        <ErrorMessage>{errors[field.name]}</ErrorMessage>
      )}
    </FieldWrapper>
  )
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  async function handleSubmit(values, { setSubmitting }) {
    setSubmitted(true);
    await API.graphql(graphqlOperation(createLead, { input: values }));
    await API.graphql(graphqlOperation(contactForm, { input: values }));
    setSubmitting(false)
  }
  return (
    <div
      sx={{
        borderRadius: 16,
        width: "100%",
        boxShadow: "0 0 40px 0 rgba(0,0,0,0.05)",
        bg: "white",
        p: 40,
      }}
    >
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          phone: "",
          serviceType: null,
          comment: "",
        }}
        validate={values => {
          let errors = {}
          if (!values.email) {
            errors.email = "Campo Requerido"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email invalido"
          }
          return errors
        }}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form sx={{ width: "100%" }}>
            <Field name="fullname" component={InputField} />
            <Field name="email" type="email" component={InputField} />
            <Field name="phone" type="phone" component={InputField} />
            <Field component={SelectField} name="serviceType" />
            <Field name="comment" component={TextAreaField} />
            {submitted ? (
              <Styled.p sx={{color: 'primary', py: 1, px: 2, borderRadius: 3, fontSize: [2, 2]}}>Gracias por contactarnos!</Styled.p>
            ) : (
              <Button variant="solid" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}
