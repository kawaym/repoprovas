import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 600px;

  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    align-self: center;
    justify-self: flex-start;

    margin-bottom: 50px;
  }
`;

export const Divisor = styled.div`
  width: 100%;
  height: 25px;
  display: flex;

  align-items: center;

  span {
    margin: 0 15px;
  }
`;

export const VerticalLine = styled.div`
  width: 100%;
  height: 1px;

  background-color: #e5e5e5;
`;
export const Title = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;

  color: rgba(0, 0, 0, 0.8);

  margin-bottom: 30px;
`;
