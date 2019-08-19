import React from 'react';

import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

import './style.css';

const ImageResults = props => (

    <div className="imageResults">

        <Row className="justify-content-md-center">
        <Col md="auto">
        <h2 className='playerName'>{props.name}</h2>
        <div><Image src={props.playerImage} className="image" fluid style={{}}/></div>
        <h2 className='playerTeam'>{props.team}</h2>
        </Col>

        <div className="basic" style={{textAlign:'center'}}>
            <div className="basicInfo">
            </div>
        </div>
        </Row>

    </div>
)

export default ImageResults;