import axios from "axios";
import { useEffect } from "react";
import TutorMenu from "./TutorMenu";

export default function TutorBody(props){

    useEffect(()=>{
        axios.get('/tutorslist')
    })


    return(
        <div>
            <TutorMenu item={props.category} />
            {props.category}
        </div>
    )
}