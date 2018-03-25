import axios from "axios";

export const usda = axios.create({
	//baseURL: 'https://some-domain.com/api/',
	timeout: 1000,
	headers: {"X-Custom-Header": "foobar"}
});

export const nutrix = axios.create({
	baseUrl: "https://trackapi.nutritionix.com/v2/natural/",
	timeout: 1000,
	headers: {
		"Content-Type" : "application/json",
		"x-app-id" : "b0cbef83",
		"x-app-key" : "ced592a9f740d39a5b1c31bd7902f488"
	}
});
