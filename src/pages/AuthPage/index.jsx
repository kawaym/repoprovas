import { Button } from "@mui/material";

import SignUpForm from "../../components/signup/SignUpForm";
import { Container, Divisor, VerticalLine, Title } from "./styles";
import Logo from "../../assets/images/Logo.png";
import SignInForm from "../../components/signin/SignInForm";

export default function AuthPage({ type }) {
  return (
    <Container>
      <img src={Logo} alt="Logotipo do site" />
      <Title>{type === "cadastro" ? "Cadastro" : "Login"}</Title>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#424445" }}
        fullWidth={true}
        onClick={() => alert("Funcionalidade ainda em construção")}
      >
        ENTRAR COM O GITHUB
      </Button>
      <Divisor>
        <VerticalLine />
        <span>ou</span>
        <VerticalLine />
      </Divisor>
      {type === "cadastro" ? <SignUpForm /> : <SignInForm />}
    </Container>
  );
}
