import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/raw-gems'

export const getAllRawGems = async () => {
    const result = await request.get(`${baseUrl}`)

    return Object.values(result);
};

export const getOneRawGem = async (rawGemId) => {
    const result = await request.get(`${baseUrl}/${rawGemId}`)

    return result;
}

export const createRawGems = async (postData) => {
    const result = await request.post(`${baseUrl}`, postData)

    return result;
}



