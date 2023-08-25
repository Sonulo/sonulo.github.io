import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Blog4 from "@/components/sections/Blog4"
import HeroSlider4 from "@/components/sections/HeroSlider4"
import Process2 from "@/components/sections/Process2"
import Project3 from "@/components/sections/Project3"
import Service5 from "@/components/sections/Service5"
import Team3 from "@/components/sections/Team3"
import Testimonial4 from "@/components/sections/Testimonial4"

export default function Home4() {
    return (
        <>
            <Layout headerStyle={4} footerStyle={4}>
                <HeroSlider4 />
                <Service5 />
                <About3 />
                <Project3 />
                <Process2 />
                <Team3 />
                <Testimonial4 />
                <Blog4 />
            </Layout>
        </>
    )
}