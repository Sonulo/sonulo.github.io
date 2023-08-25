import Layout from "@/components/layout/Layout"
import About6 from "@/components/sections/About6"
import Blog7 from "@/components/sections/Blog7"
import Client3 from "@/components/sections/Client3"
import Contact3 from "@/components/sections/Contact3"
import Contact4 from "@/components/sections/Contact4"
import Contact5 from "@/components/sections/Contact5"
import HeroSlider7 from "@/components/sections/HeroSlider7"
import Project6 from "@/components/sections/Project6"
import Service8 from "@/components/sections/Service8"
import Team5 from "@/components/sections/Team5"
import Testimonial6 from "@/components/sections/Testimonial6"

export default function Home7() {
    return (
        <>
            <Layout headerStyle={7} footerStyle={7}>
                <HeroSlider7 />
                <Service8 />
                <About6 />
                <Project6 />
                <Contact3 />
                <Contact4 />
                <Team5 />
                <Testimonial6 />
                <Client3 />
                <Blog7 />
                <Contact5 />
            </Layout>
        </>
    )
}