import React from 'react'

export default function SProductContent() {
  return (
    <>
    <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
            <img src="/img/products/f1.jpg" width="100%" id="MainImg" alt="" />

            <div className="small-img-group">

                <div className="small-img-col">
                    <img src="/img/products/f1.jpg" width="100%" className="small-img" alt="" />
                </div>

                <div className="small-img-col">
                    <img src="/img/products/f2.jpg" width="100%" className="small-img" alt="" />
                </div>

                <div className="small-img-col">
                    <img src="/img/products/f3.jpg" width="100%" className="small-img" alt="" />
                </div>

                <div className="small-img-col">
                    <img src="/img/products/f4.jpg" width="100%" className="small-img" alt="" />
                </div>

            </div>
        </div>

        <div className="single-pro-details">
            <h6>Home/T-shirt</h6>
            <h4>Men's Fashion T-shirt</h4>
            <h2> &#8377; 349.00</h2>

            <select name="size" id="size">

                <option value="s">Select Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">large</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
            </select>

            <input type="number" name="numofcontenty" id="numofcon" value="1" />

            <button className="normal">Add To cart</button>

            <h4>Product Details</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eaque quos architecto minima, sunt non doloribus maiores ad? Possimus iste animi ratione consequatur sit ullam, odio tenetur dolorum adipisci inventore, et illum sed est, beatae corrupti expedita dolore harum laudantium incidunt aperiam temporibus amet aut? Doloremque, modi quod. Aspernatur, dolorum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe officia eligendi quod dolore odit error iusto ipsam odio, blanditiis tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, cum!
            </p>
        </div>
    </section>
    </>
  )
}
