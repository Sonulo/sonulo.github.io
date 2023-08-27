import FloatingMenu from "@/components/layout/FloatingMenu"
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Blog1 from "@/components/sections/Blog1"
import Expertise from "@/components/sections/Expertise"
import HeroSlider1 from "@/components/sections/HeroSlider1"
import Newsteller1 from "@/components/sections/Newsteller1"
import Process1 from "@/components/sections/Process1"
import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import { useState } from "react"
import Head from 'next/head'

import Countdown from "@/components/elements/Countdown"
import Link from "next/link"

export default function Home1() {
    // Floating
    const [isFloating, setFloating] = useState(false);
    const handleFloating = () => setFloating(!isFloating);

    const currentTime = new Date();

    return (
        <>
            {/* <Head>
                <title>Creote - Corporate & Consulting Business NextJS Template</title>
            </Head>
            <Layout headerStyle={1} footerStyle={1}>
                <HeroSlider1 />
                <About1 />
                <Service1 />
                <Expertise />
                <Process1 />
                <Team1 />
                <Project1 />
                <Testimonial1 />
                <Blog1 />
                <Newsteller1 />
                <FloatingMenu handleFloating={handleFloating} isFloating={isFloating} />
            </Layout> */}
            <section className="coming-soon bg_op_1" style={{ background: 'url(/assets/images/coming-soon-bg.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="counter_section">
                            <div className="upper_section">
                                <div className="logo_sec" style={{padding: 0, margin: 0}}>
                                    <Link href="/" ><img style={{width: 500}} decoding="async" src="/assets/images/logo-1.png" alt="logo" /></Link>
                                </div>
                                <div className="title" style={{margin: 0, padding: 0}}>
                                    <h2>We are here with a new concept</h2>
                                    <p>Idea of denouncing pleasure and praising pain was born &amp; we will give
                                        you a complete account of system.
                                    </p>
                                </div>
                            </div>
                            <div className="Countdown-timer">
                                <div className="countdown text-left" data-date="Feb 15 2024 23:59:59">
                                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 20)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_110" />
                {/*===============spacing==============*/}
            </section>
        </>
    )
}