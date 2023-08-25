
export default function MiniCart({handleCart}) {
    return (
        <>
            <div className="mini_cart_togglers fixed_cart" onClick={handleCart}>
                <div className="mini-cart-count">
                    0
                </div>
                <i className="icon-shopping-cart" />
            </div>

        </>
    )
}
