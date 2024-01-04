import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="section-p1">
        <div className="col">
            <img className="logo" src="./img/logo1.png" alt="" width="120px" />
            <h4>Contact us</h4>
            <p><strong>Address : </strong> FF-1/FF-1A , Kuber palms, Mahavir turning, Ankleshwar, Gujarat 393001</p>
            <p><strong>Phone : </strong> (+91) 84699 21576</p>
            <p><strong>Hours : </strong> 10:00 AM - 10:00 PM, Mon - Sat</p>
            <div className="follow">
                <h4>Follow us</h4>
            </div>
            <div className="icon">
                <a href="https://www.facebook.com/alkesh.gohil.353"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/_shivmobile_and_mens_wear_/"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-pinterest"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
        </div>
    
        <div className="col">
            <h4>About</h4>
            <a href="about.html">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="contact.html">Contact Us</a>
        </div>
        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="cart.html">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>
    
        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <a
                    href="https://www.apple.com/in/?afid=p238%7CsdUuvv563-dc_mtid_187079nc38483_pcrid_649848520513_pgrid_109516736379_pntwk_g_pchan__pexid__&cid=aos-IN-kwgo-brand--slid---product-"><img
                        src="./img/pay/app.jpg" alt="appstore" width="150px" /></a>
                <a
                    href="https://play.google.com/store/games?utm_source=apac_med&utm_medium=hasem&utm_content=Oct0121&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700065205026415_creativeid_535350509927_device_c&gclsrc=ds&pli=1"><img
                        src="./img/pay/play.jpg" alt="playstore" width="150px" /></a>
            </div>
            <p>Secured Payment Gateways</p>
            <img src="./img/pay/pay.png" alt="" />
        </div>
    
    
    
        <div className="copyright">
            <hr /><br /><br />
            <p>&copy; 2023 | Website Designed and Made Rohit Tarang</p>
        </div>
    
    </footer>
    </>
  )
}
