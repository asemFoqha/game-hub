import { GameQuery } from "../App";
import useData from "./useData";

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

const useGames = (filters: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: filters.genre?.id,
        platforms: filters.platform?.id,
        ordering: filters.ordering,
        search: filters.search,
      },
    },
    [filters]
  );
export default useGames;
