import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {}
    render() {
        return (<div>
            <Fade bottom cascade>
                <div className='contact-content'>
                    <h1>
                        Let’s create your next<br></br>
                        <span className='amazing-color'>experience together</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                </div>
            </Fade>
        </div>);
    }
}

export default Contact;