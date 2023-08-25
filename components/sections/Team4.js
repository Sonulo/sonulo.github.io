import Link from "next/link"
export default function Team4() {
    return (
        <>
            <section className="team-section">
                {/*===============spacing==============*/}
                <div className="pd_top_80" />
                {/*===============spacing==============*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_one text-center dark_color">
                                <div className="title_sections">
                                    <div className="before_title">Dedicated Team</div>
                                    <h2>Professional Individuals</h2>
                                    <p>Our power of choice is untrammelled and when nothing prevents <br /> being able to
                                        do what we like best every pleasure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="team_box style_three">
                                <div className="team_box_outer">
                                    <div className="image_box ">
                                        <img src="/assets/images/team/team-1.jpg" alt="team image" />
                                        <div className="share_links ">
                                            <Link href="#" className="shar_icon "><span className="fa fa-share-alt" alt="" /></Link >
                                            <ul className="clearfix ">
                                                <li><Link href="#"> <i className="fa fa-facebook"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-twitter"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-skype"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-instagram"> </i> </Link ></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content_box ">
                                        <h2><Link href="#" >Amelia Margaret</Link ></h2>
                                        <h6 className="job_details">Director</h6>
                                        <p>The HR Manger of Creote, he is very intelligent and smart. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
                            <div className="team_box style_three">
                                <div className="team_box_outer">
                                    <div className="image_box ">
                                        <img src="/assets/images/team/team-4.jpg" alt="team image" />
                                        <div className="share_links ">
                                            <Link href="#" className="shar_icon "><span className="fa fa-share-alt" alt="" /></Link >
                                            <ul className="clearfix ">
                                                <li><Link href="#"> <i className="fa fa-facebook"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-twitter"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-skype"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-instagram"> </i> </Link ></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content_box ">
                                        <h2><Link href="#" >Mary Merrill</Link >
                                        </h2>
                                        <h6 className="job_details">Operations Director</h6>
                                        <p>The HR Manger of Creote, he is very intelligent and smart. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-sm-5 mb-md-5 mb-lg-0 mb-xl-0">
                            <div className="team_box style_three">
                                <div className="team_box_outer">
                                    <div className="image_box ">
                                        <img src="/assets/images/team/team-2.jpg" alt="team image" />
                                        <div className="share_links ">
                                            <Link href="#" className="shar_icon "><span className="fa fa-share-alt" alt="" /></Link >
                                            <ul className="clearfix ">
                                                <li><Link href="#"> <i className="fa fa-facebook"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-twitter"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-skype"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-instagram"> </i> </Link ></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content_box ">
                                        <h2><Link href="#" >Andrew Cameron</Link ></h2>
                                        <h6 className="job_details">Team Leader</h6>
                                        <p>The HR Manger of Creote, he is very intelligent and smart. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="team_box style_three">
                                <div className="team_box_outer">
                                    <div className="image_box ">
                                        <img src="/assets/images/team/team-3.png" alt="team image" />
                                        <div className="share_links ">
                                            <Link href="#" className="shar_icon "><span className="fa fa-share-alt" /></Link >
                                            <ul className="clearfix ">
                                                <li><Link href="#"> <i className="fa fa-facebook"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-twitter"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-skype"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-instagram"> </i> </Link ></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content_box ">
                                        <h2><Link href="#" >Sofia Charlotte</Link ></h2>
                                        <h6 className="job_details">Manager</h6>
                                        <p>The HR Manger of Creote, he is very intelligent and smart. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_80" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
