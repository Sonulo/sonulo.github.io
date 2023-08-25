import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Blog3 from "@/components/sections/Blog3"
import Cta from "@/components/sections/Cta"
import Faqs from "@/components/sections/Faqs"
import FunFacts from "@/components/sections/FunFacts"
import HeroSlider3 from "@/components/sections/HeroSlider3"
import Project2 from "@/components/sections/Project2"
import Service4 from "@/components/sections/Service4"
import Testimonial6 from "@/components/sections/Testimonial6"

export default function Home3() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <HeroSlider3 />
                <Service4 />
                <About2 />
                <Cta />
                <FunFacts />
                <Faqs />
                <Project2 />
                <Testimonial6 />
                <Blog3 />
            </Layout>
        </>
    )
}