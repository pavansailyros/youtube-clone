import axios from "axios";
 const BASE_URL= 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      part: 'snippet',
     Id: 'M7FIvfx5J10'
    },
    headers: {
      // 'X-RapidAPI-Key': '46566f731fmsh8b049b6817aa796p129d20jsn5bcf230eb644',
         'X-RapidAPI-Key': '46566f731fmsh8b049b6817aa796p129d20jsn5bcf230eb644',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data;

  }