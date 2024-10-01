import useData from "./useData";

export interface Genra {
  id: number;
  name: string;
}



const useGenras = () => useData<Genra>('/genres');
export default useGenras;
