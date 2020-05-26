import React from 'react'

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
                    <a href="https://www.facebook.com/" target="_blank"><img src="../src/img/facebook_icon.svg" alt="facebook_icon"/></a>    
                      <a href="https://www.facebook.com/" target="_blank"><img src="../src/img/insta_icon.svg" alt="insta_icon"/></a>
                       <a href="https://www.linkedin.com/" target="_blank"> <img src="../src/img/linkdin_icon.png" alt="linkdin_icon"/></a>
                        <a href="https://www.google.com" target="_blank"> <img src="../src/img/google_icon.png" alt="google_icon"/></a>
                        </div>
                   </div>
                </div>
            </footer>
        )
    }
}

export default Footer;