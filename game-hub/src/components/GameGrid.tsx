import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <img src={game.background_image} alt={game.name} />
            <h2>{game.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
