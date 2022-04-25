import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { useState, useContext, useEffect } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { ButtonContainer, FormContainer } from "./styles";
import { api } from "../../services/api";
import UserContext from "../../contexts/userContext";

export default function SignInForm() {
  const { userData, login } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState({
    main: false,
  });
  function handleVisibility(field) {
    if (field === "main") {
      setShowPassword({ ...showPassword, main: !showPassword.main });
    }
  }
  const navigate = useNavigate();

  useEffect(() => {
    if (userData && userData.token) {
      const promise = api.validateSession(userData.token);
      promise.then(() => navigate("/dashboard/disciplines"));
      promise.catch(() => {
        login({});
        navigate("/");
      });
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string("Insira seu email")
        .email("Deve ser um e-mail válido")
        .required("Campo obrigatório"),
      password: Yup.string("Insira sua senha")
        .min(8, "Senha deve possuir 8 caracteres")
        .required("Campo obrigatório"),
    }),
    onSubmit: async (values) => {
      formik.setSubmitting(true);
      try {
        const token = await api.login({
          email: values.email,
          password: values.password,
        });
        login({ token });
        formik.setSubmitting(false);
        formik.setValues({ email: "", password: "" });
        navigate("/mainpage");
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
      <ButtonContainer>
        <Button
          variant="text"
          type="button"
          sx={{ textDecoration: "underline" }}
          onClick={() => navigate("/signup")}
        >
          Não possuo cadastro
        </Button>
        <Button
          variant="contained"
          type="submit"
          disabled={formik.isSubmitting}
        >
          Entrar
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
}
