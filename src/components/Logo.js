import React from "react";

class Logo extends React.Component {
    
    state = {
        myData: "<img className='logo' alt='SideHustle Logo' src='https://internship.sidehustle.ng/img/logo-dark.64d45129.png'></img>"
    }

    render() {
        return (
            <div>{this.state.myData}</div>
        )
    }

    
}

export default Logo;