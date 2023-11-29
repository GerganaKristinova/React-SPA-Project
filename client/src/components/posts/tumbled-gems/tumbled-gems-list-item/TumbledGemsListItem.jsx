export default function TumbledGemsListItem({
    _id,
    imageUrl,
    crystal,
    specifics,
    zodiac,
    energy,
}) {
    return (
        <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src={imageUrl} />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                            <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                            <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <p className="text-center mb-0 heading">{crystal}</p>
                    <p className="text-center mb-0"><span>Energy:</span> {energy}</p>
                    <p className="text-center mb-0"><span>Specifics:</span> {specifics}</p>
                    <p className="text-center mb-0"><span>Zodiac sign:</span> {zodiac}</p>
                </div>
            </div>
        </div>
    )
}