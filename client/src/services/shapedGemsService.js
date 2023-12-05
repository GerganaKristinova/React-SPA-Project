import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/shaped-gems'

export const getAllShapedGems = async () => {
    const result = await request.get(`${baseUrl}`)

    return Object.values(result);
};

export const getOneShapedGem = async (shapedGemId) => {
    const result = await request.get(`${baseUrl}/${shapedGemId}`)

    return result;
}

export const createShapedGems = async (postData) => {
    const result = await request.post(`${baseUrl}`, postData)

    return result;
}
