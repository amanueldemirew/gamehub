import React from "react";
import useGenras from "../hooks/useGenras";

const GenraList = () => {
  const { genras } = useGenras();
  return (
    <ul>
      {genras.map((genra) => (
        <li key={genra.id}>{genra.name}</li>
      ))}
    </ul>
  );
};

export default GenraList;
