import QuantityInput from "@/components/elements/QuantityInput"
import ThumbSlider from "@/components/elements/ThumbSlider"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export default function ShopSidebar() {
    const [activeIndex, setActiveIndex] = useState(1);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };
    const swiperOptions = {
        // General
        direction: 'horizontal',
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            575: {
                slidesPerView: 2,

            },
            767: {
                slidesPerView: 2,

            },
            991: {
                slidesPerView: 2,

            },
            1199: {
                slidesPerView: 3,

            },
            1350: {
                slidesPerView: 3,

            },
        }
    }

    return (
        <>
            <Layout breadcrumbTitle="Shop WS">
                <div className="woocommerce">
                    <div className="pd_top_90" />
                    {/*===============default spacing==============*/}
                    <div className="auto-container">
                        <div className="row default_row">
                            {/*content*/}
                            <div id="primary" className="content-area service col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <main id="main" className="site-main products_single" role="main">
                                    <section className="default_single_product">
                                        <div className="auto-container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="flexslider">
                                                        <ThumbSlider />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="summary entry-summary">
                                                        <h1 className="product_title entry-title">Esssays Change You Think</h1>
                                                        <p className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>30.00</bdi></span></p>
                                                        <div className="woocommerce-product-details__short-description">
                                                            <p>Beguiled and demoralized by the charms of pleasure of the moment blinded by
                                                                desire that they cannot foresee the pain and trouble that are bound to and
                                                                equal
                                                                blame belongs to those who fail in their duty.</p>
                                                            <p>Nor again is there anyone who loves or pursues or desires to pain of because
                                                                it
                                                                is pain, but because occasionally circumstances occur in which toil and pain
                                                                can
                                                                procure him some great pleasure.</p>
                                                            <p>Must explain to you how all this mistaken idea of denouncing pleasure praising
                                                                will give you a completed great the great explorer.</p>
                                                        </div>
                                                        <p className="stock in-stock">200 in stock (can be backordered)</p>
                                                        <form className="cart" action="#" method="post" encType="multipart/form-data">
                                                            <QuantityInput />
                                                            <button type="submit" name="add-to-cart" value={2650} className="single_add_to_cart_button button">
                                                            Add to cart
                                                        </button>
                                                    </form>
                                                    <div className="d-flex align-items-center">
                                                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-2650  wishlist-fragment on-first-load" data-fragment-ref={2650} data-fragment-options="{&quot;base_url&quot;:&quot;&quot;,&quot;in_default_wishlist&quot;:false,&quot;is_single&quot;:true,&quot;show_exists&quot;:false,&quot;product_id&quot;:2650,&quot;parent_product_id&quot;:2650,&quot;product_type&quot;:&quot;simple&quot;,&quot;show_view&quot;:true,&quot;browse_wishlist_text&quot;:&quot;Browse wishlist&quot;,&quot;already_in_wishslist_text&quot;:&quot;The product is already in your wishlist!&quot;,&quot;product_added_text&quot;:&quot;Product added!&quot;,&quot;heading_icon&quot;:&quot;fa-heart-o&quot;,&quot;available_multi_wishlist&quot;:false,&quot;disable_wishlist&quot;:false,&quot;show_count&quot;:false,&quot;ajax_loading&quot;:false,&quot;loop_position&quot;:&quot;after_add_to_cart&quot;,&quot;item&quot;:&quot;add_to_wishlist&quot;}">
                                                            {/* ADD TO WISHLIST */}
                                                            <div className="yith-wcwl-add-button">
                                                                <Link href="#" className="add_to_wishlist single_add_to_wishlist" data-product-id={2650} data-product-type="simple" data-original-product-id={2650} data-title="Add to wishlist" >
                                                                    <i className="yith-wcwl-icon fa fa-heart-o" /> <span>Add to
                                                                        wishlist</span>
                                                                </Link>
                                                            </div>
                                                            {/* COUNT TEXT */}
                                                        </div>
                                                        <Link href="#" className="compare button" data-product_id={2650} >Compare</Link>
                                                    </div>
                                                    <div className="product_meta">
                                                        <span className="posted_in">Categories: <Link href="shop-details" rel="tag">Coaching</Link>,
                                                            <Link href="#" rel="tag">Employee Relation</Link>, <Link href="shop-details" rel="tag">HR
                                                                Consulting</Link> ,
                                                            <Link href="#" rel="tag">Recruiting</Link>,
                                                            <Link href="#" rel="tag">Small Business HR</Link></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="woocommerce-tabs wc-tabs-wrapper">
                                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(1)}>
                                                                Reviews (0)
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(2)}>
                                                                Description
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className={activeIndex === 3 ? "nav-link active" : "nav-link"} onClick={() => handleOnClick(3)}>
                                                                Additional information
                                                            </button>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content" id="myTabContent">
                                                        <div className={activeIndex === 1 ? "tab-pane fade active show" : "tab-pane fade"}>
                                                            <div id="reviews" className="woocommerce-Reviews">
                                                                <div id="comments">
                                                                    <h2 className="woocommerce-Reviews-title">
                                                                        Reviews
                                                                    </h2>
                                                                    <p className="woocommerce-noreviews">There are no reviews yet.</p>
                                                                </div>
                                                                <div id="review_form_wrapper">
                                                                    <div id="review_form">
                                                                        <div id="respond" className="comment-respond">
                                                                            <span id="reply-title" className="comment-reply-title">Be the first to
                                                                                review “Esssays Change You Think” <small><Link id="cancel-comment-reply-link" href="/wp/creote/v-new/product/esssays-change-you-think/#respond" style={{ display: 'none' }}>Cancel reply</Link></small></span>
                                                                            <form action="https://themepanthers.com/wp/creote/v-new/wp-comments-post.php" method="post" id="commentform" className="comment-form">
                                                                                <p className="comment-notes"><span id="email-notes">Your email address
                                                                                    will not be published.</span> <span className="required-field-message">Required fields are marked
                                                                                        <span className="required">*</span></span></p>
                                                                                <div className="comment-form-rating">
                                                                                    <label htmlFor="rating">Your rating&nbsp;<span className="required">*</span></label>
                                                                                    <p className="stars"><span><Link className="star-1" href="#">1</Link><Link className="star-2" href="#">2</Link><Link className="star-3" href="#">3</Link><Link className="star-4" href="#">4</Link><Link className="star-5" href="#">5</Link></span></p>
                                                                                    <select name="rating" id="rating" required style={{ display: 'none' }}>
                                                                                        <option value>Rate…</option>
                                                                                        <option value={5}>Perfect</option>
                                                                                        <option value={4}>Good</option>
                                                                                        <option value={3}>Average</option>
                                                                                        <option value={2}>Not that bad</option>
                                                                                        <option value={1}>Very poor</option>
                                                                                    </select>
                                                                                </div>
                                                                                <p className="comment-form-comment"><label htmlFor="comment">Your
                                                                                    review&nbsp;<span className="required">*</span></label><textarea id="comment" name="comment" cols={45} rows={8} required defaultValue={""} /></p>
                                                                                <p className="comment-form-author"><label htmlFor="author">Name&nbsp;<span className="required">*</span></label><input id="author" name="author" type="text" size={30} required />
                                                                                </p>
                                                                                <p className="comment-form-email"><label htmlFor="email">Email&nbsp;<span className="required">*</span></label><input id="email" name="email" type="email" size={30} required />
                                                                                </p>
                                                                                <p className="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" />
                                                                                    <label htmlFor="wp-comment-cookies-consent">Save my name, email,
                                                                                        and
                                                                                        website in this browser for the next time I comment.</label>
                                                                                </p>
                                                                                <p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" defaultValue="Submit" /> <input type="hidden" name="comment_post_ID" defaultValue={2650} id="comment_post_ID" />
                                                                                    <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                                                                                </p>
                                                                            </form>
                                                                        </div>
                                                                        {/* #respond */}
                                                                    </div>
                                                                </div>
                                                                <div className="clear" />
                                                            </div>
                                                        </div>
                                                        <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade"}>
                                                            <div className="content_box">
                                                                <h2>Description</h2>
                                                                <p>Nor again is there anyone who loves or pursues or desires to pain of because
                                                                    it
                                                                    is pain, but because occasionally circumstances occur in which toil and pain
                                                                    can
                                                                    procure him some great pleasure.</p>
                                                                <p>Must explain to you how all this mistaken idea of denouncing pleasure praising
                                                                    will give you a completed great the great explorer.</p>
                                                            </div>
                                                        </div>
                                                        <div className={activeIndex === 3 ? "tab-pane fade active show" : "tab-pane fade"}>
                                                            <div className="content_box">
                                                                <h2>Additional information</h2>
                                                                <table className="woocommerce-product-attributes shop_attributes">
                                                                    <tbody>
                                                                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_books">
                                                                            <th className="woocommerce-product-attributes-item__label">Books</th>
                                                                            <td className="woocommerce-product-attributes-item__value">
                                                                                <p>Comics, Dc</p>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="related products">
                                    <div className="auto-container">
                                        <div className="row gutter_30px">
                                            <div className="col-lg-12">
                                                <h2>Related products</h2>
                                                <Swiper {...swiperOptions} className="product_related_posts theme_carousel">
                                            <SwiperSlide className="project-wrapper grid-item">
                                                <div className="product_box type_one">
                                                    <div className="inner_box">
                                                        <div className="image_box">
                                                            <img src="/assets/images/products/product-1-min.png" className="img-fluid" alt="img" />
                                                        </div>
                                                        <div className="overlay">
                                                            <ul>
                                                                <li className="upper_box">
                                                                    <Link href="#" className="creote_quick_view_btn">
                                                                        <i className="icon-eye" />
                                                                    </Link>
                                                                </li>
                                                                <li className="whish_list_box">
                                                                    <div className="yith-wcwl-add-to-wishlist  wishlist-fragment on-first-load">
                                                                        {/* ADD TO WISHLIST */}
                                                                        <div className="yith-wcwl-add-button">
                                                                            <Link href="#" className="add_to_wishlist single_add_to_wishlist" >
                                                                                <i className="yith-wcwl-icon fa fa-heart-o" /><span>Add to
                                                                                    wishlist</span>
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
                                                            <span className="star-rating"><span style={{ width: '0%' }}><strong itemProp="ratingValue" className="rating">0</strong> out of
                                                                5</span></span>
                                                        </div>
                                                        <div className="cart_btn">
                                                            <Link href="#" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart" >Add to cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="project-wrapper grid-item">
                                                <div className="product_box type_one">
                                                    <div className="inner_box">
                                                        <div className="image_box">
                                                            <img src="/assets/images/products/product-5-min.png" className="img-fluid" alt="img" />
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
                                                                            <Link href="#" className="add_to_wishlist single_add_to_wishlist" >
                                                                                <i className="yith-wcwl-icon fa fa-heart-o" /><span>Add to
                                                                                    wishlist</span>
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
                                                            <span className="star-rating"><span style={{ width: '0%' }}><strong itemProp="ratingValue" className="rating">0</strong> out of
                                                                5</span></span>
                                                        </div>
                                                        <div className="cart_btn">
                                                            <Link href="#" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart" >Add to cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="project-wrapper grid-item product type-product status-publish last instock product_cat-coaching product_cat-employee-relation product_cat-recruiting has-post-thumbnail virtual sold-individually purchasable product-type-simple">
                                                <div className="product_box type_one">
                                                    <div className="inner_box">
                                                        <div className="image_box">
                                                            <img src="/assets/images/products/product-9-min.png" className="img-fluid" alt="img" />
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
                                                                            <Link href="#" className="add_to_wishlist single_add_to_wishlist" >
                                                                                <i className="yith-wcwl-icon fa fa-heart-o" /><span>Add to
                                                                                    wishlist</span>
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
                                                        <h2><Link href="shop-details">Start Living The Adventures of Yes</Link></h2>
                                                        <div className="product_attributes">
                                                        </div>
                                                        <div className="rating_price">
                                                            <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>30.00</bdi></span></span>
                                                            <span className="star-rating"><span style={{ width: '0%' }}><strong itemProp="ratingValue" className="rating">0</strong> out of
                                                                5</span></span>
                                                        </div>
                                                        <div className="cart_btn">
                                                            <Link href="#" className="button wp-element-button product_type_simple add_to_cart_button ajax_add_to_cart" >Add to cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                        {/*content*/}
                        {/*sidebar*/}
                        <aside id="secondary" className="widget-area all_side_bar col-lg-4 col-md-12 col-sm-12">
                            <div className="page_siderbar side_bar fixSide_scroll">
                                <div className="widgets_grid_box">
                                    <form role="search" method="get" action="index/">
                                        <div className="wp-block-search__inside-wrapper">
                                            <input type="search" name="s" placeholder="Key Words here" required />
                                            <i className="fa fa-search" />
                                        </div>
                                    </form>
                                </div>
                                <div className="widgets_grid_box">
                                    <h2 className="widget-title">Post Categories</h2>
                                    <ul className="wc-block-product-categories-list">
                                        <li>
                                            <Link href="shop-details">
                                                Coaching
                                            </Link>
                                            <span>7</span>
                                        </li>
                                        <li>
                                            <Link href="shop-details">
                                                <span>Employee Relation</span>
                                            </Link>
                                            <span>7</span>
                                        </li>
                                        <li>
                                            <Link href="shop-details">
                                                <span>Furniture</span>
                                            </Link>
                                            <span>8</span>
                                        </li>
                                        <li>
                                            <Link href="shop-details">
                                                <span>HR Consulting</span>
                                            </Link>
                                            <span>7</span>
                                        </li>
                                        <li>
                                            <Link href="shop-details">
                                                <span>Lights</span>
                                            </Link>
                                            <span>4</span>
                                        </li>
                                        <li>
                                            <Link href="shop-details">
                                                <span>Recruiting</span>
                                            </Link>
                                            <span>6</span>
                                        </li>
                                        <li>
                                            <Link href="shop-details">
                                                <span>Small Business HR</span>
                                            </Link>
                                            <span>7</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widgets_grid_box">
                                    <div id="woocommerce_top_rated_products-2" className="widget woocommerce widget_top_rated_products">
                                        <h4 className="widget-title">Top rated products</h4>
                                        <ul className="product_list_widget">
                                            <li>
                                                <Link href="shop">
                                                    <img src="/assets/images/products/product-10-min.png" className="img-fluid" alt="img" />
                                                </Link>
                                                <div className="content">
                                                    <span className="product-title">Wishbone Chair</span>
                                                    <del><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>165.00</bdi></span></del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>90.00</bdi></span></ins>
                                                </div>
                                            </li>
                                            <li>
                                                <Link href="shop">
                                                    <img src="/assets/images/products/product-9-min.png" className="img-fluid" alt="img" />
                                                </Link>
                                                <div className="content">
                                                    <span className="product-title">Chair Oak Lacquered</span>
                                                    <del><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>243.00</bdi></span></del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>134.00</bdi></span></ins>
                                                </div>
                                            </li>
                                            <li>
                                                <Link href="shop">
                                                    <img src="/assets/images/products/product-8-min.png" className="img-fluid" alt="img" />
                                                </Link>
                                                <div className="content">
                                                    <span className="product-title">Unfold Pendant lamp</span>
                                                    <del><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>99.00</bdi></span></del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>45.00</bdi></span></ins>
                                                </div>
                                            </li>
                                            <li>
                                                <Link href="shop">
                                                    <img src="/assets/images/products/product-7-min.png" className="img-fluid" />
                                                </Link>
                                                <div className="content">
                                                    <span className="product-title">Zunkel Schwarz</span>
                                                    <del><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>656.00</bdi></span></del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>432.00</bdi></span></ins>
                                                </div>
                                            </li>
                                            <li>
                                                <Link href="shop">
                                                    <img src="/assets/images/products/product-6-min.png" className="img-fluid" alt="img" />
                                                </Link>
                                                <div className="content">
                                                    <span className="product-title">Cork Plant Stand</span>
                                                    <del><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>342.00</bdi></span></del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>178.00</bdi></span></ins>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widgets_grid_box">
                                    <h2 className="widget-title">About Authour</h2>
                                    <div className="about_authour_widget">
                                        <h3>Hi! I’m Jacob Leonado</h3>
                                        <img src="/assets/images/authour-image-wdts.jpg" alt="authourimage" />
                                        <p>Obligations of business will frequently occur that pleasure have too repudiated.</p>
                                        <Link href="#">All My Post</Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        {/*sidebar*/}
                    </div>
                </div>
                {/*===============default spacing==============*/}
                <div className="pd_top_50" />
                {/*===============default spacing==============*/}
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