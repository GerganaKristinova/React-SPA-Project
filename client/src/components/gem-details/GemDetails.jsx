import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as gemsService from '../../services/gemsService'
import AuthContext from "../../contexts/authContext";

export default function GemDetails() {
    const navigate = useNavigate()
    const { userId } = useContext(AuthContext)
    const [gem, setGem] = useState({});
    const { gemType, gemId } = useParams();

    useEffect(() => {
        gemsService.getOneGem(gemId)
            .then(result => setGem(result));
    }, [gemType, gemId]);

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${gem.crystal}`);
        if (hasConfirmed) {
            await gemsService.deleteGem(gemId);
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
    return (
        <section className="bg-light">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3">
                            <img style={{ aspectRatio: "1/1", overflow: 'hidden', objectFit: 'cover' }} className="card-img img-fluid" src={gem.imageUrl} alt={gem.crystal} id="product-detail" />
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h2">{gem.crystal}</h1>
                                <br />
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Energy:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="details"><strong>{gem.energy}</strong></p>
                                    </li>
                                </ul>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Zodiac sign:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="details"><strong>{gem.zodiac}</strong></p>
                                    </li>
                                </ul>

                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Specifics:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="details"><strong>{gem.specifics}</strong></p>
                                    </li>
                                </ul>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Cleansing:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="details"><strong>{gem.cleansing}</strong></p>
                                    </li>
                                </ul>
                                <h6>Summary:</h6>
                                <p className="details">{gem.summary}</p>
                                <input type="hidden" name="product-title" value="Activewear" />
                                <div className="row pb-3">
                                    <div className="col d-grid">
                                        <Link className="btn btn-success btn-lg link" to={`/gems/${gemType}`}>Back ↩</Link>
                                    </div>
                                </div>
                                {userId === gem._ownerId && (
                                    <div className="row pb-3">
                                        <div className="col d-grid">
                                            <Link className="btn btn-success btn-lg link" to={`/gems/${gemType}/edit/${gemId}`}>Edit</Link>
                                        </div>
                                        <div className="col d-grid">
                                            <Link className="btn btn-success btn-lg link" onClick={deleteButtonClickHandler}>Delete</Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}