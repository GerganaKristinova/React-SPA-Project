import { useEffect, useState } from "react";

import * as crystalService from '../../../services/crystalService'
import RawGemsListItem from "./raw-gems-list-item/RawGemsListItem";
import Categories from "../Categories";

export default function RawGems() {
    const [rawGems, setRawGems] = useState([]);

    useEffect(() => {
        crystalService.getAllRawGems()
            .then(result => setRawGems(result))
    }, [])

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-3">
                    <Categories />
                </div>
                <div className="col-lg-9">
                    <div className="row">
                    <h3>Raw Gems</h3>
                        {rawGems.map(rawGem => (
                            <RawGemsListItem key={rawGem._id} {...rawGem} />
                        ))}

                        {rawGems.length === 0 && (
                            <h3 className="no-posts">No gem posts created yet!</h3>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}