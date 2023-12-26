import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    try {
        const result = await request.post(`${baseUrl}/login`, {
            email,
            password,
        });

        return result;
    } catch (error) {
        throw error
    }

};

export const register = async (email, password, username, imageUrl, description) => {
try {
    const result = await request.post(`${baseUrl}/register`, {
        email,
        password,
        username,
        imageUrl,
        description,
    });
    return result;
} catch (error) {
    throw error
}
    
}

export const logout = () => request.get(`${baseUrl}/logout`);

export const getOneProfile = () => {
    const result = request.get(`${baseUrl}/me`)

    return result
}