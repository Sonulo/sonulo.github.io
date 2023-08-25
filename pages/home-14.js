import Layout from "@/components/layout/Layout"
import About12 from "@/components/sections/About12"
import Blog14 from "@/components/sections/Blog14"
import Contact10 from "@/components/sections/Contact10"
import Feature from "@/components/sections/Feature"
import HeroSlider12 from "@/components/sections/HeroSlider12"
import ImageBox2 from "@/components/sections/ImageBox2"
import Process7 from "@/components/sections/Process7"
import Project11 from "@/components/sections/Project11"
import Service15 from "@/components/sections/Service15"
import Team7 from "@/components/sections/Team7"
import Testimonial11 from "@/components/sections/Testimonial11"

export default function Home14() {
    return (
        <>
            <Layout headerStyle={14} footerStyle={14}>
                <HeroSlider12 />
                <Feature />
                <About12 />
                <Process7 />
                <ImageBox2 />
                <Service15 />
                <Project11 />
                <Team7 />
                <Testimonial11 />
                <Contact10 />
                <Blog14 />
            </Layout>
        </>
    )
}