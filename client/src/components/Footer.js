import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../style/footer.css";

const Footer = () => {
  return (

      <div className="footer-copyright text-center py-3">
        <h5>Product Service: 1-800-555-5623 | support@guestrevpro.com</h5>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://guestrevpro.herokuapp.com/"> GuestRevPro </a>
        </MDBContainer>
      </div>
   
  );
}

export default Footer;