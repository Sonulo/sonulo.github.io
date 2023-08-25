export default function Preloader() {
    return (
        <>
            <div className="preloader-wrap">
                <div className="preloader" style={{ backgroundImage: 'url(/assets/images/preloader.gif)' }}>
                </div>
                <div className="overlay" />
            </div>
        </>
    )
}
