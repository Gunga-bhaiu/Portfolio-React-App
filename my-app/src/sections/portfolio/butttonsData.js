import { TbAwardFilled } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";
import { AiFillDatabase } from "react-icons/ai";


const buttonsData = [
    {id:1, link: '#' , icon: <TbAwardFilled/> , title: 'All' , flag: false},
    {id:2, link: '#about' , icon: <GrProjects/> , title: 'Frontend' , flag: false},
    {id:3, link: 'services' ,  icon: <AiFillDatabase/> , title: 'Backend' , flag: false},
    {id:4, link: '#portfolio' ,  icon: <TbAwardFilled/> , title: 'Mulesoft' , flag: false}
]

export default buttonsData;