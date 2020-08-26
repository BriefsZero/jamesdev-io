import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    constructor(props) {
        super(props);
        this.number = 0;
        this.listItems = data.abouttext.map((el) => <p key={this.number += 1}>{el}</p>);
    }
    state = {};
    render() {
        return (<div className='about'>
            <div className='about-content'>
                <h1><Fade bottom cascade>About.</Fade></h1>
                <Fade bottom>
                    {this.listItems}
                </Fade>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}


        </div>);
    }
}

export default About;