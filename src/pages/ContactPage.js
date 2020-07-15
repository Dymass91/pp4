import React from 'react';


import '../styles/ContactPage.css';



class ContactPage extends React.Component {


    render() {
        return (
            <div className="Container_contact-form">
                <h1 className="page_h1 contact_h1">Contact</h1>
                <div className="Contact__Details">
                    <h4>Exquisite foods distributor limited</h4>
                    <br></br>
                    <h4> Company reg.12143850</h4>
                    <br></br>
                    <h4>  Mobile contact: <span>+44 7375081408</span></h4>
                    <br></br>
                    <h4>   Email: <a className="mailto-link" href="mailto:exquisitefoodsdist@gmail.com" target="_top">exquisitefoodsdist@gmail.com</a>
                    </h4>
                </div>

            </div>
        );
    }

}

export default ContactPage;