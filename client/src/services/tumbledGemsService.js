import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore'

export const getAllTumbledGems = async () => {
    const result = await request.get(`${baseUrl}/tumbled-gems`)

    return Object.values(result);
};

export const getOneTumbledGem = async (tumbledGemId) => {
    const result = await request.get(`${baseUrl}/tumbled-gems/${tumbledGemId}`)

    return result;
}

export const createTumbledGems = async (postData) => {
    const result = await request.post(`${baseUrl}/tumbled-gems`, postData)

    return result;
}