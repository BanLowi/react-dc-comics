import BlueBanner from "./Banner";
import Catalogue from "./Catalogue";

export default function Main({ comics }) {

    return (
        <main>
            <section id="jumbotron">

            </section>

            <section className="bg-dark text-white">
                <Catalogue comics={comics} />
            </section>

            <BlueBanner />

        </main>
    )
}