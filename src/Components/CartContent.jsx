import React from 'react'

export default function CartContent() {
  return (
    <>
    <section id="page-header" className="about-header">

        <h2>#KnowUs</h2>

        <p>know about us and look that how can we grow up with you all !</p>

    </section>

    <div id="cart" className="section-p1">
        <table width="100%">
            <thead>
            <tr>
                <td>Remove</td>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
            </tr>    
            </thead>

            <tbody>
            <tr id="cartItem">
                <td><a href="#"><i className="fas fa-times-circle"></i></a></td>
                <td><img src="/img/products/f1.jpg" alt="" /></td>
                <td>Cartoon Astronaut T-shirts</td>
                <td>&#8377; 399</td>
                <td><input type="number" name="" id="" value="1" /></td>
                <td>&#8377; 399</td>
            </tr>
            <tr id="cartItem">
                <td><a href="#"><i className="fas fa-times-circle"></i></a></td>
                <td><img src="/img/products/f2.jpg" alt="" /></td>
                <td>Cartoon Astronaut T-shirts</td>
                <td>&#8377; 399</td>
                <td><input type="number" name="" id="" value="1" /></td>
                <td>&#8377; 399</td>
            </tr>
            <tr id="cartItem">
                <td><a href="#"><i className="fas fa-times-circle"></i></a></td>
                <td><img src="/img/products/f4.jpg" alt="" /></td>
                <td>Cartoon Astronaut T-shirts</td>
                <td>&#8377; 399</td>
                <td><input type="number" name="" id="" value="1" /></td>
                <td>&#8377; 399</td>
            </tr>
            </tbody>
        </table>
    </div>

    <div id="cart-add" className="section-p1">
        <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" name="" id=""  placeholder="Enter Your Coupon Code" />
                <button className="normal">Apply</button>
            </div>
        </div>

        <div id="subtotal">
            <h3>Card Subtotal</h3>
            <table>
                <tr>
                    <td>Card Subtotal</td>
                    <td>&#8377; 399</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td style={{fontWeight:'bold'}}>Total</td>
                    <td style={{fontWeight:'bold'}}>&#8377; 1197</td>
                </tr>
            </table>
            <button className="normal">Proceed to checkout</button>
        </div>
    </div>

    <hr color="#e1e1e1" /><br /><br /><br />
    </>
  )
}
