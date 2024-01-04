import React from 'react'

export default function BlogContent() {
  return (
    <>
    <section id="page-header" className="blog-header">

        <h2>#readmore</h2>

        <p>Read all case studies about our products ! </p>

    </section>

    <section id="blog">

        <div className="blog-box">
            <div className="blog-img">
                <img src="/img/blog/b1.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>The Cotton-Jersey Zip-up Hoodies</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard</p>
                <a href="#">CONTINUE READING</a>
                <h1>13/01</h1>
            </div>
        </div>

        <div className="blog-box">
            <div className="blog-img">
                <img src="/img/blog/b2.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>How to style a quiff</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard</p>
                <a href="#">CONTINUE READING</a>
                <h1>13/04</h1>
            </div>
        </div>

        <div className="blog-box">
            <div className="blog-img">
                <img src="/img/blog/b3.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>Must-Have Skater Girl Items</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard</p>
                <a href="#">CONTINUE READING</a>
                <h1>12/01</h1>
            </div>
        </div>

        <div className="blog-box">
            <div className="blog-img">
                <img src="/img/blog/b4.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>Runway-Inspired Trends</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard</p>
                <a href="#">CONTINUE READING</a>
                <h1>16/01</h1>
            </div>
        </div>

        <div className="blog-box">
            <div className="blog-img">
                <img src="/img/blog/b6.jpg" alt="" />
            </div>
            <div className="blog-details">
                <h4>AW20 Men's wear Trends</h4>
                <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard</p>
                <a href="#">CONTINUE READING</a>
                <h1>10/03</h1>
            </div>
        </div>



    </section>


    <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><i className="fas fa-arrow-right"></i></a>

    </section>
    </>
  )
}
