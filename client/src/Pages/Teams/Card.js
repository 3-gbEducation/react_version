import { Divider, Grid, Icon,Button } from 'semantic-ui-react'

const cardStyle = {
    padding: '10px 5px',
    border: '1px solid black',
}


const imageStyle = { 
    margin: '0%  auto', 
    borderRadius: '50%',  
}

const topPart = {
    margin: '4px 9px',
    
}

export default function TutorCard(props) {
    console.log(props);
    return (
        <div style={cardStyle}>
            <Grid centered>
                <Grid.Row centered style={topPart}>
                    <Grid.Column width={9}>
                        {props.props.imageUrl ?
                            <img src={props.props.imageUrl} height='150px' width='150px' alt='photograph' style={imageStyle} /> :
                            <img height='135px' src='https://i.ibb.co/Z1G0vP1/armchair-brownleather.jpg' alt='photograph' style={imageStyle} />}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row >
                    <Grid.Column width={16} style={{ textAlign: 'center' }}>
                        <h3>{props.props.name}</h3>
                        <p >{props.props.position}</p>
                    </Grid.Column>
                </Grid.Row>
                <Divider />
                <Grid.Row centered>
                    <Grid.Column width={4}>
                    <Button circular color='black' compact onClick={()=> window.open(`https://www.linkedin.com/in/${props.props.linkedinSlug}`, "_blank")}>
                       <Icon name='linkedin' size='large' fitted inverted />
                        </Button>
                        {/* {
                            <a href={`https://www.linkedin.com/in/${props.props.linkedinSlug}`}>
                                <Icon name='linkedin' size='large' link />
                            </a>} */}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button circular color='black' compact onClick={()=> window.open(`https://github.com/${props.props.githubSlug}`, "_blank")}>
                       <Icon name='github' size='large' fitted/>
                        </Button>
                            {/* <a href={`https://github.com/${props.props.githubSlug}`}>
                                <Icon name='github' size='large' link />
                            </a>  */}
                    </Grid.Column>
                    <Grid.Column width={4}>
                            {/* <a href={`mailto:${props.props.mail}`}>
                                <Icon name='mail' size='large' />
                            </a> */}
                            <Button circular color='black' compact onClick={()=> window.open(`mailto:${props.props.mail}`, "_blank")}>
                       <Icon name='mail' size='large' fitted/>
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}