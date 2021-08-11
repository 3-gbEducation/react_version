import axios from "axios";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import TutorCard from "./TutorCard";
import TutorMenu from "./TutorMenu";

export default function TutorBody(props){
    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'localhost:5000/backend/data/list',
          };
          
          axios(config)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          
    },[])


    return(
        <div>
            <TutorMenu item={props.category} />
            {props.category}
            <Grid container>
                <Grid.Column width={3}>
                <TutorCard />
                </Grid.Column>
            </Grid>
        </div>
    )
}