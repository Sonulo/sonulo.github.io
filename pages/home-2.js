import Layout from "@/components/layout/Layout"
import Blog2 from "@/components/sections/Blog2"
import Client1 from "@/components/sections/Client1"
import HeroSlider2 from "@/components/sections/HeroSlider2"
import ImageBox1 from "@/components/sections/ImageBox1"
import Price1 from "@/components/sections/Price1"
import Service2 from "@/components/sections/Service2"
import Service3 from "@/components/sections/Service3"
import Tab1 from "@/components/sections/Tab1"
import Team2 from "@/components/sections/Team2"
import Testimonial1 from "@/components/sections/Testimonial1"

export default function Home2() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <HeroSlider2 />
                <Service2 />
                <ImageBox1 />
                <Client1 />
                <Service3 />
                <Team2 />
                <Tab1 />
                <Price1 />
                <Testimonial1 />
                <Blog2 />
            </Layout>
        </>
    )
}