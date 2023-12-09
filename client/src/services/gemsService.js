import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/gems'

export const getAllGems = async () => {
    const result = await request.get(`${baseUrl}`)

    return Object.values(result);
};

export const getAllRawGems = async () => {
    const query = new URLSearchParams({
        where: 'category="raw-gems"',
    });

    const result = await request.get(`${baseUrl}?${query}`)

    return Object.values(result);
};

export const getAllTumbledGems = async () => {
    const query = new URLSearchParams({
        where: 'category="tumbled-gems"',
    });
    const result = await request.get(`${baseUrl}?${query}`)

    return Object.values(result);
};

export const getAllShapedGems = async (category) => {
    const query = new URLSearchParams({
        where: 'category="shaped-gems"',
    });
    const result = await request.get(`${baseUrl}?${query}`)

    return Object.values(result);
};


export const getOneGem = async (gemId) => {
    const result = await request.get(`${baseUrl}/${gemId}`)

    return result;
}

export const createGems = async (postData) => {
    const result = await request.post(`${baseUrl}`, postData)

    return result;
}

export const editGem = async (gemId, data) => {
    const result = await request.put(`${baseUrl}/${gemId}`, data)

    return result;
}

export const deleteGem = (gemId) => request.remove(`${baseUrl}/${gemId}`);

export const getLatest = async () => {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}


