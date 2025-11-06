export default function Card(props) {



    return (
        <div key={props.id} className="col-2">
            <div className="card bg-transparent border-0 rounded-0">

                <div className="card-header border-0">
                    <div className="img_box">
                        <img src={props.thumb} className="img-fluid" alt={props.series} />
                    </div>
                </div>

                <div className="card-body">
                    <p className="card-text text-white">{props.series.toUpperCase()}</p>
                </div>

            </div>
        </div>
    )
}