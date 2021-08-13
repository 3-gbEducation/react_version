<<<<<<< Updated upstream
import TutorMenu from "./TutorMenu";

export default function TutorBody(props){
    return(
        <div>
            <TutorMenu />
            {props.category}
=======
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import LoadingComponent from "../Loading";
import TutorCard from "./TutorCard";
import TutorMenu from "./TutorMenu";

var tutorData;

const gridStyle= {
  marginTop : '5%',
  // marginBottom : '10%'
}

export default function TutorBody(props) {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    var config = {
      method: 'get',
      url: '../data/ttrs/list',
    };

    axios(config)
      .then(function (response) {
        tutorData = (response.data.data);
        // console.log(tutorData);
        setloading(false);

      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])


  if (loading) {
    return (
      <div>
        <LoadingComponent />
      </div>
    )
  }
  else if (props.category === 'class 1 to 5') {
    // console.log(props.category);
    return (
      <div>
        <Container>
          <TutorMenu item={props.category} />
        </Container>
        <div>
          <Grid container style={gridStyle}>
            {(tutorData?.length > 0) && Object.keys(tutorData).filter(i => tutorData[i].Class1to5 === true).map((i) => {
              return (
                <Grid.Column key={i} mobile={16} computer={5} tablet={5}>
                  <TutorCard props={tutorData[i]} category={props.category} details={tutorData[i].Class1to5Details}/>
                </Grid.Column>
              )
            })

            }
          </Grid>

        </div>
      </div>

    )
  }
  else if (props.category === 'class 6 to 8') {
    // console.log(props.category);
    return (
      <div>
        <Container>
          <TutorMenu item={props.category} />
        </Container>

        <div>
          <Grid container style={gridStyle}>
            {(tutorData?.length > 0) && Object.keys(tutorData).filter(i => tutorData[i].Class6to8 === true).map((i) => {
              return (
                <Grid.Column key={i} mobile={16} computer={5} tablet={5}>
                  <TutorCard props={tutorData[i]} category={props.category} details={tutorData[i].Class6to8Details}/>
                </Grid.Column>
              )
            })

            }
          </Grid>

        </div>
      </div>
    )
  }
  else if (props.category === 'class 9 to 10') {
    // console.log(props.category);
    return (
      <div>
        <Container>
          <TutorMenu item={props.category} />
        </Container>

        <div>
          <Grid container style={gridStyle}>
            {(tutorData?.length > 0) && Object.keys(tutorData).filter(i => tutorData[i].Class9to10 === true).map((i) => {
              return (
                <Grid.Column key={i} mobile={16} computer={5} tablet={5}>
                  <TutorCard props={tutorData[i]} category={props.category} details={tutorData[i].Class9to10Details}/>
                </Grid.Column>
              )
            })

            }
          </Grid>

        </div>
      </div>
    )
  }
  else if (props.category === 'class 11 to 12') {
    // console.log(props.category);

    return (
      <div>
        <Container>
          <TutorMenu item={props.category} />
        </Container>
        <div>
          <Grid container style={gridStyle}>
            {(tutorData?.length > 0) && Object.keys(tutorData).filter(i => tutorData[i].Class11to12 === true).map((i) => {
              return (
                <Grid.Column key={i} mobile={16} computer={5} tablet={5}>
                  <TutorCard props={tutorData[i]} category={props.category} details={tutorData[i].Class11to12Details}/>
                </Grid.Column>
              )
            })

            }
          </Grid>

        </div>
      </div>
    )
  }
  else if (props.category === 'competitive') {

    // console.log(props.category);
    return (
      <div>
        <Container>
          <TutorMenu item={props.category} />
        </Container>
        <div>
          <Grid container style={gridStyle}>
            {(tutorData?.length > 0) && Object.keys(tutorData).filter(i => tutorData[i].competitive === true).map((i) => {
              return (
                <Grid.Column key={i} mobile={16} computer={5} tablet={5}>
                  <TutorCard props={tutorData[i]} category={props.category} details={tutorData[i].competitiveDetails}/>
                </Grid.Column>
              )
            })

            }
          </Grid>

        </div>
      </div>
    )
  }
  else if (props.category === 'iT') {

    // console.log(props.category);
    return (
      <div>
        <Container><TutorMenu item={props.category} />
        </Container>
        <div>
          <Grid container style={gridStyle}>
            {(tutorData?.length > 0) && Object.keys(tutorData).filter(i => tutorData[i].informationTechnology === true).map((i) => {
              return (
                <Grid.Column key={i} mobile={16} computer={5} tablet={5}>
                  <TutorCard props={tutorData[i]} category={props.category} details={tutorData[i].informationTechnologyDetails} />
                </Grid.Column>
              )
            })

            }
          </Grid>

        </div>
      </div>
    )
  }
  else if (props.category === 'languages') {

    // console.log(props.category);
    return (
      <div>
        <Container> <TutorMenu item={props.category} />
        </Container>
        <div>
          <Grid container style={gridStyle}>
            {(tutorData?.length > 0) && Object.keys(tutorData).filter(i => tutorData[i].languages === true).map((i) => {
              return (
                <Grid.Column key={i} mobile={16} computer={5} tablet={5}>
                  <TutorCard props={tutorData[i]} category={props.category} details={tutorData[i].languagesDetails}/>
                </Grid.Column>
              )
            })

            }
          </Grid>

>>>>>>> Stashed changes
        </div>
      </div>
    )
  }
}