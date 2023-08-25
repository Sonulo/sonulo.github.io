
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilterOverlay() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".project_container", {
                itemSelector: ".grid-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".grid-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "current" : "")
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="fliter_group" style={{ textAlign: 'center!important' }}>
                        <ul className="project_filter dark clearfix">
                            <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>View All</li>
                            <li className={activeBtn("project_category-coaching")} onClick={handleFilterKeyChange("project_category-coaching")}>Coaching</li>
                            <li className={activeBtn("project_category-human-resources")} onClick={handleFilterKeyChange("project_category-human-resources")}>Human Resources
                            </li>
                            <li className={activeBtn("project_category-leadership")} onClick={handleFilterKeyChange("project_category-leadership")}>Leadership</li>
                            <li className={activeBtn("project_category-pre-sale")} onClick={handleFilterKeyChange("project_category-pre-sale")}>Pre sale</li>
                            <li className={activeBtn("project_category-recruiting")} onClick={handleFilterKeyChange("project_category-recruiting")}>Recruiting</li>
                            <li className={activeBtn("project_category-values")} onClick={handleFilterKeyChange("project_category-values")}>Values</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project_container clearfix" style={{ position: 'relative', height: 776 }}>

                <div className="row clearfix">
                    <div className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-coaching">
                        <div className="project_post style_one style_five hover_actives">
                            <div className="image">
                                <img loading="lazy" width={746} height={497} src="/assets/images/projects/project-2-img.jpg" className="img-fluid" alt="img" />
                                <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link>
                                <div className="project_caro_content">
                                    <div className="left_side">
                                        <p>coaching</p>
                                        <h2 className="title_pro"><Link href="/project-details" rel="bookmark">Complex Dismissal for a Small Company</Link>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-human-resources">
                        <div className="project_post style_one style_five hover_actives">
                            <div className="image">
                                <img width={742} height={495} src="/assets/images/projects/project-3-img.jpg" className="img-fluid" alt="img" />
                                <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link>
                                <div className="project_caro_content">
                                    <div className="left_side">
                                        <p>human-resources</p>
                                        <h2 className="title_pro"><Link href="/project-details" rel="bookmark">Essential Steps to Writing Job
                                            Description</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-leadership">
                        <div className="project_post style_one style_five hover_actives">
                            <div className="image">
                                <img width={999} height={665} src="/assets/images/projects/project-1-img.jpg" className="img-fluid" alt="img" />
                                <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link>
                                <div className="project_caro_content">
                                    <div className="left_side">
                                        <p>leadership</p>
                                        <h2 className="title_pro"><Link href="/project-details" rel="bookmark">Company Values &amp; The Relationship</Link>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-pre-sale">
                        <div className="project_post style_one style_five hover_actives">
                            <div className="image">
                                <img width={827} height={465} src="/assets/images/projects/project-4-img.jpg" className="img-fluid" alt="img" />
                                <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link>
                                <div className="project_caro_content">
                                    <div className="left_side">
                                        <p>pre-sale</p>
                                        <h2 className="title_pro"><Link href="/project-details" rel="bookmark">Time HR Prepares Plastic Contract
                                            Manufacturer</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-recruiting">
                        <div className="project_post style_one style_five hover_actives">
                            <div className="image">
                                <img width={731} height={488} src="/assets/images/projects/project-6-img.jpg" className="img-fluid" alt="img" />
                                <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link>
                                <div className="project_caro_content">
                                    <div className="left_side">
                                        <p>recruiting</p>
                                        <h2 className="title_pro"><Link href="/project-details" rel="bookmark">Shared Time Human Resources Management</Link>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-12 col-sm-12 project_category-values">
                        <div className="project_post style_one style_five hover_actives">
                            <div className="image">
                                <img width={887} height={591} src="/assets/images/projects/project-5-img.jpg" className="img-fluid" alt="img" />
                                <Link href="/project-details" className="two"><i className="icon-right-arrow" /></Link>
                                <div className="project_caro_content">
                                    <div className="left_side">
                                        <p>values</p>
                                        <h2 className="title_pro"><Link href="/project-details" rel="bookmark">Six Essential Steps To Writing Successful
                                            Job</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
