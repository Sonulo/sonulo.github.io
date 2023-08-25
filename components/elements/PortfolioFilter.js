
import Isotope from "isotope-layout"
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter() {
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
                    <div className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 project_category-coaching" style={{ position: 'absolute', left: 0, top: 0 }}>
                        <div className="project_box style_two">
                            <div className="entry-thumbnail image">
                                <img width={370} height={247} src="/assets/images/projects/project-2-img.jpg" className="attachment-370x330 size-370x330 wp-post-image" alt="img" loading="lazy" />
                                <div className="overlay">
                                    <Link data-fancybox="gallery" href="#">
                                        <span className="fa fa-search icon" />
                                    </Link >
                                </div>
                            </div>
                            <div className="content_inner">
                                <h2><Link href="#">Complex Dismissal for a Small Company</Link ></h2>
                                <div className="meta_value">
                                    <Link href="#">coaching</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 project_category-human-resources" style={{ position: 'absolute', left: '373.328px', top: 0 }}>
                        <div className="project_box style_two">
                            <div className="entry-thumbnail image">
                                <img width={370} height={247} src="/assets/images/projects/project-3-img.jpg" className="attachment-370x330 size-370x330 wp-post-image" alt="img" loading="lazy" />
                                <div className="overlay">
                                    <Link data-fancybox="gallery" href="#">
                                        <span className="fa fa-search icon" />
                                    </Link >
                                </div>
                            </div>
                            <div className="content_inner">
                                <h2><Link href="#">Essential Steps to Writing Job Description</Link ></h2>
                                <div className="meta_value">
                                    <Link href="#">human-resources</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 project_category-leadership" style={{ position: 'absolute', left: '746.656px', top: 0 }}>
                        <div className="project_box style_two">
                            <div className="entry-thumbnail image">
                                <img width={370} height={246} src="/assets/images/projects/project-1-img.jpg" className="attachment-370x330 size-370x330 wp-post-image" alt="img" loading="lazy" />
                                <div className="overlay">
                                    <Link data-fancybox="gallery" href="#">
                                        <span className="fa fa-search icon" />
                                    </Link >
                                </div>
                            </div>
                            <div className="content_inner">
                                <h2><Link href="#">Company Values &amp; The Relationship</Link ></h2>
                                <div className="meta_value">
                                    <Link href="#">leadership</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 project_category-pre-sale" style={{ position: 'absolute', left: 0, top: 388 }}>
                        <div className="project_box style_two">
                            <div className="entry-thumbnail image">
                                <img width={370} height={208} src="/assets/images/projects/project-4-img.jpg" className="attachment-370x330 size-370x330 wp-post-image" alt="img" loading="lazy" />
                                <div className="overlay">
                                    <Link data-fancybox="gallery" href="#">
                                        <span className="fa fa-search icon" />
                                    </Link >
                                </div>
                            </div>
                            <div className="content_inner">
                                <h2><Link href="#">Time HR Prepares Plastic Contract Manufacturer</Link ></h2>
                                <div className="meta_value">
                                    <Link href="#">pre-sale</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 project_category-recruiting" style={{ position: 'absolute', left: '373.328px', top: 388 }}>
                        <div className="project_box style_two">
                            <div className="entry-thumbnail image">
                                <img width={370} height={247} src="/assets/images/projects/project-6-img.jpg" className="attachment-370x330 size-370x330 wp-post-image" alt="img" loading="lazy" />
                                <div className="overlay">
                                    <Link data-fancybox="gallery" href="#">
                                        <span className="fa fa-search icon" />
                                    </Link >
                                </div>
                            </div>
                            <div className="content_inner">
                                <h2><Link href="#">Shared Time Human Resources Management</Link ></h2>
                                <div className="meta_value">
                                    <Link href="#">recruiting</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper grid-item col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 project_category-values" style={{ position: 'absolute', left: '746.656px', top: 388 }}>
                        <div className="project_box style_two">
                            <div className="entry-thumbnail image">
                                <img width={370} height={247} src="/assets/images/projects/project-5-img.jpg" className="attachment-370x330 size-370x330 wp-post-image" alt="img" loading="lazy" />
                                <div className="overlay">
                                    <Link data-fancybox="gallery" href="#">
                                        <span className="fa fa-search icon" />
                                    </Link >
                                </div>
                            </div>
                            <div className="content_inner">
                                <h2><Link href="#">Six Essential Steps To Writing Successful Job</Link ></h2>
                                <div className="meta_value">
                                    <Link href="#">values</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
