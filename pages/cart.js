import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Cart() {
    return (
        <>
            <Layout breadcrumbTitle="Cart">
                <div className="woocommerce">
                    <div className="auto-container">
                        <div className="row default_row">
                            <div className="full_width_box">
                                {/*===============spacing==============*/}
                                <div className="pd_top_90" />
                                {/*===============spacing==============*/}
                                <form className="woocommerce-cart-form" action="cart" method="post">
                                    <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellSpacing={0}>
                                        <thead>
                                            <tr>
                                                <th className="product-remove"><span className="screen-reader-text">Remove item</span></th>
                                                <th className="product-thumbnail"><span className="screen-reader-text">Thumbnail image</span></th>
                                                <th className="product-name">Product</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="woocommerce-cart-form__cart-item cart_item">
                                                <td className="product-remove">
                                                    <Link href="#" className="remove" aria-label="Remove this item" data-product_id={2650} data-product_sku>×</Link>
                                                </td>
                                                <td className="product-thumbnail">
                                                    <Link href="shop-details"><img width={300} height={300} src="/assets/images/product-2-min.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="img" /></Link>
                                                </td>
                                                <td className="product-name" data-title="Product">
                                                    <Link href="shop-details">Esssays Change You Think</Link>
                                                </td>
                                                <td className="product-price" data-title="Price">
                                                    <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>30.00</bdi></span>
                                                </td>
                                                <td className="product-quantity" data-title="Quantity">
                                                    <QuantityInput />
                                                </td>
                                                <td className="product-subtotal" data-title="Subtotal">
                                                    <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>30.00</bdi></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={6} className="actions">
                                                    <div className="coupon">
                                                        <label htmlFor="coupon_code">Coupon:</label> <input type="text" name="coupon_code" className="input-text" id="coupon_code" placeholder="Coupon code" /> <button type="submit" className="button wp-element-button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                                                    </div>
                                                    <button type="submit" className="button wp-element-button" name="update_cart" value="Update cart" disabled aria-disabled="true">Update cart</button>
                                                    <input type="hidden" id="woocommerce-cart-nonce" name="woocommerce-cart-nonce" defaultValue="1e38484bb8" /><input type="hidden" name="_wp_http_referer" defaultValue="/wp/creote/v-new/cart/" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                                <div className="cart-collaterals">
                                    <div className="cart_totals ">
                                        <h2>Cart totals</h2>
                                        <table cellSpacing={0} className="shop_table shop_table_responsive">
                                            <tbody>
                                                <tr className="cart-subtotal">
                                                    <th>Subtotal</th>
                                                    <td data-title="Subtotal"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>30.00</bdi></span></td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Total</th>
                                                    <td data-title="Total"><strong><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>30.00</bdi></span></strong> </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="wc-proceed-to-checkout">
                                            <Link href="checkout" className="checkout-button button">
                                            Proceed to checkout</Link>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="pd_bottom_90" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
                {/*-newsteller-*/}
                <section className="newsteller style_one bg_dark_1">
                    {/*===============spacing==============*/}
                    <div className="pd_top_40" />
                    {/*===============spacing==============*/}
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="content">
                                    <h2>Join Our Mailing List</h2>
                                    <p>For receiving our news and updates in your inbox directly. </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="item_scubscribe">
                                    <div className="input_group">
                                        <form className="mc4wp-form" method="post" data-name="Subscibe">
                                            <div className="mc4wp-form-fields">
                                                <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                <input type="submit" defaultValue="Sign up" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*===============spacing==============*/}
                    <div className="pd_bottom_40" />
                    {/*===============spacing==============*/}
                </section>
            </div>

        </Layout >
        </>
    )
}