import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"

import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/owl.css"
import "../public/assets/css/flexslider.css"
import "../public/assets/css/font-awesome.min.css"
import "../public/assets/css/icomoon.css"
import "../public/assets/css/jquery.fancybox.min.css"
import "../public/assets/css/scss/elements/theme-css.css"
import "../public/assets/css/style.css"
import "../public/assets/css/woocommerce-layout.css"
import "../public/assets/css/woocommerce.css"


function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])
    return (
        <>
            <title>OrianX - All Solutions that you need</title>
            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <Preloader />
            )}
        </>
    )
} export default MyApp
