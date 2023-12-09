import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/favorites'

export const myFavorites = async (userId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return Object.values(result);
}

export const add = async (gemId, favoritedGem) => {
    const result = await request.post(baseUrl, {
        gemId,
        favoritedGem,
    })

    return result
};

export const deleteFavorite = (gemId) => { request.remove(`${baseUrl}/${gemId}`)};
