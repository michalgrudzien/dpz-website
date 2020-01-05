import React from "react";
import { Subtitle, ContentText } from "shared/Typography";
import CircleItem from "shared/CircleItem";
import * as A from "assets/images";
import * as P from "./parts";
import { resolutions } from "./data";

const resultionsArr = resolutions.map((item, i) => (
  <P.ListItem key={i}>
    <P.StyledLink to={item.link}>
      <P.Icon src={item.icon} />
      <P.Title>{item.name}</P.Title>
    </P.StyledLink>
  </P.ListItem>
));

const StatuteSection = () => {
  return (
    <P.Wrapper>
      <Subtitle white>
        Statut
      </Subtitle>
      <ContentText white>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ea facere porro sit voluptatem.
        Architecto culpa nesciunt odio voluptatem voluptates. Accusamus adipisci aut culpa doloribus incidunt minus
        quidem tempore voluptatem.
      </ContentText>
      <CircleItem icon={A.Logo}>
        Statut Stowarzyszenia
      </CircleItem>
      <Subtitle white>
        Podjęte uchwały
      </Subtitle>
      <P.List>
        {resultionsArr}
      </P.List>
    </P.Wrapper>
  );
};

export default StatuteSection;