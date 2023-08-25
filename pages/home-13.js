import Layout from "@/components/layout/Layout"
import About11 from "@/components/sections/About11"
import Blog13 from "@/components/sections/Blog13"
import Client6 from "@/components/sections/Client6"
import Contact9 from "@/components/sections/Contact9"
import Content6 from "@/components/sections/Content6"
import Faq from "@/components/sections/Faq"
import HeroSlider11 from "@/components/sections/HeroSlider11"
import Price3 from "@/components/sections/Price3"
import Project10 from "@/components/sections/Project10"
import Service14 from "@/components/sections/Service14"
import Testimonial10 from "@/components/sections/Testimonial10"

export default function Home13() {
    return (
        <>
            <Layout headerStyle={13} footerStyle={13}>
                <HeroSlider11 />
                <About11 />
                <Client6 />
                <Service14 />
                <Content6 />
                <Project10 />
                <Testimonial10 />
                <Contact9 />
                <Price3 />
                <Faq />
                <Blog13 />
            </Layout>
        </>
    )
}