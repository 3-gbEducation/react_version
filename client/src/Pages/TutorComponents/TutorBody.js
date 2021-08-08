import TutorMenu from "./TutorMenu";

export default function TutorBody(props){
    return(
        <div>
            <TutorMenu />
            {props.category}
        </div>
    )
}