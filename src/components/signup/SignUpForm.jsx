import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { ButtonContainer, FormContainer } from "./styles";
import { api } from "../../services/api";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState({
    main: false,
    confirmation: false,
  });
  function handleVisibility(field, test) {
    if (field === "main") {
      setShowPassword({ ...showPassword, main: !showPassword.main });
    } else {
      setShowPassword({
        ...showPassword,
        confirmation: !showPassword.confirmation,
      });
    }
    console.log(JSON.stringify(test));
  }
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      email: Yup.string("Insira seu email")
        .email("Deve ser um e-mail válido")
        .required("Campo obrigatório"),
      password: Yup.string("Insira sua senha")
        .min(8, "Senha deve possuir 8 caracteres")
        .required("Campo obrigatório"),
      passwordConfirmation: Yup.string("Confirme sua senha")
        .min(8, "Senha deve possuir 8 caracteres")
        .required("Campo obrigatório")
        .oneOf([Yup.ref("password"), null], "Senhas não são iguais"),
    }),
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      try {
        await api.createUser({
          email: values.email,
          password: values.password,
        });
        formik.setSubmitting(false);
        formik.setValues({ email: "", password: "", passwordConfirmation: "" });
        navigate("/");
      } catch {
        alert("Falha no cadastro");
        formik.setSubmitting(false);
      }
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <TextField
        variant="outlined"
        label="Email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={Boolean(formik.errors.email) && formik.touched.email}
        helperText={formik.touched.email && formik.errors.email}
        disabled={formik.isSubmitting}
      />
      <TextField
        variant="outlined"
        label="Senha"
        name="password"
        type={showPassword.main ? "text" : "password"}
        onChange={formik.handleChange}
        value={formik.values.password}
        error={Boolean(formik.errors.password) && formik.touched.password}
        helperText={formik.touched.password && formik.errors.password}
        disabled={formik.isSubmitting}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              onClick={() => handleVisibility("main", formik.touched)}
            >
              <IconButton aria-label="toggle password visibility" edge="end">
                {showPassword.main ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        variant="outlined"
        label="Confirme sua senha"
        name="passwordConfirmation"
        type={showPassword.confirmation ? "text" : "password"}
        onChange={formik.handleChange}
        value={formik.values.passwordConfirmation}
        error={
          Boolean(formik.errors.passwordConfirmation) &&
          formik.touched.passwordConfirmation
        }
        helperText={
          formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation
        }
        disabled={formik.isSubmitting}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              onClick={() => handleVisibility("confirmation", formik.touched)}
            >
              <IconButton aria-label="toggle password visibility" edge="end">
                {showPassword.confirmation ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <ButtonContainer>
        <Button
          variant="text"
          type="button"
          sx={{ textDecoration: "underline" }}
          onClick={() => navigate("/")}
        >
          Já possuo cadastro
        </Button>
        <Button
          variant="contained"
          type="submit"
          disabled={formik.isSubmitting}
        >
          Cadastrar
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
}
