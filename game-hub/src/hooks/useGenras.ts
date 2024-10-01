import { param } from "framer-motion/client";
import useData from "./useData";

export interface Genra {
  id: number;
    name: string;
    image_background: string;
}



const useGenras = () => useData<Genra>('/genres');
export default useGenras;
