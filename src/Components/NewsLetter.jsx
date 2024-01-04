import React from 'react'

export default function NewsLetter() {
  return (
    <>
        <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
            <h4>Sign up for Newsletters</h4>
            <p>Get e-mail updates about our latest shop and <span>special offers</span>.</p>
        </div>
        <div className="form">
            <input type="email" name="email-add" id="email" placeholder="Your email address" />
            <button className="normal">Sign Up</button>
        </div>
    </section>
    </>
  )
}
