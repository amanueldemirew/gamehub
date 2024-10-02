import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genra?.name || ""
  } Games`;
  return <Heading marginY={5} fontSize={'5xl'} as="h1">{heading}</Heading>;
};

export default GameHeading;
