import Layout from "@/components/layout/Layout"
import About9 from "@/components/sections/About9"
import Blog11 from "@/components/sections/Blog11"
import Content4 from "@/components/sections/Content4"
import HeroSlider9 from "@/components/sections/HeroSlider9"
import Process5 from "@/components/sections/Process5"
import Project5 from "@/components/sections/Project5"
import Service12 from "@/components/sections/Service12"
import Testimonial1 from "@/components/sections/Testimonial1"

export default function Home11() {
    return (
        <>
            <Layout headerStyle={11} footerStyle={11}>
                <HeroSlider9 />
                <Process5 />
                <About9 />
                <Service12 />
                <Content4 />
                <Project5 />
                <Testimonial1 />
                <Blog11 />
            </Layout>
        </>
    )
}