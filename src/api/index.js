import { BASE_URL } from "./api";

export const getPosts = async () => {
	const response = await fetch(`${BASE_URL}`)
	
	return response.json()
}
