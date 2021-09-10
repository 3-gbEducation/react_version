import { useState } from 'react'
import { Button, Divider, Grid, Icon, List, Modal, Table } from 'semantic-ui-react'

const divStyle = {
    border: '3px #e4e4e4 solid',
    padding: '5px',
    backgroundColor: '--var(primary-color)'
}


export default function TutorCard(props) {
    const [open, setOpen] = useState(false)
    console.log(props.props.daysOfAvailability.monday);
    return (
        < div >
            <div style={divStyle} >
                <Grid stackable>
                    <Grid.Column width={16} textAlign='center'>
                        <img src={props.props.image} width='190px' height='190px' style={{ borderRadius: '50%', padding: "3%" }} alt={props.props.name}></img>
                        <h4>{props.props.name}</h4>
                        <p style={{ height: "50px", verticalAlign: "center" }}>{props.details.subjects.join(", ")}</p>
                        <Divider horizontal>Bio</Divider>
                        <p style={{ padding: "3%", height: "260px" }}>{props.props.shortBio ? props.props.shortBio : "Hello"}</p>
                        <Divider />
                        <Modal
                            centered
                            size='fullscreen'
                            style={{ height: "fit-content", alignSelf: 'center', margin: "2% 2.5%" }}
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            open={open}
                            trigger={
                                <Button size='large' animated fluid style={{ backgroundColor: "#ff6e65", color: '#fff', margin: '5% 0%' }} >
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
                            <Modal.Header style={{ backgroundColor: "#0c4972", color: '#fff' }}>
                                {props.props.name}
                            </Modal.Header>
                            <Modal.Content>
                                <Grid stackable container textAlign='center'>
                                    <Grid.Row stretched centered >

                                        <Grid.Column width={3} textAlign='center'>
                                            <img src={props.props.image} width='170px' height='170px' style={{ borderRadius: '50%', marginRight: "auto", marginLeft: 'auto', padding: '2%' }} alt='some placeholder'></img>
                                            <p>{props.details.subjects.join(", ")}</p>
                                        </Grid.Column>
                                        <Grid.Column width={7} >
                                            <List size='huge' >
                                                <List.Item>
                                                    <List.Icon name='currency' />
                                                    {props.details.pricingFixed === true ? <List.Content>₹{props.details.minPricingPerHour} per hour </List.Content> : <List.Content>₹{props.details.minPricingPerHour} - ₹{props.details.maxPricingPerHour} per hour</List.Content>}
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name='language' />
                                                    <List.Content>
                                                        {props.props.knows.join(", ")}
                                                    </List.Content>
                                                </List.Item>

                                            </List>
                                            <Divider horizontal content='Availability' />
                                            <Grid columns={2}>
                                                <Grid.Column>
                                                    <Table celled>
                                                        <Table.Header>
                                                            <Table.Row>
                                                                <Table.HeaderCell>Name</Table.HeaderCell>
                                                                {/* <Table.HeaderCell>Status</Table.HeaderCell> */}
                                                                {/* <Table.HeaderCell>Notes</Table.HeaderCell> */}
                                                            </Table.Row>
                                                        </Table.Header>
                                                        <Table.Body>
                                                        
                                                        </Table.Body>
                                                    </Table>
                                                </Grid.Column>
                                                <Grid.Column>
                                                    <Table celled>

                                                    </Table>
                                                </Grid.Column>
                                            </Grid>
                                        </Grid.Column>
                                        <Grid.Column width={6}>
                                            <Icon name='quote left' size='large' style={{ color: "#ff6e65" }} />

                                            {/* <br /> */}
                                            <p>{props.props.longBio ? props.props.longBio : "Hello"}</p>
                                            {/* <br /> */}
                                            <p><Icon name='quote right' size='large' style={{ float: 'right', color: "#ff6e65" }} /></p>
                                        </Grid.Column>

                                    </Grid.Row>
                                </Grid>
                            </Modal.Content>
                            <Modal.Actions>
                                (Click outside to close)
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
