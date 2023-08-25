import Isotope from "isotope-layout"
import Link from 'next/link'
import { useEffect, useRef } from "react"
export default function ShopGrid() {
    const isotope = useRef()
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".grid_show_case", {
                itemSelector: ".grid_box",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid_box",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    return (
        <>
            <div className="grid_show_case grid_layout clearfix">
                <div className="project-wrapper grid_box">
                    <div className="product_box type_one">
                        <div className="inner_box">
                            <div className="image_box">
                                <img src="/assets/images/products/product-1-min.png" className="img-fluid" alt="img" />
                            </div>
                            <div className="labels">
                            </div>
                            <div className="overlay">
                                <ul>
                                    <li className="upper_box">
                                        <Link href="#" className="creote_quick_view_btn">
                                            <i className="icon-eye" />
                                        </Link>
                                    </li>
                                    <li className="whish_list_box">
                                        <div className="yith-wcwl-add-to-wishlist wishlist-fragment on-first-load">
                                            {/* ADD TO WISHLIST */}
                                            <div className="yith-wcwl-add-button">
                                                <Link href="#" className="add_to_wishlist single_add_to_wishlist">
                                                    <i className="yith-wcwl-icon fa fa-heart-o" /><span>Add to wishlist</span>
                                                </Link>
                                            </div>
                                            {/* COUNT TEXT */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content_box">
                            <div className="pro_cat">
                                <Link href="shop-details">Coaching</Link>
                            </div>
                            <h2><Link href="shop-details">How to Stop Worrying &amp; Living</Link></h2>
                            <div className="product_attributes">
                            </div>
                            <div className="rating_price">
                                <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>24.00</bdi></span></span>
                                <span className="star-rating"><span style={{ width: '0%' }}><strong itemProp="ratingValue" className="rating">0</strong> out of 5</span></span>
                            </div>
                            <div className="cart_btn">
                                <Link href="#" className="creote_quick_view_btn">Quick View</Link>
                                <Link href="#" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-wrapper grid_box">
                    <div className="product_box type_one">
                        <div className="inner_box">
                            <div className="image_box">
                                <img src="/assets/images/products/product-2-min.png" className="img-fluid" alt="img" />
                            </div>
                            <div className="labels">
                            </div>
                            <div className="overlay">
                                <ul>
                                    <li className="upper_box">
                                        <Link href="#" className="creote_quick_view_btn">
                                            <i className="icon-eye" />
                                        </Link>
                                    </li>
                                    <li className="whish_list_box">
                                        <div className="yith-wcwl-add-to-wishlist wishlist-fragment on-first-load">
                                            {/* ADD TO WISHLIST */}
                                            <div className="yith-wcwl-add-button">
                                                <Link href="#" className="add_to_wishlist single_add_to_wishlist">
                                                    <i className="yith-wcwl-icon fa fa-heart-o" /><span>Add to wishlist</span>
                                                </Link>
                                            </div>
                                            {/* COUNT TEXT */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content_box">
                            <div className="pro_cat">
                                <Link href="shop-details"> Coaching</Link>
                            </div>
                            <h2><Link href="shop-details">Esssays Change You Think</Link></h2>
                            <div className="product_attributes">
                            </div>
                            <div className="rating_price">
                                <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>30.00</bdi></span></span>
                                <span className="star-rating"><span style={{ width: '0%' }}><strong itemProp="ratingValue" className="rating">0</strong> out of 5</span></span>
                            </div>
                            <div className="cart_btn">
                                <Link href="#" className="creote_quick_view_btn">Quick View</Link>
                                <Link href="#" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-wrapper grid_box">
                    <div className="product_box type_one">
                        <div className="inner_box">
                            <span className="onsale">Sale!</span>
                            <div className="image_box">
                                <img src="/assets/images/products/product-3-min.png" className="img-fluid" alt="img" />
                            </div>
                            <div className="labels">
                            </div>
                            <div className="overlay">
                                <ul>
                                    <li className="upper_box">
                                        <Link href="#" className="creote_quick_view_btn">
                                            <i className="icon-eye" />
                                        </Link>
                                    </li>
                                    <li className="whish_list_box">
                                        <div className="yith-wcwl-add-to-wishlist wishlist-fragment on-first-load">
                                            {/* ADD TO WISHLIST */}
                                            <div className="yith-wcwl-add-button">
                                                <Link href="#" className="add_to_wishlist single_add_to_wishlist">
                                                    <i className="yith-wcwl-icon fa fa-heart-o" /><span>Add to wishlist</span>
                                                </Link>
                                            </div>
                                            {/* COUNT TEXT */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content_box">
                            <div className="pro_cat">
                                <Link href="shop-details"> Coaching</Link>
                            </div>
                            <h2><Link href="shop-details">Your Soul is a River By Nikita Gilla</Link></h2>
                            <div className="product_attributes">
                            </div>
                            <div className="rating_price">
                                <span className="price"><del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>45.00</bdi></span></del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>39.00</bdi></span></ins></span>
                                <span className="star-rating"><span style={{ width: '0%' }}><strong itemProp="ratingValue" className="rating">0</strong> out of 5</span></span>
                            </div>
                            <div className="cart_btn">
                                <Link href="#" className="creote_quick_view_btn">Quick View</Link>
                                <Link href="#" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-wrapper grid_box">
                    <div className="product_box type_one">
                        <div className="inner_box">
                            <span className="onsale">Sale!</span>
                            <div className="image_box">
                                <img src="/assets/images/products/product-4-min.png" className="img-fluid" alt="img" />
                            </div>
                            <div className="labels">
                            </div>
                            <div className="overlay">
                                <ul>
                                    <li className="upper_box">
                                        <Link href="#" className="creote_quick_view_btn"><i className="icon-eye" /></Link>
                                    </li>
                                    <li className="whish_list_box">
                                        <div className="yith-wcwl-add-to-wishlist wishlist-fragment on-first-load">
                                            {/* ADD TO WISHLIST */}
                                            <div className="yith-wcwl-add-button">
                                                <Link href="#" className="add_to_wishlist single_add_to_wishlist">
                                                    <i className="yith-wcwl-icon fa fa-heart-o" />		<span>Add to wishlist</span>
                                                </Link>
                                            </div>
                                            {/* COUNT TEXT */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content_box">
                            <div className="pro_cat">
                                <Link href="shop-details"> Coaching</Link>
                            </div>
                            <h2><Link href="shop-details">All the Letters I Should Have Sent</Link></h2>
                            <div className="product_attributes">
                            </div>
                            <div className="rating_price">
                                <span className="price"><del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>24.00</bdi></span></del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>19.00</bdi></span></ins></span>
                                <span className="star-rating"><span style={{ width: '0%' }}><strong itemProp="ratingValue" className="rating">0</strong> out of 5</span></span>
                            </div>
                            <div className="cart_btn">
                                <Link href="#" className="creote_quick_view_btn">Quick View</Link>
                                <Link href="#" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-wrapper grid_box">
                    <div className="product_box type_one">
                        <div className="inner_box">
                            <div className="image_box">
                                <img src="/assets/images/products/product-5-min.png" className="img-fluid" alt="img" />
                            </div>
                            <div className="labels">
                            </div>
                            <div className="overlay">
                                <ul>
                                    <li className="upper_box">
                                        <Link href="#" className="creote_quick_view_btn">
                                            <i className="icon-eye" />
                                        </Link>
                                    </li>
                                    <li className="whish_list_box">
                                        <div className="yith-wcwl-add-to-wishlist wishlist-fragment on-first-load">
                                            {/* ADD TO WISHLIST */}
                                            <div className="yith-wcwl-add-button">
                                                <Link href="#" className="add_to_wishlist single_add_to_wishlist" data-product-id={2660} data-product-type="simple" data-original-product-id={2660} data-title="Add to wishlist" >
                                                    <i className="yith-wcwl-icon fa fa-heart-o" /><span>Add to wishlist</span>
                                                </Link>
                                            </div>
                                            {/* COUNT TEXT */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content_box">
                            <div className="pro_cat">
                                <Link href="shop-details"> HR Consulting</Link>
                            </div>
                            <h2><Link href="shop-details">Milk and Honey By Rupi Kaur</Link></h2>
                            <div className="product_attributes">
                            </div>
                            <div className="rating_price">
                                <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>44.00</bdi></span></span>
                                <span className="star-rating"><span style={{ width: '0%' }}><strong itemProp="ratingValue" className="rating">0</strong> out of 5</span></span>
                            </div>
                            <div className="cart_btn">
                                <Link href="#" className="creote_quick_view_btn">Quick View</Link>
                                <Link href="#" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-wrapper grid_box">
                    <div className="product_box type_one">
                        <div className="inner_box">
                            <span className="onsale">Sale!</span>
                            <div className="image_box">
                                <img src="/assets/images/products/product-6-min.png" className="img-fluid" alt="img" />
                            </div>
                            <div className="labels">
                            </div>
                            <div className="overlay">
                                <ul>
                                    <li className="upper_box">
                                        <Link href="#" className="creote_quick_view_btn">
                                            <i className="icon-eye" />
                                        </Link>
                                    </li>
                                    <li className="whish_list_box">
                                        <div className="yith-wcwl-add-to-wishlist wishlist-fragment on-first-load">
                                            {/* ADD TO WISHLIST */}
                                            <div className="yith-wcwl-add-button">
                                                <Link href="#" className="add_to_wishlist single_add_to_wishlist">
                                                    <i className="yith-wcwl-icon fa fa-heart-o" /><span>Add to wishlist</span>
                                                </Link>
                                            </div>
                                            {/* COUNT TEXT */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content_box">
                            <div className="pro_cat">
                                <Link href="shop-details"> HR Consulting</Link>
                            </div>
                            <h2><Link href="shop-details">You are Your Only Limit</Link></h2>
                            <div className="product_attributes">
                            </div>
                            <div className="rating_price">
                                <span className="price"><del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>24.00</bdi></span></del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>19.00</bdi></span></ins></span>
                                <span className="star-rating"><span style={{ width: '0%' }}><strong itemProp="ratingValue" className="rating">0</strong> out of 5</span></span>
                            </div>
                            <div className="cart_btn">
                                <Link href="#" className="creote_quick_view_btn">
                                    Quick View                   </Link>
                                <Link href="#" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-wrapper grid_box">
                    <div className="product_box type_one">
                        <div className="inner_box">
                            <div className="image_box">
                                <img src="/assets/images/products/product-7-min.png" className="img-fluid" alt="img" />
                            </div>
                            <div className="labels">
                            </div>
                            <div className="overlay">
                                <ul>
                                    <li className="upper_box">
                                        <Link href="#" className="creote_quick_view_btn">
                                            <i className="icon-eye" />
                                        </Link>
                                    </li>
                                    <li className="whish_list_box">
                                        <div className="yith-wcwl-add-to-wishlist wishlist-fragment on-first-load" data-fragment-ref={2662} data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:false,&quot;show_exists&quot;:false,&quot;product_id&quot;:2662,&quot;parent_product_id&quot;:2662,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:false,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                            {/* ADD TO WISHLIST */}
                                            <div className="yith-wcwl-add-button">
                                                <Link href="#" className="add_to_wishlist single_add_to_wishlist" data-product-id={2662} data-product-type="simple" data-original-product-id={2662} data-title="Add to wishlist" >
                                                    <i className="yith-wcwl-icon fa fa-heart-o" />		<span>Add to wishlist</span>
                                                </Link>
                                            </div>
                                            {/* COUNT TEXT */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content_box">
                            <div className="pro_cat">
                                <Link href="shop-details"> Coaching</Link>
                            </div>
                            <h2><Link href="shop-details">Why Good With Out Good By John</Link></h2>
                            <div className="product_attributes">
                            </div>
                            <div className="rating_price">
                                <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>44.00</bdi></span></span>
                                <span className="star-rating"><span style={{ width: '0%' }}><strong itemProp="ratingValue" className="rating">0</strong> out of 5</span></span>
                            </div>
                            <div className="cart_btn">
                                <Link href="#" className="creote_quick_view_btn">
                                    Quick View                   </Link>
                                <Link href="#" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-wrapper grid_box">
                    <div className="product_box type_one">
                        <div className="inner_box">
                            <span className="onsale">Sale!</span>
                            <div className="image_box">
                                <img src="/assets/images/products/product-8-min.png" className="img-fluid" alt="img" />
                            </div>
                            <div className="labels">
                            </div>
                            <div className="overlay">
                                <ul>
                                    <li className="upper_box">
                                        <Link href="#" className="creote_quick_view_btn">
                                            <i className="icon-eye" />
                                        </Link>
                                    </li>
                                    <li className="whish_list_box">
                                        <div className="yith-wcwl-add-to-wishlist wishlist-fragment on-first-load">
                                            {/* ADD TO WISHLIST */}
                                            <div className="yith-wcwl-add-button">
                                                <Link href="#" className="add_to_wishlist single_add_to_wishlist">
                                                    <i className="yith-wcwl-icon fa fa-heart-o" />		<span>Add to wishlist</span>
                                                </Link>
                                            </div>
                                            {/* COUNT TEXT */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content_box">
                            <div className="pro_cat">
                                <Link href="shop-details"> Employee Relation</Link>
                            </div>
                            <h2><Link href="shop-details">Squirin The Schooll By Nimal</Link></h2>
                            <div className="product_attributes">
                            </div>
                            <div className="rating_price">
                                <span className="price"><del aria-hidden="true"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>24.00</bdi></span></del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>15.00</bdi></span></ins></span>
                                <span className="star-rating"><span style={{ width: '0%' }}><strong itemProp="ratingValue" className="rating">0</strong> out of 5</span></span>
                            </div>
                            <div className="cart_btn">
                                <Link href="#" className="creote_quick_view_btn">
                                    Quick View                   </Link>
                                <Link href="#" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
