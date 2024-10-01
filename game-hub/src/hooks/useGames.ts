import useData from "./useData";
import { Genra } from "./useGenras";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenra: Genra | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenra?.id,
        platform: selectedPlatform?.id,
      },
    },
    [selectedGenra?.id, selectedPlatform?.id]
  );

export default useGames;
