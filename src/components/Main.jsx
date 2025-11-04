import DigitalComicsImg from "../assets/img/buy-comics-digital-comics.png";
import MerchandiseImg from "../assets/img/buy-comics-merchandise.png";
import ShopLocatorImg from "../assets/img/buy-comics-shop-locator.png";
import SubscriptionsImg from "../assets/img/buy-comics-subscriptions.png";
import VisaImg from "../assets/img/buy-dc-power-visa.svg";

export default function Main() {

    return (
        <main>

            <section className="bg-dark text-white">
                <h1 className="container py-5 mb-0">--&gt; Content goes here &lt;--</h1>
            </section>

            <section className="bg-primary text-white">
                <div className="container">

                    <div className="row justify-content-evenly align-items-center py-5">
                        <div className="col-2">
                            <img src={DigitalComicsImg} alt="" width={50} />
                            <span className="mx-2">DIGITAL COMICS</span>
                        </div>
                        <div className="col-2">
                            <img src={MerchandiseImg} alt="" width={50} />
                            <span className="mx-2">DC MERCHANDISE</span>
                        </div>
                        <div className="col-2">
                            <img src={SubscriptionsImg} alt="" width={50} />
                            <span className="mx-2">SUBSCRIPTION</span>
                        </div>
                        <div className="col-2">
                            <img src={ShopLocatorImg} alt="" width={35} />
                            <span className="mx-2">COMIC SHOP LOCATOR</span>
                        </div>
                        <div className="col-2">
                            <img src={VisaImg} alt="" width={50} />
                            <span className="mx-2">DC POWER VISA</span>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}