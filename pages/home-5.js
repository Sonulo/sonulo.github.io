import Layout from "@/components/layout/Layout"
import About4 from "@/components/sections/About4"
import Blog5 from "@/components/sections/Blog5"
import Contact1 from "@/components/sections/Contact1"
import HeroSlider5 from "@/components/sections/HeroSlider5"
import IconBox from "@/components/sections/IconBox"
import Process3 from "@/components/sections/Process3"
import Project4 from "@/components/sections/Project4"
import Service6 from "@/components/sections/Service6"
import Team4 from "@/components/sections/Team4"
import Testimonial5 from "@/components/sections/Testimonial5"

export default function Home5() {
    return (
        <>
            <Layout headerStyle={5} footerStyle={5}>
                <HeroSlider5 />
                <IconBox />
                <About4 />
                <Service6 />
                <Process3 />
                <Project4 />
                <Contact1 />
                <Team4 />
                <Testimonial5 />
                <Blog5 />
            </Layout>
        </>
    )
}