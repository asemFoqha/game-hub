import useGenere from "../hooks/useGenere";

const GenreList = () => {
  const { generes, error, isLoading } = useGenere();
  return (
    <ul>
      {generes?.map((genere) => (
        <li key={genere.id}>{genere.name}</li>
      ))}
    </ul>
  );
};
export default GenreList;
