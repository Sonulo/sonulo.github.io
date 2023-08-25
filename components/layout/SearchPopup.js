
export default function SearchPopup({ isSearch,handleSearch }) {
    return (
        <>
            <div id="search-popup" className={`search-popup ${isSearch ? "popup-visible" : ""}`}>
                <div className="close-search" onClick={handleSearch}><i className="fa fa-times" /></div>
                <div className="popup-inner">
                    <div className="overlay-layer" />
                    <div className="search-form">
                        <fieldset>
                            <form role="search" method="get" action="#">
                                <input type="search" className="search" placeholder="Search..." name="s" title="Search" />
                                <button type="submit" className="sch_btn"> <i className="icon-search" /></button>
                            </form>
                        </fieldset>
                    </div>
                </div>
            </div>

        </>
    )
}
