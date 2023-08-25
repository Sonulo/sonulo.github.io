
export default function SidebarCart({handleCart}) {
    return (
        <>
            <div className="side_bar_cart" id="mini_cart">
                <div className="cart_overlay" onClick={handleCart} />
                <div className="cart_right_conten">
                    <div className="close" onClick={handleCart}>
                        <div className="close_btn_mini"><i className="icon-close" /></div>
                    </div>
                    <div className="cart_content_box">
                        <div className="contnet_cart_box">
                            <div className="widget_shopping_cart_content">
                                <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
