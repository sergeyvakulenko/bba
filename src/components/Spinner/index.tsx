import { Spin } from "antd";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = () => (
  <Container>
    <Spin size="large" />
  </Container>
);

export { Spinner };
