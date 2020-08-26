import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
    state = {}

    render() {
        return (<div>
            <h1 class="heading-background">SOFTWARE</h1>
            <h1 class="heading-background" style={{
                top: "0.5em",
                left: "0.3em",
            }}>SECURITY</h1>
            <h1 class="heading-background" style={{
                top: "1.5em",
                left: "0.9em",
            }}>WEBSITE</h1>
            <h1 class="heading-background" style={{
                top: "2.5em",
                left: "1.8em",
            }}>DEV</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
                <p className='header-title'>
                    {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
                    {data.headerTagline[2]}
                    <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;