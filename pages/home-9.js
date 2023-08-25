import Layout from "@/components/layout/Layout"
import About7 from "@/components/sections/About7"
import Banner1 from "@/components/sections/Banner1"
import Blog9 from "@/components/sections/Blog9"
import Client2 from "@/components/sections/Client2"
import Contact6 from "@/components/sections/Contact6"
import Content1 from "@/components/sections/Content1"
import Content2 from "@/components/sections/Content2"
import Price1 from "@/components/sections/Price1"
import Process4 from "@/components/sections/Process4"
import Project7 from "@/components/sections/Project7"
import Service9 from "@/components/sections/Service9"
import Testimonial7 from "@/components/sections/Testimonial7"

export default function Home9() {
    return (
        <>
            <Layout headerStyle={9} footerStyle={9}>
                <Banner1 />
                <Client2 />
                <About7 />
                <Service9 />
                <Content1 />
                <Process4 />
                <Content2 />
                <Price1 />
                <Project7 />
                <Testimonial7 />
                <Blog9 />
                <Contact6 />
            </Layout>
        </>
    )
}