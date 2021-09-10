import React, { useEffect, useState } from 'react'
import { Label, Segment, Transition } from 'semantic-ui-react'

const listItemLUStyle = {
    margin: '2% auto',
    padding : '2%'
}

const labelStyle = {
    backgroundColor : '#ff6e65',
    color : '#fff',
    marginRight : '10px'
}

function ListItemLU(props){
    const[visible,setVisible] = useState(false);
    useEffect(()=>{
        setVisible(true)
    },[])
    return(
        <React.Fragment>
            <Transition.Group animation='scale' duration={(props.d)*500 + 500}>
                {visible && (
                    <Segment style={listItemLUStyle}>
                    <h4>{props.props.title}</h4>
                    <br />
                    {(props.props.categories?.length > 0 ) && props.props.categories.map((i,item)=>{
                        return(
                            <Label tag key={props.props._id} style={labelStyle}>{props.props.categories[item]}</Label>
                        )
                    })}
                </Segment>
                )}
            </Transition.Group>
        </React.Fragment>
    )
}

export default ListItemLU;