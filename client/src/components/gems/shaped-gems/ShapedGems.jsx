import { useEffect, useState } from "react";

import * as shapedGemsService from "../../../services/shapedGemsService"
import GemsNavigation from "../GemsNavigation";
import ShapedGemsListItem from "./shaped-gems-list-item/ShapedGemsListItem";

export default function ShapedGems() {
    const [shapedGems, setShapedGems] = useState([]);

    useEffect(() => {
        shapedGemsService.getAllShapedGems()
            .then(result => setShapedGems(result))
    }, [])

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-3">
                    <GemsNavigation />
                </div>
                <div className="col-lg-9">
                    <div className="row">
                    <h3>Shaped Gems</h3>
                        {shapedGems.map(gem => (
                            <ShapedGemsListItem key={gem._id} {...gem} />
                        ))}

                        {shapedGems.length === 0 && (
                            <h3 className="no-posts">No gem posts created yet!</h3>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}