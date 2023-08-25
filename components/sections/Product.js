


import Isotope from "isotope-layout";
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
export default function Product() {
    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid_show_case", {
                itemSelector: ".grid_box",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid_box",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        }, 1000);
    }, []);
    return (
        <>
            <section className="product-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="auto-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">
                                        Best Selling Products
                                    </div>
                                    <h2 className="title"> Let the Adventure Begin.</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="pd_top_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product_shop_section four_column product_wrapper_grid style_three">
                                <div className="grid_show_case grid_layout clearfix">
                                    <div className="project-wrapper grid_box product">
                                        <div className="product_box type_three">
                                            <div className="inner_box">
                                                <span className="onsale">Sale!</span>
                                                <div className="image_box">
                                                    <img src="/assets/images/shop/shop-1.jpg" className="img-fluid" alt="img" />
                                                    <div className="cart_btn">
                                                        <Link href="/shop" className="button add_to_cart_button">Add to Cart</Link >
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h2><Link href="/shop">Amp light Small</Link ></h2>
                                                <div className="rating_price">
                                                    <span className="price">
                                                        <del aria-hidden="true">
                                                            <span className="woocommerce-Price-amount amount"><bdi>
                                                                <span className="woocommerce-Price-currencySymbol">$</span>48.00</bdi></span>
                                                        </del>
                                                        <ins>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>18.00
                                                                </bdi>
                                                            </span>
                                                        </ins>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-wrapper grid_box product">
                                        <div className="product_box type_three">
                                            <div className="inner_box">
                                                <span className="onsale">Sale!</span>
                                                <div className="image_box">
                                                    <img src="/assets/images/shop/shop-2.jpg" className="img-fluid" alt="img" />
                                                    <div className="cart_btn">
                                                        <Link href="/shop" className="button add_to_cart_button">Add to Cart</Link >
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h2><Link href="/shop">Amp light Small</Link ></h2>
                                                <div className="rating_price">
                                                    <span className="price">
                                                        <del aria-hidden="true">
                                                            <span className="woocommerce-Price-amount amount"><bdi>
                                                                <span className="woocommerce-Price-currencySymbol">$</span>48.00</bdi></span>
                                                        </del>
                                                        <ins>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>18.00
                                                                </bdi>
                                                            </span>
                                                        </ins>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-wrapper grid_box product">
                                        <div className="product_box type_three">
                                            <div className="inner_box">
                                                <span className="onsale">Sale!</span>
                                                <div className="image_box">
                                                    <img src="/assets/images/shop/shop-3.jpg" className="img-fluid" alt="img" />
                                                    <div className="cart_btn">
                                                        <Link href="/shop" className="button add_to_cart_button">Add to Cart</Link >
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h2><Link href="/shop">Amp light Small</Link ></h2>
                                                <div className="rating_price">
                                                    <span className="price">
                                                        <del aria-hidden="true">
                                                            <span className="woocommerce-Price-amount amount"><bdi>
                                                                <span className="woocommerce-Price-currencySymbol">$</span>48.00</bdi></span>
                                                        </del>
                                                        <ins>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>18.00
                                                                </bdi>
                                                            </span>
                                                        </ins>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-wrapper grid_box product">
                                        <div className="product_box type_three">
                                            <div className="inner_box">
                                                <span className="onsale">Sale!</span>
                                                <div className="image_box">
                                                    <img src="/assets/images/shop/shop-4.jpg" className="img-fluid" alt="img" />
                                                    <div className="cart_btn">
                                                        <Link href="/shop" className="button add_to_cart_button">Add to Cart</Link >
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h2><Link href="/shop">Amp light Small</Link ></h2>
                                                <div className="rating_price">
                                                    <span className="price">
                                                        <del aria-hidden="true">
                                                            <span className="woocommerce-Price-amount amount"><bdi>
                                                                <span className="woocommerce-Price-currencySymbol">$</span>48.00</bdi></span>
                                                        </del>
                                                        <ins>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>18.00
                                                                </bdi>
                                                            </span>
                                                        </ins>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-wrapper grid_box product">
                                        <div className="product_box type_three">
                                            <div className="inner_box">
                                                <span className="onsale">Sale!</span>
                                                <div className="image_box">
                                                    <img src="/assets/images/shop/shop-5.jpg" className="img-fluid" alt="img" />
                                                    <div className="cart_btn">
                                                        <Link href="/shop" className="button add_to_cart_button">Add to Cart</Link >
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h2><Link href="/shop">Amp light Small</Link ></h2>
                                                <div className="rating_price">
                                                    <span className="price">
                                                        <del aria-hidden="true">
                                                            <span className="woocommerce-Price-amount amount"><bdi>
                                                                <span className="woocommerce-Price-currencySymbol">$</span>48.00</bdi></span>
                                                        </del>
                                                        <ins>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>18.00
                                                                </bdi>
                                                            </span>
                                                        </ins>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-wrapper grid_box product">
                                        <div className="product_box type_three">
                                            <div className="inner_box">
                                                <span className="onsale">Sale!</span>
                                                <div className="image_box">
                                                    <img src="/assets/images/shop/shop-6.jpg" className="img-fluid" alt="img" />
                                                    <div className="cart_btn">
                                                        <Link href="/shop" className="button add_to_cart_button">Add to Cart</Link >
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h2><Link href="/shop">Amp light Small</Link ></h2>
                                                <div className="rating_price">
                                                    <span className="price">
                                                        <del aria-hidden="true">
                                                            <span className="woocommerce-Price-amount amount"><bdi>
                                                                <span className="woocommerce-Price-currencySymbol">$</span>48.00</bdi></span>
                                                        </del>
                                                        <ins>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>18.00
                                                                </bdi>
                                                            </span>
                                                        </ins>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-wrapper grid_box product">
                                        <div className="product_box type_three">
                                            <div className="inner_box">
                                                <span className="onsale">Sale!</span>
                                                <div className="image_box">
                                                    <img src="/assets/images/shop/shop-7.jpg" className="img-fluid" alt="img" />
                                                    <div className="cart_btn">
                                                        <Link href="/shop" className="button add_to_cart_button">Add to Cart</Link >
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h2><Link href="/shop">Amp light Small</Link ></h2>
                                                <div className="rating_price">
                                                    <span className="price">
                                                        <del aria-hidden="true">
                                                            <span className="woocommerce-Price-amount amount"><bdi>
                                                                <span className="woocommerce-Price-currencySymbol">$</span>48.00</bdi></span>
                                                        </del>
                                                        <ins>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>18.00
                                                                </bdi>
                                                            </span>
                                                        </ins>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-wrapper grid_box product">
                                        <div className="product_box type_three">
                                            <div className="inner_box">
                                                <span className="onsale">Sale!</span>
                                                <div className="image_box">
                                                    <img src="/assets/images/shop/shop-8.jpg" className="img-fluid" alt="img" />
                                                    <div className="cart_btn">
                                                        <Link href="/shop" className="button add_to_cart_button">Add to Cart</Link >
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content_box">
                                                <h2><Link href="/shop">Amp light Small</Link ></h2>
                                                <div className="rating_price">
                                                    <span className="price">
                                                        <del aria-hidden="true">
                                                            <span className="woocommerce-Price-amount amount"><bdi>
                                                                <span className="woocommerce-Price-currencySymbol">$</span>48.00</bdi></span>
                                                        </del>
                                                        <ins>
                                                            <span className="woocommerce-Price-amount amount">
                                                                <bdi>
                                                                    <span className="woocommerce-Price-currencySymbol">$</span>18.00
                                                                </bdi>
                                                            </span>
                                                        </ins>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_50" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
