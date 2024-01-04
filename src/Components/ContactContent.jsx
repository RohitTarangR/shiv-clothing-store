import React from 'react'

export default function ContactContent() {
  return (
    <>
    <section id="page-header" className="about-header">

        <h2>#let's_talk</h2>

        <p>LEAVE A MESSAGE. We love to hear from you !</p>

    </section>

    <section id="contact-details" className="section-p1">
        <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency location or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i className="fas fa-map"></i>
                    <p>FF-1/FF-1A , Kuber palms, Mahavir turning, Ankleshwar, Gujarat 393001</p><br />
                </li>
                
                <li>
                    <i className="fas fa-envelope"></i>
                    <p>contact@example.com</p><br />
                </li>
                <li>
                    <i className="fas fa-phone-alt"></i>
                    <p>(+91) 8469921576</p><br />
                </li>
                <li>
                    <i className="fas fa-clock"></i>
                    <p>Monday to Saturday : 9:00 AM to 16:00 PM </p><br />
                </li>

            </div>
        </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.7739985827147!2d73.00482811532939!3d21.633728572224992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0212195622835%3A0x3f8a26796880278d!2sShiv%20Mobile%20%26%20Men&#39;s%20Wear!5e0!3m2!1sen!2sin!4v1678280973418!5m2!1sen!2sin"
                    width="800" height="470" style={{"border":0}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </section>

    <section id="form-details">
        <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" name="yname" id="yname" placeholder="Enter Your Name" />
            <input type="email" name="ymail" id="ymail" placeholder="Your E-mail ID" />
            <input type="text" name="subject" id="subject" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="3" placeholder="Your Message"></textarea>

            <button className="normal">Submit</button>


        </form>

        <div className="people">

            <div>
                <img src="./img/people/22.jpg" alt="" />
                <p><span>Alkesh Gohil</span>Business Man<br /> Phone : (+91) 84699 21576<br /> Email : alkeshgohil@gmail.com</p>
            </div>

            <div>
                <img src="./img/people/33.jpg" alt="" />
                <p><span>Bhavesh Gohil</span>Bank Manager<br /> Phone : (+91) 92271 43007<br /> Email : bhaveshgohil@gmail.com</p>
            </div>

            <div>
                <img src="./img/people/11.jpg" alt="" />
                <p><span>Happy arnab</span>Software Engineer<br /> Phone : (+91) 87455 25221<br /> Email : happyarnab@gmail.com</p>
            </div>

        </div>
    </section>
    </>
  )
}
