import React from 'react';

/* Library for making API calls to Ball dont Lie API and Contextual Web*/
import axios from 'axios';

/* Importing Sub-components*/
import StatResults from './StatResults';
import ImageResults from './ImageResults';

/* React-bootstrap librart components*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

/* Logo*/
import logo from './style/images/nbasl.png';
import landing from './style/images/landing.png';

/* External stylesheet*/
import './style.css';

class MainApi extends React.Component {
    state = {

        searchPlayer: "",
        imageCard: "",

        player: "",
        playerPosition: "",
        playerHeight: "",
        playerTeam: "",

        season: "",
        mins: "",
        gamesPlayed: "",

        points: "",
        rebounds: "",
        assists: "",

        blocks: "",
        steals: "",
        turnovers: "",

        ftA: "",
        ftM: "",
        ftPcnt: "",

        fgA: "",
        fgM: "",
        fgPcnt: "",

        fg3A: "",
        fg3M: "",
        fg3Pcnt: "",

        displayStats: false,
        displayImage: false,
        displayBasic: false,

        displayWelcome: true
    }

    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.searchPlayer);

        this.setState({
            displayStats: true,
            displayImage: true
        })

        let playerNameSearch = this.state.searchPlayer;
        let apiUrl = " https://www.balldontlie.io/api/v1/players?search=" + playerNameSearch;

        /* API get req to Ball don't lie for NBA player data for current season*/
        axios.get(apiUrl).then(
            data => {
                console.log(data)

                let playerId = data.data.data[0].id;
                let pPosition = data.data.data[0].position
                let pFullName = data.data.data[0].first_name + " " + data.data.data[0].last_name;
                let pHeight = data.data.data[0].height_feet + " " + data.data.data[0].height_inches;
                let pTeam = data.data.data[0].team.full_name
                console.log(`player name: ${pFullName}, position: ${pPosition}, player height: ${pHeight}, player team: ${pTeam}`);

                let apiUrl2 = " https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=" + playerId;
                axios.get(apiUrl2).then(
                    data => {
                        console.log(data.data.data[0]);

                        let s = data.data.data[0].season
                        let gameplayed = data.data.data[0].games_played;
                        let avgmin = data.data.data[0].min
                        console.log(`season: ${s}, games played: ${gameplayed}, average minutes: ${avgmin}`)

                        let pts = data.data.data[0].pts
                        let reb = data.data.data[0].reb
                        let ast = data.data.data[0].ast
                        console.log(`average points: ${pts}, average rebounds: ${reb}, average assists: ${ast}`)

                        let stl = data.data.data[0].stl
                        let blk = data.data.data[0].blk
                        let to = data.data.data[0].turnover
                        console.log(`average steals: ${stl}, average blocks: ${blk}, average turnovers: ${to}`)

                        let fta = data.data.data[0].fta
                        let ftm = data.data.data[0].ftm
                        let ftprcnt = data.data.data[0].ft_pct
                        console.log(`freethrow attempts: ${fta}, freethrows made: ${ftm}, freethrow average: ${ftprcnt} `)

                        let fga = data.data.data[0].fga
                        let fgm = data.data.data[0].fgm
                        let fgprcnt = data.data.data[0].fg_pct
                        console.log(`feildgoal attempts: ${fga}, feildgoals made: ${fgm}, fieldgoal average: ${fgprcnt} `)

                        let fg3a = data.data.data[0].fg3a
                        let fg3m = data.data.data[0].fg3m
                        let fg3prcnt = data.data.data[0].fg3_pct
                        console.log(`3 point attempts: ${fg3a}, 3 pointers made: ${fg3m}, 3 pointer average: ${fg3prcnt}`)

                        this.setState({
                            season: s,
                            mins: avgmin,
                            gamesPlayed: gameplayed,

                            points: pts,
                            rebounds: reb,
                            assists: ast,

                            blocks: blk,
                            steals: stl,
                            turnovers: to,

                            ftA: fta,
                            ftM: ftm,
                            ftPcnt: ftprcnt,

                            fgA: fga,
                            fgM: fgm,
                            fgPcnt: fgprcnt,

                            fg3A: fg3a,
                            fg3M: fg3m,
                            fg3Pcnt: fg3prcnt
                        });
                    }
                )

                this.setState({
                    player: pFullName,
                    playerPosition: pPosition,
                    playerHeight: pHeight,
                    playerTeam: pTeam,
                });
            });

        let imgURL = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=" + playerNameSearch + "&safeSearch=false"
        let header = {
            headers: {
                "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                "X-RapidAPI-Key": process.env.REACT_APP_CONTEXTWEB_KEY
            }
        }

        /* Second API call to contextual web for Image Results*/
        axios.get(imgURL, header).then(
            data => {
                console.log(data)
                console.log(data.data.value[0].url)

                let image = data.data.value[0].url;

                this.setState({
                    imageCard: image,
                    displayWelcome: false
                });
            }
        );

    };

    render() {

        return (
            <div>

                <div>
                    <Navbar expand='lg' style={{ backgroundColor: '', marginTop: '0px' }}>
                        <Navbar.Brand style={{ margin: '0px' }}><Image fluid src={logo} alt="NBA Stats" className="logo" style={{ margin: '0px', backgroundColor: '', height: '130px' }} />
                        </Navbar.Brand>
                        <Form inline onSubmit={this.handleSubmit} style={{ marginBottom: '10px' }}>
                            <Form.Control placeholder='Player Name' type="text" name='searchPlayer' className='playForm' value={this.state.searchPlayer} onChange={this.handleChange} />
                            <Button type="submit" value="Submit" className='sub'>Submit</Button>
                        </Form>
                    </Navbar>
                </div>

                <Container className='headerBg'>

                    <Row className="justify-content-md-center">

                        <div>
                            {this.state.displayWelcome ?
                            <div>
                                <img src = {landing} style={{height:'300px', width:'300px'}}/>
                                <h1>Weclome to NBA Stats</h1>
                            </div>
                                : null}
                        </div>

                        <div>
                            {this.state.displayImage ?
                                <ImageResults
                                    playerImage={this.state.imageCard}
                                    name={this.state.player}
                                    height={this.state.playerHeight}
                                    position={this.state.playerPosition}
                                    team={this.state.playerTeam}
                                /> : null
                            }
                        </div>

                        <div className="data">
                            {this.state.displayStats ?
                                <StatResults
                                    points={this.state.points}
                                    rebounds={this.state.rebounds}
                                    assists={this.state.assists}

                                    steals={this.state.steals}
                                    blocks={this.state.blocks}
                                    turnovers={this.state.turnovers}

                                    freethrowAttempt={this.state.ftA}
                                    freethrowMade={this.state.ftM}
                                    freethrowPrcnt={this.state.ftPcnt}

                                    fgAttempts={this.state.fgA}
                                    fgMade={this.state.fgM}
                                    fgPcnt={this.state.fgPrcnt}

                                    fg3attempts={this.state.fg3A}
                                    fg3made={this.state.fg3M}
                                    fg3prcnt={this.state.fg3Pcnt}
                                /> : null
                            }
                        </div>
                    </Row>

                    <Row className="justify-content-md-center">
                        <footer className='footer'> Ian kimble &copy; 2019</footer>
                    </Row>

                </Container>

            </div >
        )
    }
}

export default MainApi;