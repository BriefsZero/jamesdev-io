import React, { Component } from 'react';
import { animateScroll as scroll } from "react-scroll";
import data from '../yourdata';
class Navbar extends Component {
    state = {}
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (<nav>
            <ul>
                {data.social.map((link, index) => (
                    <li key={index}><a
                        className='link' target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                ))}
            </ul>
        </nav>);
    }
}

export default Navbar;