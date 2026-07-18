import { API_KEY, BASE_URL } from "../constants/api";

export const searchMovies = async (search) => {
    try {
        const response = await fetch(
            `${BASE_URL}?apikey=${API_KEY}&s=${search}`
        );

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};