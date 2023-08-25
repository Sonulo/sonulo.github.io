import Layout from "@/components/layout/Layout"
import About13 from "@/components/sections/About13"
import Banner3 from "@/components/sections/Banner3"
import Blog15 from "@/components/sections/Blog15"
import Client7 from "@/components/sections/Client7"
import Contact11 from "@/components/sections/Contact11"
import Process8 from "@/components/sections/Process8"
import Project12 from "@/components/sections/Project12"
import Service16 from "@/components/sections/Service16"
import Tab2 from "@/components/sections/Tab2"
import Video2 from "@/components/sections/Video2"

export default function Home15() {
    return (
        <>
            <Layout headerStyle={15} footerStyle={15}>
                <Banner3 />
                <Client7 />
                <Process8 />
                <Video2 />
                <Service16 />
                <Tab2 />
                <Project12 />
                <About13 />
                <Blog15 />
                <Contact11 />
            </Layout>
        </>
    )
}