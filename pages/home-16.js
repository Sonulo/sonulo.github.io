import Layout from "@/components/layout/Layout"
import About14 from "@/components/sections/About14"
import Banner4 from "@/components/sections/Banner4"
import Blog16 from "@/components/sections/Blog16"
import Contact12 from "@/components/sections/Contact12"
import Contact13 from "@/components/sections/Contact13"
import Process9 from "@/components/sections/Process9"
import Project13 from "@/components/sections/Project13"
import Service17 from "@/components/sections/Service17"
import Service18 from "@/components/sections/Service18"
import Testimonial12 from "@/components/sections/Testimonial12"

export default function Home16() {
    return (
        <>
            <Layout headerStyle={16} footerStyle={16}>
                <Banner4 />
                <Service17 />
                <About14 />
                <Service18 />
                <Process9 />
                <Contact12 />
                <Contact13 />
                <Project13 />
                <Testimonial12 />
                <Blog16 />
            </Layout>
        </>
    )
}