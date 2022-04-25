import { Button, IconButton } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";

import { ButtonGroup, Header, MainContent, VerticalLine } from "./styles";
import Logo from "../../assets/images/Logo.png";
import InfoGroup from "../../components/infogroup/InfoGroup";
import SearchBar from "../../components/searchbar/SearchBar";

export default function Dashboard() {
  const { target } = useParams();
  const navigate = useNavigate();

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

  return (
    <>
      <Header>
        <div>
          <img src={Logo} alt="Logotipo do site" />
          <IconButton aria-label="logout">
            <Logout />
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
