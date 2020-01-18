import axios from 'axios';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const chartUrl = "https://api.deezer.com/chart"

/*
Function fetches data from deezer app and returns the result which will be used all over the app
*/
export async function getChart () {
	try {
	const response = await axios.get(PROXY_URL + chartUrl);
	const result = response.data
	return result
   }catch(error) {
   	return error
   }
}