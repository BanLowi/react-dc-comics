import FacebookImg from "../assets/img/footer-facebook.png";
import PeriscopeImg from "../assets/img/footer-periscope.png";
import PinterestImg from "../assets/img/footer-pinterest.png";
import TwitterImg from "../assets/img/footer-twitter.png";
import YoutubeImg from "../assets/img/footer-youtube.png";

export default function Footer() {

    return (
        <footer>

            <div className="container py-5">

                <div className="row text-white">
                    <div className="col-2">
                        <h4>DC COMICS</h4>
                        <ul class="list-unstyled">
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h4>DC</h4>
                        <ul className="list-unstyled">
                            <li>Terms Of Use</li>
                            <li>Privacy policy(New)</li>
                            <li>Ad Choises</li>
                            <li>Advertisong</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshop</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h4>SITES</h4>
                        <ul className="list-unstyled">
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC PowerVisa</li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <h4>SHOP</h4>
                        <ul className="list-unstyled">
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>
                </div>

            </div> {/* Footer Menus */}



            <div className="bg-dark">

                <div className="container d-flex justify-content-between">

                    <button className="btn btn-sm btn-dark border-primary rounded-0 my-3">SIGN-UP NOW!</button>

                    <div>
                        <nav class="navbar navbar-expand-lg bg-body-transparent">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">FOLLOW US</a>
                                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div class="navbar-nav">
                                        <a class="nav-link" href="#">
                                            <img src={FacebookImg} alt="" />
                                        </a>
                                        <a class="nav-link" href="#">
                                            <img src={TwitterImg} alt="" />
                                        </a>
                                        <a class="nav-link" href="#">
                                            <img src={YoutubeImg} alt="" />
                                        </a>
                                        <a class="nav-link" href="#">
                                            <img src={PinterestImg} alt="" />
                                        </a>
                                        <a class="nav-link" href="#">
                                            <img src={PeriscopeImg} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>



                </div>

            </div> {/* Footer Socials */}

        </footer>
    )
}