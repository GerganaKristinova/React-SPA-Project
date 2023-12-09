import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function FavoritesListItem({
    favoritedGem,
    _id,
    removeFromFavoritesHandler,
}) {

    return (
        <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src={favoritedGem.imageUrl} />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                            <li><Link className="btn btn-success text-white mt-2" to={`/gems/${favoritedGem.category}/${favoritedGem._id}`}><i className="far fa-eye"></i></Link></li>
                            <li><Link className="btn btn-success text-white mt-2" onClick={() => removeFromFavoritesHandler(_id, favoritedGem.crystal)}><FontAwesomeIcon icon={faTrashCan} /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <p className="text-center mb-0 heading">{favoritedGem.crystal}</p>
                    <p className="text-center mb-0"><span>Energy:</span>{favoritedGem.energy}</p>
                    <p className="text-center mb-0"><span>Specifics:</span>{favoritedGem.specifics}</p>
                    <p className="text-center mb-0"><span>Zodiac sign:</span>{favoritedGem.zodiac}</p>
                </div>
            </div>
        </div>
    )
}