import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore'

export const getAllRawGems = async () => {
    const result = await request.get(`${baseUrl}/raw-gems`)

    return Object.values(result);
};

export const getOneRawGem = async (rawGemId) => {
    const result = await request.get(`${baseUrl}/raw-gems/${rawGemId}`)

    return result;
}

export const createRawGems = async (postData) => {
    const result = await request.post(`${baseUrl}/raw-gems`, postData)

    return result;
}



