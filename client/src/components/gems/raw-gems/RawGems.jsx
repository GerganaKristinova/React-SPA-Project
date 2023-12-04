import { useEffect, useState } from "react";

import * as rawGemsService from '../../../services/rawGemsService'
import RawGemsListItem from "./raw-gems-list-item/RawGemsListItem";
import GemsNavigation from "../GemsNavigation";

export default function RawGems() {
    const [rawGems, setRawGems] = useState([]);

    useEffect(() => {
        rawGemsService.getAllRawGems()
            .then(result => setRawGems(result))
    }, [])

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-3">
                    <GemsNavigation />
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