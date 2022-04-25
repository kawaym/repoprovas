import { Button, IconButton } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ButtonGroup, Header, MainContent, VerticalLine } from "./styles";
import Logo from "../../assets/images/Logo.png";
import InfoGroup from "../../components/infogroup/InfoGroup";
import SearchBar from "../../components/searchbar/SearchBar";
import UserContext from "../../contexts/userContext";
import { api } from "../../services/api";

export default function Dashboard() {
  const { target } = useParams();
  const navigate = useNavigate();

  const { userData, login } = useContext(UserContext);

  const test = {
    title: "10 periodo",
    content: [
      {
        title: "CSS",
        exams: [
          {
            title: "P1",
            date: "sexo",
          },
          {
            title: "P2",
            date: "sexo",
          },
          {
            title: "P3",
            date: "sexo",
          },
        ],
      },
      {
        title: "CSS",
        exams: [
          {
            title: "P1",
            date: "sexo",
          },
          {
            title: "P2",
            date: "sexo",
          },
          {
            title: "P3",
            date: "sexo",
          },
        ],
      },
      {
        title: "CSS",
        exams: [
          {
            title: "P1",
            date: "sexo",
          },
          {
            title: "P2",
            date: "sexo",
          },
          {
            title: "P3",
            date: "sexo",
          },
        ],
      },
      {
        title: "CSS",
        exams: [
          {
            title: "P1",
            date: "sexo",
          },
          {
            title: "P2",
            date: "sexo",
          },
          {
            title: "P3",
            date: "sexo",
          },
        ],
      },
      {
        title: "CSS",
        exams: [
          {
            title: "P1",
            date: "sexo",
          },
          {
            title: "P2",
            date: "sexo",
          },
          {
            title: "P3",
            date: "sexo",
          },
        ],
      },
    ],
  };

  async function handleLogout() {
    const { token } = userData;

    try {
      await api.logout(token);
      login({});
      navigate("/");
    } catch {
      alert("Erro");
    }
  }

  return (
    <>
      <Header>
        <div>
          <img src={Logo} alt="Logotipo do site" />
          <IconButton aria-label="logout">
            <Logout onClick={() => handleLogout()} />
          </IconButton>
        </div>
        <div>
          <SearchBar />
        </div>
      </Header>
      <VerticalLine />
      <MainContent>
        <ButtonGroup>
          <Button
            variant={target === "disciplines" ? "contained" : "outlined"}
            onClick={() => navigate("/dashboard/disciplines")}
          >
            DISCIPLINAS
          </Button>
          <Button
            variant={target === "instructors" ? "contained" : "outlined"}
            onClick={() => navigate("/dashboard/instructors")}
          >
            PESSOA INSTRUTORA
          </Button>
          <Button
            variant={target === "add" ? "contained" : "outlined"}
            onClick={() => navigate("/dashboard/add")}
          >
            ADICIONAR
          </Button>
        </ButtonGroup>
        <InfoGroup data={test}></InfoGroup>
      </MainContent>
    </>
  );
}
