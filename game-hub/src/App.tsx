import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenraList from "./components/GenraList";
import { useState } from "react";
import { Genra } from "./hooks/useGenras";

const App = () => {
  const[selectedGenra, setSelectedGenra]=useState<Genra | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenraList selectedGenre={selectedGenra} onSelectedGenra={(genra) => setSelectedGenra(genra)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenra={selectedGenra} />
      </GridItem>
    </Grid>
  );
};

export default App;
