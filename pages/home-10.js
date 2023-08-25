import Layout from "@/components/layout/Layout"
import About8 from "@/components/sections/About8"
import Banner2 from "@/components/sections/Banner2"
import Blog10 from "@/components/sections/Blog10"
import Contact7 from "@/components/sections/Contact7"
import Content3 from "@/components/sections/Content3"
import Project5 from "@/components/sections/Project5"
import Service10 from "@/components/sections/Service10"
import Service11 from "@/components/sections/Service11"

export default function Home10() {
    return (
        <>
            <Layout headerStyle={10} footerStyle={10}>
                <Banner2 />
                <Service10 />
                <About8 />
                <Service11 />
                <Content3 />
                <Project5 />
                <Contact7 />
                <Blog10 />
            </Layout>
        </>
    )
}