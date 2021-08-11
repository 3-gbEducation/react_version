import TutorCard from "./Card";
import { Grid } from "semantic-ui-react";


export default function Page(){
    return(
        <div style={{padding: '3%'}}>
            <Grid stackable container columns='equal' >
            <Grid.Row centered>
            <Grid.Column computer={4} tablet={4} mobile={8} >
            <TutorCard name='Pradeepa Seelam' mail='pradeepa.seelam@gmail.com' linkedin='pseelam' github='pradeepa45' position='Lead Web Developer' />
            </Grid.Column>
            
            <Grid.Column computer={4} tablet={4} mobile={8} >
            <TutorCard name='Akhil SV' linkedin='akhilsv' mail='akhilsvbhat@gmail.com'  github='Akhilsv' position='Web Developer Intern' img='https://i.ibb.co/GHjr2kd/akhil.jpg' />
            </Grid.Column>

            <Grid.Column computer={4} tablet={4} mobile={8} >
            <TutorCard name='Raunak Shaw' linkedin='raunak-shaw-744408192' github='raunakshaw07' mail='raunak.shawprl@gmail.com' position='Web Developer Intern' img='https://i.ibb.co/PNWb8kV/raunak.jpg' />
            </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
            <Grid.Column computer={4} tablet={4} mobile={8} >
            <TutorCard name='Rahul Garg' linkedin='' mail='' github='' position='Web Developer Intern'/>
            </Grid.Column>
            <Grid.Column computer={4} tablet={4} mobile={8} >
            <TutorCard name='Kanika Agarwal' linkedin='' mail='' github='' position='Web Developer Intern'/>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        </div>
    )
}