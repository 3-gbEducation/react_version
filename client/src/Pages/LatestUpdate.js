import React, { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react'
import ListItemLU from './LatestUpdates/ListItemLU'
import axios from 'axios'
import LoadingComponent from './Loading';

var updates;

const LatestUpdate = () => {
    document.title ="3-GB | Updates"
    const [loading, setloading] = useState(true);
    useEffect(()=>{
        var config = {
            method: 'get',
            url: '../data/updts/latest',
          };
      
          axios(config)
            .then(function (response) {
              updates = (response.data.data);
              // console.log(tutorData);
              setloading(false);
      
            })
            .catch(function (error) {
              console.log(error);
            });
    },[])
    if(loading){
        return(
            <LoadingComponent />
        )
    }
    else{
        return (
            <div>
                <h1>Latest Update page </h1>
                <section>
                    <Container padded raised style={{marginBottom : '15%'}}>
                    {(updates?.length > 0) && Object.keys(updates).map((i)=>{
                        return(
                            <div key={updates[i]._id}>
                                <ListItemLU props={updates[i]} d={i}/>
                            </div>
                        )
                    })}
                    </Container>
                </section>
            </div>
        )
    }
}

export default LatestUpdate
