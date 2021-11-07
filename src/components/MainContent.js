import React from "react";
import './Maincontent.css';

class MainContent extends React.Component {

    /**
 * Documentaion for state data
 * alt: alt information for img tag data
 * @type {string}
 * src: src information for img tag data
 * @type {string} 
 *
 */


    state = {
        alt: 'SideHustle Logo',
        src: 'https://internship.sidehustle.ng/img/logo-dark.64d45129.png'
    }

    handleChange = (e) =>  {

        /**
 * Documentaion for a string
 * myData: holds information on the value of the innerHtml of the search input field 
 * @type {string}
 */

        let myData = e.target.value;
        this.setState({
            alt: e.target.value,
            src:''
        })
        if (!myData) {
            this.setState({
                alt: 'SideHustle Logo',
                src: 'https://internship.sidehustle.ng/img/logo-dark.64d45129.png'

            })
        }
    }

    render() {
        return (
            <div className='maincontent'>
                <img className='logo' alt={this.state.alt} src={this.state.src} ></img>
                <form>
                    <input className='searchinput' type='text' size='75' placeholder='Search' onChange={e => this.handleChange(e)}></input>
                    <div className='fieldbuttons'>
                        <input className='searchbutton' type='submit' value='Google Search' data-ved="0ahUKEwj4_7Li5ob0AhWJLJQKHXGTCewQ4dUDCAo"></input>
                        <input className='searchbutton' type='submit' value="I'm Feeling Lucky" jsaction="trigger.kWlxhc" data-ved="0ahUKEwj4_7Li5ob0AhWJLJQKHXGTCewQ19QECAs"></input>
                    </div>
                </form>
                <div className='languages-bar'>
                    <p>Google offered in: 
                        <a href="https://www.google.com/setprefs?sig=0_vzgeQUJc3HdsrH3etJUNWViX_qg%3D&amp;hl=ig&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj4_7Li5ob0AhWJLJQKHXGTCewQ2ZgBCA4">Igbo</a>
                        <a href="https://www.google.com/setprefs?sig=0_vzgeQUJc3HdsrH3etJUNWViX_qg%3D&amp;hl=yo&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj4_7Li5ob0AhWJLJQKHXGTCewQ2ZgBCA8">Èdè Yorùbá</a>
                        <a href="https://www.google.com/setprefs?sig=0_vzgeQUJc3HdsrH3etJUNWViX_qg%3D&amp;hl=ha&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj4_7Li5ob0AhWJLJQKHXGTCewQ2ZgBCA0">Hausa</a>
                        <a href="https://www.google.com/setprefs?sig=0_vzgeQUJc3HdsrH3etJUNWViX_qg%3D&amp;hl=pcm&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj4_7Li5ob0AhWJLJQKHXGTCewQ2ZgBCBA">Nigerian Pidgin</a>
                    </p>
                    
                </div>
                
            </div>
        )
    }
    
    
}

export default MainContent;

