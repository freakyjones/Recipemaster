import React from 'react'
import Facebookicon from '../img/facebook_icon.svg'
import Instaicon from '../img/insta_icon.svg'
import Linkdinicon from '../img/linkdin_icon.png'
import Googleicon from '../img/google_icon.png'
class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <div className="footer_container">
                   <div className="footer_trade">
                      <div className="row new">
                           <p>about us</p>
                           <p>contact us</p>
                           <p>devloper</p>
                           <p>support</p>
                           <p>newsletter</p>
                      </div>
                      </div>
                      <div className="footer_icon">
                    <a href="https://www.facebook.com/" target="_blank"><img src={Facebookicon} alt="facebook_icon"/></a>    
                      <a href="https://www.facebook.com/" target="_blank"><img src={Instaicon} alt="insta_icon"/></a>
                       <a href="https://www.linkedin.com/" target="_blank"> <img src={Linkdinicon} alt="linkdin_icon"/></a>
                        <a href="https://www.google.com" target="_blank"> <img src={Googleicon} alt="google_icon"/></a>
                        </div>
                   </div>
                </div>
            </footer>
        )
    }
}

export default Footer;