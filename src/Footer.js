import { FootersLinksData } from "./DataBook";

function Footer() {
    return (
        <section className="container-fluid " id="footer">
            <div className="row footer-container">

                <div className=" col-sm-12 col-md-6 col-lg-3">
                    <div className="footer-info">
                        <h4>About Us</h4>

                        {FootersLinksData.Aboutus.map(({ link, linkname }, index) => (
                            <li key={index}>
                                <a href={link} className="">{linkname}</a>
                            </li>
                        ))}
                    </div>

                </div>


                <div className=" col-sm-12 col-md-6 col-lg-3">
                    <div  className="footer-info">
                        <h4>Discover</h4>

                        {FootersLinksData.Discover.map(({ link, linkname }, index) => (
                            <li key={index}>
                                <a href={link} className="">{linkname}</a>
                            </li>
                        ))}
                    </div>

                </div>


                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div  className="footer-info">
                        <h4>My Account</h4>

                        {FootersLinksData.Myaccount.map(({ link, linkname }, index) => (
                            <li key={index}>
                                <a href={link} className="">{linkname}</a>
                            </li>
                        ))}

                    </div>
                </div>


                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div  className="footer-info">
                        <h4>Help</h4>

                        {FootersLinksData.Help.map(({ link, linkname }, index) => (
                            <li key={index}>
                                <a href={link} className="">{linkname}</a>
                            </li>
                        ))}
                    </div>

                </div>
            </div>

            {/* {Copyright Section} */}
            <div className="container text-center mt-4" id="Copyright">
                <p>© <span>Copyright</span> <strong className="sitename">BookBazaar</strong> <span>All Rights Reserved</span></p>
                <div className="credits">
                    Designed by <span>Omkar Raut</span>
                </div>
            </div>
        </section>
    );
}

export default Footer;
