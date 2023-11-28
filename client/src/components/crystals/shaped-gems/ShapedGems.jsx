import { useEffect, useState } from "react";

import * as crystalService from '../../../services/crystalService'
import Categories from "../Categories";
import ShapedGemsListItem from "./shaped-gems-list-item/ShapedGemsListItem";

export default function ShapedGems() {
    const [shapedGems, setShapedGems] = useState([]);

    useEffect(() => {
        crystalService.getAllShapedGems()
            .then(result => setShapedGems(result))
    }, [])

    return (
        <div className="container py-5">
            <div className="row">
                <Categories />
                
                <div className="col-lg-9">
                    {shapedGems.map(shapedGem => (
                        <ShapedGemsListItem key={shapedGem._id} {...shapedGem} />
                    ))}

                    {shapedGems.length === 0 && (
                        <h3 className="no-posts">No gem posts created yet!</h3>
                    )}
                </div>

            </div>
        </div>
    )
}