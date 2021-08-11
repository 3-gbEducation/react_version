import {Button, Divider, Grid, Icon} from 'semantic-ui-react'

export default function TutorCard(props){
    
    return(
        <div>
            <Grid>
                <Grid.Row>
                    
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    <Grid.Column width={8} centered textAlign='center'>
                        <h4>Name</h4>
                        <p>Subjecs</p>
                    </Grid.Column>
                </Grid.Row>
                <Divider />
                <Grid.Row>
                    Bio
                </Grid.Row>
                <Grid.Row>
                    <Button animated fluid primary>
                        <Button.Content visible>
                            <Icon name='arrow right' />
                        </Button.Content>
                        <Button.Content hidden>
                            More Details
                        </Button.Content>
                    </Button>
                </Grid.Row>
            </Grid>
        </div>
    )
}