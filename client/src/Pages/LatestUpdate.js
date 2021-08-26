import React, { useEffect, useState } from 'react'
import { Container, Divider, Header, Icon } from 'semantic-ui-react'
import ListItemLU from './LatestUpdates/ListItemLU'
import axios from 'axios'
import LoadingComponent from './Loading';

var updates;

const LatestUpdate = () => {
    document.title = "3-GB | Updates"
    const [loading, setloading] = useState(true);
    useEffect(() => {
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
    }, [])
    if (loading) {
        return (
            <LoadingComponent />
        )
    }
    else {
        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='newspaper outline' circular />
                    <Header.Content>
                        {/* <Divider horizontal content='Latest Updates' /> */}
                        Latest Updates from 3-GB
                    </Header.Content>
                </Header>
                <section>
                    <Container padded raised style={{ marginBottom: '15%' }}>
                        {(updates?.length > 0) && Object.keys(updates).map((i) => {
                            return (
                                <div key={updates[i]._id}>
                                    <ListItemLU props={updates[i]} d={i} />
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
