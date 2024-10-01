import useData from "./useData";
import { Genra } from "./useGenras";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenra: Genra | null) =>
  useData<Game>("/games", { params: { genres: selectedGenra?.id } }, [
    selectedGenra?.id,
  ]);

export default useGames;
