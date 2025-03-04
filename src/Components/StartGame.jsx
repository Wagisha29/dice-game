import styled from "styled-components";
import { Button } from "../styled/button";

const StartGame = ({ toogle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dice" />
      </div>

      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toogle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1180px;
  height: 100vh;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
