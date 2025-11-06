import Card from "./Card";


export default function Catalogue({ comics }) {


    return (
        <div className="container">
            <p className="bg-primary text-center p-2 position-absolute current_cat">CURRENT SERIES</p>
            <div className="row py-5">

                {
                    comics.map(comic => (

                        <Card
                            key={comic.id}
                            id={comic.id}
                            thumb={comic.thumb}
                            series={comic.series}
                        />

                    ))
                }

            </div>
        </div>
    )
}