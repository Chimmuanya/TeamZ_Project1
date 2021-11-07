import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='navbar'>
            <ul>
                <li><a href="https://mail.google.com/mail/&amp;ogbl" >Gmail</a></li>
                <li><a href="https://www.google.com.ng/imghp?hl=en&amp;ogbl">Images</a></li>
                <li><a href="https://www.google.com.ng/intl/en/about/products">Apps</a></li>
                <li className='signin-button'><a href="https://accounts.google.com/ServiceLogin?hl=en&amp;passive=true&amp;continue=https://www.google.com/webhp%3Fhl%3Den%26sa%3DX%26ved%3D0ahUKEwic2YW_5Yb0AhVDzBoKHYYJDWEQPAgI&amp;ec=GAZAmgQ">Sign In</a></li>
            </ul>
            
        </header>
    );

    }
export default Header;
