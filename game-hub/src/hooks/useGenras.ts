import genra from "../data/genra";

export interface Genra {
  id: number;
  name: string;
  image_background: string;
}

const useGenras = () => ({ data: genra, isloading: false, error: null });
export default useGenras;
