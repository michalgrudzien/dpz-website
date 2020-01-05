import React from "react";
import { Title, Subtitle, ContentText } from "shared/Typography";
import CircleItem from "shared/CircleItem";
import Card from "shared/Card";
import * as P from "./parts";

const InfoSection = () => {
  return (
    <P.Wrapper>
      <Subtitle>Stowarzyszenie</Subtitle>
      <Title> Dobra Praktyka Żeglarska</Title>
      <CircleItem number={26}>
        członków
      </CircleItem>
      <Card>
        <ContentText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ea facere porro sit voluptatem.
          Architecto culpa nesciunt odio voluptatem voluptates. Accusamus adipisci aut culpa doloribus incidunt minus
          quidem tempore voluptatem.
        </ContentText>
      </Card>
    </P.Wrapper>
  );
};

export default InfoSection;