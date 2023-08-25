import Link from "next/link"
export default function Team3() {
    return (
        <>
            <section className="team-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title_all_box style_three text-center dark_color">
                                <div className="title_sections three">
                                    <div className="before_title">Dedicated Team</div>
                                    <h2>Professional Individuals</h2>
                                </div>
                                {/*===============spacing==============*/}
                                <div className="mr_bottom_30" />
                                {/*===============spacing==============*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="team_box style_two">
                                <div className="team_box_outer">
                                    <div className="image_box ">
                                        <img src="/assets/images/team/team-1.jpg" alt="team image" />
                                        <div className="overlay ">
                                            <Link href="#" className="read_m">
                                                View Profile <i className="icon-right-arrow" /></Link >
                                            <ul>
                                                <li><Link href="#"> <i className="fa fa-facebook"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-twitter"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-skype"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-instagram"> </i> </Link ></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content_box ">
                                        <h2> <Link href="#" >
                                            Amelia Margaret</Link >
                                        </h2>
                                        <p className="job_details">Director </p>
                                        <p>The HR Manger of Creote, he is very intelligent and smart. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="team_box style_two">
                                <div className="team_box_outer">
                                    <div className="image_box ">
                                        <img src="/assets/images/team/team-2.jpg" alt="team image" />
                                        <div className="overlay ">
                                            <Link href="#" className="read_m">
                                                View Profile <i className="icon-right-arrow" /></Link >
                                            <ul>
                                                <li><Link href="#"> <i className="fa fa-facebook"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-twitter"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-skype"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-instagram"> </i> </Link ></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content_box ">
                                        <h2> <Link href="#" >
                                            Andrew Cameron</Link >
                                        </h2>
                                        <p className="job_details">Team Leader </p>
                                        <p>The HR Manger of Creote, he is very intelligent and smart. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="team_box style_two">
                                <div className="team_box_outer">
                                    <div className="image_box ">
                                        <img src="/assets/images/team/team-3.png" alt="team image" />
                                        <div className="overlay ">
                                            <Link href="#" className="read_m">
                                                View Profile <i className="icon-right-arrow" /></Link >
                                            <ul>
                                                <li><Link href="#"> <i className="fa fa-facebook"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-twitter"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-skype"> </i> </Link ></li>
                                                <li><Link href="#"> <i className="fa fa-instagram"> </i> </Link ></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content_box ">
                                        <h2> <Link href="#" >
                                            Sofia Charlotte</Link >
                                        </h2>
                                        <p className="job_details">Manager </p>
                                        <p>The HR Manger of Creote, he is very intelligent and smart. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_70" />
                {/*===============spacing==============*/}
            </section>

        </>
    )
}
