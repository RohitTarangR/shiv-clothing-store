import React from 'react'

export default function AboutContent() {
  return (
    <>
    <section id="page-header" className="about-header">

        <h2>#KnowUs</h2>

        <p>know about  us and look that how can we grow up with you all !</p>

    </section>

    <section id="about-head" className="section-p1">
        <img src="/img/about/a6.jpg" alt="" />
        <div>
            <h2>Who we are ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ut repellendus voluptatem eligendi commodi esse quaerat perspiciatis itaque, atque aperiam numquam temporibus ratione asperiores consectetur accusamus adipisci exercitationem sint tempora voluptas magni, possimus corrupti? Ipsum, iusto sed! Commodi, saepe omnis culpa animi corrupti inventore facilis rem explicabo excepturi doloremque recusandae odit distinctio reiciendis provident error tempore sed. Autem fuga soluta, laborum quibusdam hic minima aliquam alias itaque, cum totam obcaecati eligendi enim ex a, accusantium provident odio voluptatum? Sed, atque qui perspiciatis, nemo quo exercitationem facilis impedit doloremque, libero tempore eius. Et excepturi maiores, dolore accusantium voluptates at asperiores recusandae?</p>


            <abbr title="">Create stunning images with as little control as you like thanks to a choice of basic and Creative modes.</abbr>

            <br /><br />

            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images with as little control as you like thanks to a choice of basic and Creative modes.</marquee>
        </div>
    </section>

    <section id="about-app" className="section-p1">
        <h1>Download Our <a href="#">App</a></h1>
        <div className="video">
            <video autoplay muted loop src="/img/about/1.mp4"></video>
        </div>
    </section>

    <section id="feature" className="section-p1">
        <div className="fe-box">
            <img src="/img/features/Free shipping.gif" />
            <h6>Free Shipping</h6>
        </div>
    
        <div className="fe-box">
            <img src="/img/features/Order ahead.gif" />
            <h6>Online Order</h6>
        </div>
    
        <div className="fe-box">
            <img src="/img/features/Savings Money.gif" />
            <h6>Save Money</h6>
        </div>
    
        <div className="fe-box">
            <img src="/img/features/Promotion.gif" />
            <h6>Promotions</h6>
        </div>
    
        <div className="fe-box">
            <img src="/img/features/Happ sell.gif" />
            <h6>Happy Sell</h6>
        </div>
    
        <div className="fe-box">
            <img src="/img/features/Service 24_7.gif" />
            <h6>F24/7 Support</h6>
        </div>
    
    </section>
    </>
  )
}
