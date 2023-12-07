import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import * as gemsService from '../../services/gemsService'
import GemsListItem from "./gems-list-item/GemsListItem";


export default function Gems() {
    const [gems, setGems] = useState([]);
    const [title, setTitle] = useState('')

    let location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/gems') {
            gemsService.getAllGems()
                .then(result => setGems(result))
                .then(setTitle('All Gems'))
        } else if (location.pathname === '/gems/tumbled-gems') {
            gemsService.getAllTumbledGems()
                .then(result => setGems(result))
                .then(setTitle("Tumbled Gems"))
        } else if (location.pathname === '/gems/shaped-gems') {
            gemsService.getAllShapedGems()
                .then(result => setGems(result))
                .then(setTitle('Shaped Gems'))
        } else if (location.pathname === '/gems/raw-gems') {
            gemsService.getAllRawGems()
                .then(result => setGems(result))
                .then(setTitle('Raw Gems'))
        } else {
            navigate('/404')
        }

    }, [location])

    return (
        <div className="row">
            <h3 className="text-center">{title}</h3>
            {gems.map(gem =>
                <GemsListItem key={gem._id} {...gem} />
            )}

            {gems.length === 0 && (
                <h3 className="no-posts">No gem posts created yet!</h3>
            )}
        </div>

    )
}