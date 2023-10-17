import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <div>{error}</div>}
      <div>
        <ul>
          {games?.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default GameGrid;
