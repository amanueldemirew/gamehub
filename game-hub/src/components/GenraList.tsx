import useGenras from "../hooks/useGenras";

const GenraList = () => {
  const { data } = useGenras();
  return (
    <ul>
      {data.map((genra) => (
        <li key={genra.id}>{genra.name}</li>
      ))}
    </ul>
  );
};

export default GenraList;
