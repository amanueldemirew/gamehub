import { GameQuery } from "../App";
import useData from "./useData";
import { Genra } from "./useGenras";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genra?.id,
        platform: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        selech: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
