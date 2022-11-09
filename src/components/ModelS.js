import React from "react";
import Section from "./Section";

function ModelS() {
  document.title = "Model S | Tesla";
  return (
    <Container>
      <Section
        title="Model S"
        description="Plaid"
        backgroundImage="model-s.jpg"
        range="396mi"
        speed="1.99s"
        topspeed="200 mph"
        mph="1,020 hp"
      />
    </Container>
  );
}

export default ModelS;

const Container = styled.div`
  height: 100vh;
`;
