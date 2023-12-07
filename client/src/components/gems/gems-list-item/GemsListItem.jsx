import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import AuthContext from "../../../contexts/authContext";
import * as gemsService from '../../../services/gemsService'

export default function GemsListItem({
    _id,
    imageUrl,
    crystal,
    specifics,
    zodiac,
    energy,
    category,
    _ownerId, }) {
    
    const navigate = useNavigate()
    const { isAuthenticated, userId } = useContext(AuthContext)

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${crystal}`);

        if (hasConfirmed) {
            await gemsService.deleteGem(_id);

            switch (category) {
                case "raw-gems":
                    navigate('/gems/raw-gems')
                    break;
                case "tumbled-gems":
                    navigate('/gems/tumbled-gems')
                    break;
                case "shaped-gems":
                    navigate('/gems/shaped-gems')
                    break;
                default:
                    navigate('/404')
                    break;
            }
        }
    }


    return (
        <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src={imageUrl} />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                            {isAuthenticated && userId !== _ownerId && (
                                <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                            )}
                            <li><Link className="btn btn-success text-white mt-2" to={`/gems/${category}/${_id}`}><i className="far fa-eye"></i></Link></li>
                            {isAuthenticated && userId === _ownerId && (
                                <>
                                    <li><Link className="btn btn-success text-white mt-2" to={`/gems/${category}/edit/${_id}`}><FontAwesomeIcon icon={faPen} /></Link></li>
                                    <li><Link className="btn btn-success text-white mt-2" onClick={deleteButtonClickHandler}><FontAwesomeIcon icon={faTrashCan} /></Link></li>
                                </>
                            )}
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