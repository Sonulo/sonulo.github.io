import Link from "next/link"
export default function Team1() {
    return (
        <>
            <section className="team bg_light_1">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="title_all_box style_one  dark_color">
                                <div className="title_sections">
                                    <div className="before_title"> Dedicated Team</div>
                                    <h2>Professional Individuals</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="description_box">
                                <p>Our power of choice is untrammelled and when nothing prevents being able to do
                                    what we
                                    like best every pleasure.</p>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_20" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                        {/*===============spacing==============*/}
                        <div className="mr_bottom_30" />
                        {/*===============spacing==============*/}
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="team_box style_one">
                                <div className="team_box_outer">
                                    <div className="member_image">
                                        <img src="/assets/images/team/team-1.jpg" alt="team image" />
                                    </div>
                                    <div className="about_member">
                                        <div className="share_media">
                                            <ul className="first">
                                                <li className="text">Share</li>
                                                <li><i className="fa fa-share-alt" /></li>
                                            </ul>
                                            <ul>
                                                <li className="shar_alt"><i className="fa fa-share-alt" /></li>
                                                <li><Link href="#"> <i className="fa fa-facebook"> </i></Link ></li>
                                                <li><Link href="#"> <i className="fa fa-twitter"> </i></Link ></li>
                                                <li><Link href="#"> <i className="fa fa-skype"> </i></Link ></li>
                                                <li><Link href="#"> <i className="fa fa-instagram"> </i></Link ></li>
                                            </ul>
                                        </div>
                                        <div className="authour_details">
                                            <span>Director </span>
                                            <h6>Amelia Margaret</h6>
                                            <div className="button_view">
                                                <Link href="#" className="theme-btn one">
                                                    View Profile
                                                </Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="team_box style_one">
                                <div className="team_box_outer">
                                    <div className="member_image">
                                        <img src="/assets/images/team/team-2.jpg" alt="team image" />
                                    </div>
                                    <div className="about_member">
                                        <div className="share_media">
                                            <ul className="first">
                                                <li className="text">Share</li>
                                                <li><i className="fa fa-share-alt" /></li>
                                            </ul>
                                            <ul>
                                                <li className="shar_alt"><i className="fa fa-share-alt" /></li>
                                                <li><Link href="#"> <i className="fa fa-facebook"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-twitter"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-skype"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-instagram"> </i> </Link ></li>
                                            </ul>
                                        </div>
                                        <div className="authour_details">
                                            <span>Team Leader </span>
                                            <h6>Andrew Cameron</h6>
                                            <div className="button_view">
                                                <Link href="#" className="theme-btn one">
                                                    View Profile
                                                </Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="team_box style_one">
                                <div className="team_box_outer">
                                    <div className="member_image">
                                        <img src="/assets/images/team/team-3.png" alt="team image" />
                                    </div>
                                    <div className="about_member">
                                        <div className="share_media">
                                            <ul className="first">
                                                <li className="text">Share</li>
                                                <li><i className="fa fa-share-alt" /></li>
                                            </ul>
                                            <ul>
                                                <li className="shar_alt"><i className="fa fa-share-alt" /></li>
                                                <li><Link href="#"> <i className="fa fa-facebook"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-twitter"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-skype"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-instagram"> </i> </Link ></li>
                                            </ul>
                                        </div>
                                        <div className="authour_details">
                                            <span>Manager </span>
                                            <h6>Sofia Charlotte</h6>
                                            <div className="button_view">
                                                <Link href="#" className="theme-btn one">
                                                    View Profile
                                                </Link >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*===============spacing==============*/}
                            <div className="mr_bottom_30" />
                            {/*===============spacing==============*/}
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_60" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
