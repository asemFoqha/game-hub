import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenere";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
}

function App() {
  const [filters, setFilters] = useState<GameQuery>({} as GameQuery);

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
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setFilters({ ...filters, genre })}
            selectedGenre={filters.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack paddingLeft={2} spacing={5} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={filters.platform}
            onSelectPlatform={(platform) =>
              setFilters({ ...filters, platform })
            }
          />
          <SortSelector
            selectedSort={filters.ordering}
            onSort={(ordering) => setFilters({ ...filters, ordering })}
          />
        </HStack>
        <GameGrid filters={filters} />
      </GridItem>
    </Grid>
  );
}

export default App;
