import Layout from "@/components/layout/Layout"
import About10 from "@/components/sections/About10"
import Blog12 from "@/components/sections/Blog12"
import Contact8 from "@/components/sections/Contact8"
import Content5 from "@/components/sections/Content5"
import HeroSlider10 from "@/components/sections/HeroSlider10"
import Job from "@/components/sections/Job"
import Process6 from "@/components/sections/Process6"
import Service13 from "@/components/sections/Service13"
import Team6 from "@/components/sections/Team6"
import Video1 from "@/components/sections/Video1"

export default function Home12() {
    return (
        <>
            <Layout headerStyle={12} footerStyle={12}>
                <HeroSlider10 />
                <Process6 />
                <About10 />
                <Service13 />
                <Content5 />
                <Team6 />
                <Video1 />
                <Job />
                <Blog12 />
                <Contact8 />
            </Layout>
        </>
    )
}