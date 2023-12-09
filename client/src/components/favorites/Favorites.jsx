import { useContext, useEffect, useState } from "react"

import AuthContext from "../../contexts/authContext"
import FavoritesListItem from "./favorites-list-item/FavoritesListItem"
import * as favoritesService from '../../services/favoritesService'

export default function Favorites() {

    const { userId } = useContext(AuthContext)
    const [currentFavorites, setCurrentFavorites] = useState([])

    useEffect(() => {
        favoritesService.myFavorites(userId)
            .then(setCurrentFavorites)
    }, [])

    const removeFromFavoritesHandler = (gemId, gemName) => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${gemName}`);
        if (hasConfirmed) {
            favoritesService.deleteFavorite(gemId)
        }

        this.setCurrentFavorites({ state: this.state })
    }

    return (
        <div className="container py-5">

            <div className="row">
                <h2 className="text-center" style={{ marginTop: '10px', color: '#702963', fontSize: 'em' }}>Favorites</h2>
                {currentFavorites.map(favorite => (
                    <FavoritesListItem key={favorite._id} {...favorite} removeFromFavoritesHandler={removeFromFavoritesHandler} />
                ))}
                {currentFavorites.length === 0 && (
                    <h3 className="text-center">There are no posts added to favorites yet!</h3>
                )}
            </div>
        </div>
    )
}