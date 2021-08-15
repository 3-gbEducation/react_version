import TutorCard from "./Card";
import { Grid } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingComponent from "../Loading";
var teamData;

export default function Page(){
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
        var config = {
            method: 'get',
            url: '../data/tm/list',
          };
      
          axios(config)
            .then(function (response) {
              teamData = (response.data.data);
              console.log(teamData);
              setLoading(false)
            })
            .catch(function (error) {
              console.log(error);
            });
      
    })
    if(loading){
        return(
            <LoadingComponent />
        )
    }
    else {
        return(
            <div style={{padding: '3%'}}>
                <Grid stackable container columns={2} centered >
                {(teamData?.length > 0 ) && Object.keys(teamData).map((i)=>{
                    return(
                        <Grid.Column key={i} computer={5} mobile={16}>
                            <TutorCard props={teamData[i]} />
                        </Grid.Column>
                    )
                })
                }
                </Grid>
            </div>
        )
    }
}