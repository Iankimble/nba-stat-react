import React from 'react';

import './style.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const StatResults = props => (


    <div className="resultsContainer">

        <Row>

            <Table responsive className='dataTable'>
                <tr className='mainRow'>
                    <th>Points</th>
                    <th>Rebounds</th>
                    <th>Assists</th>
                </tr>
                <tbody>
                    <tr className='subRow'>
                        <td> {props.points}</td>
                        <td>  {props.rebounds}</td>
                        <td> {props.assists}</td>
                    </tr>
                </tbody>

                <tr className='mainRow'>
                    <th>Steals</th>
                    <th>Blocks</th>
                    <th>Turn Overs</th>
                </tr>
                <tbody>
                    <tr className='subRow'>
                        <td> {props.steals}</td>
                        <td>  {props.blocks}</td>
                        <td> {props.turnovers}</td>
                    </tr>
                </tbody>

                <tr className='mainRow'>
                    <th>Freethrow Attempts</th>
                    <th>Freethrow Made</th>
                    <th>Freethrow %</th>
                </tr>
                <tbody>
                    <tr className='subRow'>
                        <td> {props.freethrowAttempt}</td>
                        <td> {props.freethrowMade}</td>
                        <td> {props.freethrowPrcnt}</td>
                    </tr>
                </tbody>

                <tr className='mainRow'>
                    <th>Fieldgoals Attempts</th>
                    <th>Fieldgoals Made</th>
                    <th>Fieldgoal %</th>
                </tr>
                <tbody>
                    <tr className='subRow'>
                        <td> {props.fgAttempts}</td>
                        <td> {props.fgMade}</td>
                        <td> {props.fgPrcnt}</td>
                    </tr>
                </tbody>

                <tr className='mainRow'>
                    <th> 3-point Attempts</th>
                    <th>3-pointers Mader</th>
                    <th>3-point %</th>
                </tr>
                <tbody>
                    <tr className='subRow'>
                        <td> {props.fg3attempts}</td>
                        <td> {props.fg3made}</td>
                        <td> {props.fg3prcnt}</td>
                    </tr>
                </tbody>

            </Table>

        </Row>

        <div>
            {props.season}
            {props.averageMins}
            {props.gamesPlayed}
        </div>

    </div>


);

export default StatResults;