
export default function Newsteller1() {
    return (
        <>
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

        </>
    )
}
