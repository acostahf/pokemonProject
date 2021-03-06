import * as React from "react";
import { Button, Card, Title, Paragraph } from "react-native-paper";

const Pokecard = () => (
  <Card>
    <Card.Content>
      <Title>Charizard</Title>
      <Paragraph>PSA 10</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
  </Card>
);

export default Pokecard;
