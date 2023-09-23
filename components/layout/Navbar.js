import Link from "next/link"
import { useRouter } from "next/router"
export default function Navbar() {
    const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}
            <ul id="myNavbar" className="navbar_nav">
                <li className="menu-item  nav-item">
                    <Link href="/" className="dropdown-item nav-link">
                        <span>Home</span>
                    </Link>
                </li>
                <li className="menu-item  nav-item">
                    <Link href="/service-classic" className="dropdown-item nav-link">
                        <span>Services</span>
                    </Link>
                </li>
                <li className="menu-item  nav-item">
                    <Link href="/about-us" className="dropdown-item nav-link">
                        <span>About Us</span>
                    </Link>
                </li>
                <li className="menu-item  nav-item">
                    <Link href="/contact" className="dropdown-item nav-link">
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </>
    )
}
