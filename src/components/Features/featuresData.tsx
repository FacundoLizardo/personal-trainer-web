import { Feature } from "@/types/feature";
import { CgGym } from "react-icons/cg";
import { GiChickenLeg } from "react-icons/gi";
import { GiHealthNormal } from "react-icons/gi";
import { IoHomeSharp } from "react-icons/io5";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <CgGym className={"w-12 h-12"} />
    ),
    title: "Personal trainer",
    paragraph:
      "Entreno y me capacito desde los 15 años de edad. Ademas de trabajar en rubro desde los 18, ya sea en gimnasios o como personal trainer."
  },
  {
    id: 1,
    icon: (
      <GiChickenLeg className={"w-12 h-12"}/>
    ),
    title: "Nutricion",
    paragraph:
      "+3 años de educacion formal en el area de nutricion. Sin contar la formacion continua en el area."
  },
  {
    id: 1,
    icon: (
      <GiHealthNormal className={"w-12 h-12"}/>
    ),
    title: "Rehabilitacion de lesiones",
    paragraph:
      "La salud del entrenado es prioridad. La casa se construye desde los cimientos."
  },
];
export default featuresData;
