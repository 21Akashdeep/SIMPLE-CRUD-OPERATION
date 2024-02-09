import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import cricket from './Image/cricket.jpg'
import basketbal from './Image/basketbal.jpg'
import swimming from './Image/swimming.jpg'
import './Image.css'
import Navi from './Nav';

const Home = () => {
        return (
                <>
                        {/* <div >
                                <div style={{ backgroundColor: "red", display: 'flex', flexDirection: 'column' }} md={6}>
                                        yg
                                </div>
                                <div style={{ backgroundColor: "green" }} md={6}>
                                        bh
                                </div>
                                <div style={{ backgroundColor: "yellow" }}>
                                        ygyg
                                </div>
                        </div> */}
                        <Navi />

                        <div className='design'>
                                <div style={{ fontSize: "50px" }}>Sports</div>
                                <div className='column a'><img src={cricket} style={{ borderRadius: "20px" }} width="400px" ></img>
                                </div>
                                <div className='column a'><img src={basketbal} style={{ borderRadius: "20px" }} width="400px" height="265px"></img></div>
                                <div className='column a'><img src={swimming} style={{ borderRadius: "20px" }} width="400px"></img></div>
                                

                        </div>
                </>
        )
}

export default Home
