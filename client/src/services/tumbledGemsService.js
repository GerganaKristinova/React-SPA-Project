import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/tumbled-gems'

export const getAllTumbledGems = async () => {
    const result = await request.get(`${baseUrl}`)

    return Object.values(result);
};

export const getOneTumbledGem = async (tumbledGemId) => {
    const result = await request.get(`${baseUrl}/${tumbledGemId}`)

    return result;
}

export const createTumbledGems = async (postData) => {
    const result = await request.post(`${baseUrl}`, postData)

    return result;
}