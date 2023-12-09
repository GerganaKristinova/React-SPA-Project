import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import AuthContext from "../../../contexts/authContext";
import * as gemsService from '../../../services/gemsService'
import * as favoritesService from '../../../services/favoritesService'


export default function GemsListItem(gem) {
    const navigate = useNavigate()
    const { isAuthenticated, userId } = useContext(AuthContext)
    const [isFavorited, setIsFavorited] = useState()

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${gem.crystal}`);

        if (hasConfirmed) {
            await gemsService.deleteGem(gem._id);

            switch (gem.category) {
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

    const addToFavoritesHandler = async (gemId, favoritedGem) => {
        if (isFavorited?.gemId === gemId) {
            alert('gem already added');
        } else {
            const result = await favoritesService.add(gemId, favoritedGem)
            setIsFavorited(result)
        }
    }


    return (
        <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src={gem.imageUrl} />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                            {isAuthenticated &&
                                userId !== gem._ownerId && (
                                    <li><button type="button" className="btn btn-success text-white" onClick={() => addToFavoritesHandler(gem._id, gem)}><FontAwesomeIcon icon={faHeart} /></button></li>
                                )}
                            <li><Link className="btn btn-success text-white mt-2" to={`/gems/${gem.category}/${gem._id}`}><i className="far fa-eye"></i></Link></li>

                            {isAuthenticated && userId === gem._ownerId && (
                                <>
                                    <li><Link className="btn btn-success text-white mt-2" to={`/gems/${gem.category}/edit/${gem._id}`}><FontAwesomeIcon icon={faPen} /></Link></li>
                                    <li><Link className="btn btn-success text-white mt-2" onClick={deleteButtonClickHandler}><FontAwesomeIcon icon={faTrashCan} /></Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <p className="text-center mb-0 heading">{gem.crystal}</p>
                    <p className="text-center mb-0"><span>Energy:</span> {gem.energy}</p>
                    <p className="text-center mb-0"><span>Specifics:</span> {gem.specifics}</p>
                    <p className="text-center mb-0"><span>Zodiac sign:</span> {gem.zodiac}</p>
                </div>
            </div>
        </div>
    )
}