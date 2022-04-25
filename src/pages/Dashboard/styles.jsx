import styled from "styled-components";
import { TextField } from "@mui/material";

export const Header = styled.div`
  width: 100vw;
  height: 20vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  div:first-child {
    width: 80%;
    height: 75%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div:last-child {
    width: 80%;
    height: 25%;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
      width: 60%;
      border: 1px solid rgba(0, 0, 0, 0.23);
      box-sizing: border-box;
      border-radius: 4px;

      ::placeholder {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        /* identical to box height, or 150% */
        display: flex;
        align-items: center;
        letter-spacing: 0.15px;

        /* Light/Text/Secondary */
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;
export const VerticalLine = styled.div`
  width: 100%;
  height: 1px;

  background-color: #c4c4c4;

  margin-top: 25px;
`;

export const MainContent = styled.main`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  width: 60%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
