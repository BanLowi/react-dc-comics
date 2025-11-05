import BlueBanner from "./Banner";
import Catalogue from "./Catalogue";

export default function Main() {

    return (
        <main>
            <section id="jumbotron">

            </section>

            <section className="bg-dark text-white">
                <Catalogue />
            </section>

            <BlueBanner />

        </main>
    )
}