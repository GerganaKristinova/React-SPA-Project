import { useEffect, useState } from "react";

import * as crystalService from '../../../services/crystalService'
import Categories from "../Categories";
import TumbledGemsListItem from "./tumbled-gems-list-item/TumbledGemsListItem";

export default function TumbledGems() {
    const [tumbledGems, setTumbledGems] = useState([]);

    useEffect(() => {
        crystalService.getAllTumbledGems()
            .then(result => setTumbledGems(result))
    }, [])

    return (
        <div className="container py-5">
            <div className="row">
                <Categories />
                
                <div className="col-lg-9">
                    {tumbledGems.map(tumbledGem => (
                        <TumbledGemsListItem key={tumbledGem._id} {...tumbledGem} />
                    ))}

                    {tumbledGems.length === 0 && (
                        <h3 className="no-posts">No gem posts created yet!</h3>
                    )}
                </div>

            </div>
        </div>
    )
}
