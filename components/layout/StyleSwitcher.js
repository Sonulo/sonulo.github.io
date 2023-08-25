import Link from "next/link"

export default function StyleSwitcher() {
    return (
        <>
            <div className="style-switcher">
                <Link href="#" id="switcher-toggler"><i className="fa fa-cog" /></Link>
                <h3>Color Skins</h3>
                <ul id="colorschemeOptions" title="Switch Color" data-css-path="assets/css/scss/elements/color-switcher/">
                    <li>
                        <Link href="#" data-theme="color" style={{ backgroundColor: '#078586' }}> </Link>
                    </li>
                    <li>
                        <Link href="#" data-theme="color1" style={{ backgroundColor: '#e5102a' }}> </Link>
                    </li>
                    <li>
                        <Link href="#" data-theme="color2" style={{ backgroundColor: '#3ead3c' }}> </Link>
                    </li>
                    <li>
                        <Link href="#" data-theme="color3" style={{ backgroundColor: '#fed000' }}> </Link>
                    </li>
                    <li>
                        <Link href="#" data-theme="color4" style={{ backgroundColor: '#ff5538' }}> </Link>
                    </li>
                    <li>
                        <Link href="#" data-theme="color5" style={{ backgroundColor: '#246af4' }}> </Link>
                    </li>
                </ul>
            </div>

        </>
    )
}
