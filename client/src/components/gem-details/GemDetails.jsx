import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as rawGemsService from '../../services/rawGemsService'
import * as tumbledGemsService from '../../services/tumbledGemsService'
import * as shapedGemsService from '../../services/shapedGemsService'

export default function GemDetails() {
    const navigate = useNavigate();
    const [gemDetails, setGemDetails] = useState({});
    const { gemType, gemId } = useParams()

    useEffect(() => {

        switch (gemType) {
            case 'raw-gem':
                rawGemsService.getOneRawGem(gemId)
            .then(setGemDetails);
            break;
            case 'tumbled-gem':
                tumbledGemsService.getOneTumbledGem(gemId)
            .then(setGemDetails);
            break;
            case 'shaped-gem':
                shapedGemsService.getOneShapedGem(gemId)
            .then(setGemDetails);
            break;
            default:
                navigate('/404')
            break;
        }
        
    }, [gemType, gemId]);

    return (
        <section className="bg-light">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3">
                            <img className="card-img img-fluid" src={gemDetails.imageUrl} alt={gemDetails.crystal} id="product-detail" />
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h2">{gemDetails.crystal}</h1>
                                <br />
                                {/* Rating system 
                                <p className="py-2">
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-secondary"></i>
                                    <span className="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
                                </p> */}
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Energy:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="details"><strong>{gemDetails.energy}</strong></p>
                                    </li>
                                </ul>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Specifics:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="details"><strong>{gemDetails.specifics}</strong></p>
                                    </li>
                                </ul>

                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <h6>Cleansing:</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="details"><strong>{gemDetails.cleansing}</strong></p>
                                    </li>
                                </ul>

                                <h6>Summary:</h6>
                                <p className="details">{gemDetails.summary}</p>

                                    <input type="hidden" name="product-title" value="Activewear" />
                                    <div className="row pb-3">
                                        <div className="col d-grid">
                                            <button type="submit" className="btn btn-success btn-lg" name="submit" value="buy">Add to Favorites ♥</button>
                                        </div>
                                        <div className="col d-grid">
                                            <Link className="btn btn-success btn-lg link" to="/raw-gems">Back ↩</Link>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}