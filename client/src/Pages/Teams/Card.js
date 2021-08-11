import { Divider, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const cardStyle = {
    padding: '10px 5px',
    border: '1px solid black',
}


const imageStyle = { marginBottom: '-50%', borderRadius: '50%',  }

const topPart = {
    margin: '4px 9px',
    
}

export default function TutorCard(props) {
    return (
        <div style={cardStyle}>
            <Grid centered>
                <Grid.Row centered style={topPart}>
                    <Grid.Column width={10} centered>
                        {props.img ?
                            <img src={props.img} height='135px' alt='photograph' style={imageStyle} /> :
                            <img height='135px' src='https://i.ibb.co/Z1G0vP1/armchair-brownleather.jpg' alt='photograph' style={imageStyle} />}
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row centered style={{ marginTop: '20%' }}>
                    <Grid.Column width={16} style={{ textAlign: 'center' }}>
                        <h3>{props.name}</h3>
                        <p >{props.position}</p>
                    </Grid.Column>
                </Grid.Row>
                <Divider />
                <Grid.Row centered>
                    <Grid.Column width={4}>
                        {props.linkedin ?
                            <a href={`https://www.linkedin.com/in/${props.linkedin}`}>
                                <Icon name='linkedin' size='large' link />
                            </a> :
                            <Link to='/'>
                                <Icon name='linkedin' size='large' link />
                            </Link>}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        {props.github ?
                            <a href={`https://github.com/${props.github}`}>
                                <Icon name='github' size='large' link />
                            </a> :
                            <Link to='/'>
                                <Icon name='github' size='large' link />
                            </Link>}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        {props.mail ?
                            <a href={`mailto:${props.mail}`}>
                                <Icon name='mail' size='large' />
                            </a>
                            :
                            <Link to='/'>
                                <Icon name='mail' size='large' />
                            </Link>}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}