import { TbAwardFilled } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";
import { AiFillDatabase } from "react-icons/ai";


const buttonsData = [
    { id: 1, link: '#', icon: <TbAwardFilled />, title: 'All', flag: "All" },
    { id: 2, link: '#about', icon: <GrProjects />, title: 'Frontend', flag: "frontend" },
    { id: 3, link: 'services', icon: <AiFillDatabase />, title: 'Backend', flag: "backend" },
    { id: 4, link: '#portfolio', icon: <TbAwardFilled />, title: 'Mulesoft', flag: "mulesoft" }
]

export default buttonsData;