import { useEffect, useReducer, useState } from 'react'
import { Button, Divider, Grid, Icon, List, Modal, Transition } from 'semantic-ui-react'

const divStyle = {
    border: '3px #e4e4e4 solid',
    padding: '5px'
    // backgroundColor: '#e7e7e7'
}


export default function TutorCard(props) {
    const [open, setOpen] = useState(false)

    return (
        < div >
        <div style={divStyle} >
            <Grid stackable>
                <Grid.Column width={16} textAlign='center'>
                    <img src={props.props.image} width='190px' height='190px' style={{ borderRadius: '50%', marginRight: "auto", marginLeft: 'auto' }} alt='some placeholder'></img>
                    <h4>{props.props.name}</h4>
                    <p>{props.details.subjects.join(", ")}</p>
                    <Divider horizontal>Bio</Divider>
                    <p></p>
                    <Divider />
                    <Modal
                        centered
                        style={{ height: "fit-content", alignSelf: 'center' }}
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={
                            <Button size='large' animated fluid style={{ backgroundColor: "#0c4972", color: '#fff', margin: '5% 0%' }} >
                                <Button.Content visible>
                                    <Icon name='arrow right' />
                                </Button.Content>
                                <Button.Content hidden>
                                    More Details
                                </Button.Content>
                            </Button>
                        }
                        dimmer='blurring'
                    >
                        <Modal.Header style={{ backgroundColor: "#0c4972", color: '#fff'}}>
                            {props.props.name}
                        </Modal.Header>
                        <Modal.Content>
                            <Grid stackable container textAlign='center'>
                                <Grid.Row stretched centered >

                                    <Grid.Column width={4} textAlign='center'>
                                        <img src={props.props.image} width='170px' height='170px' style={{ borderRadius: '50%', marginRight: "auto", marginLeft: 'auto',padding:'2%' }} alt='some placeholder'></img>
                                        <p>{props.details.subjects.join(", ")}</p>
                                    </Grid.Column>
                                    <Grid.Column width={7}>
                                        <List size='large'>
                                            <List.Item>
                                                <List.Icon name='currency' />
                                                    {props.details.pricingFixed === true ? <List.Content>₹{props.details.minPricingPerHour} per hour </List.Content> : <List.Content>₹{props.details.minPricingPerHour} - ₹{props.details.maxPricingPerHour} per hour</List.Content>}
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='language' />
                                                 <List.Content>
                                                 { props.props.knows.join(", ")}
                                                 </List.Content>
                                            </List.Item>
                                            
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Icon name='quote left' />
                                        <p>Hello</p>
                                        <br />
                                        <Icon name='quote right' style={{ float: 'right' }} />
                                    </Grid.Column>
                                    
                                </Grid.Row>
                            </Grid>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button negative onClick={() => setOpen(false)}>
                                Close
                            </Button>
                        </Modal.Actions>
                    </Modal>

                </Grid.Column>
            </Grid>

        </div>

        </div >

        // )
        // }
        // </Transition>
    )
}
