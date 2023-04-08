
//---------footer part-----------//
import '../App.css';
import "../Style/footer.css"

const Lowest=()=>{
    return(
      <div className='lowest'>
        <h2>FOOD_VILLA</h2>
        <h2>© 2023 Swiggy</h2>
        <div className='social-media'>
        <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    )
  }
  const Footer=()=>{
    return (
      <div className='footer'>
  
      <div className='footer-1'>
      <div className='company'>
          <h3>COMPANY</h3>
          <ul>
            <li>About us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Swiggy Blog</li>
            <li>Bug Bounty</li>
            <li>Swiggy One</li>
            <li>Swiggy Corporate</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Genie</li>
          </ul>
          </div>
          
  
          <div className='contact'>
          <h3>CONTACT</h3>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
          </div>
  
          <div className='legal'>
          <h3>LEGAL</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Offer Terms</li>
            <li>Phishing & Fraud</li>
            <li>Corporate – Swiggy Money Codes Terms and Conditions</li>
            <li>Corporate - Swiggy Discount Voucher Terms and Conditions</li>
          </ul>
          </div>
  
      </div>
       
          <div className='footer-2'>
            <Lowest/>
          </div>
  
        </div>
    )
    
}

export default Footer;
