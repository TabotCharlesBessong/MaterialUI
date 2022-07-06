
import axios from 'axios';

const URL =  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'





export const getPlacesData = async (sw,ne) => {
  try {
    const {data:{data}} = await axios.get(URL,{
      params: {
      bl_latitude: sw.lat,
      tr_latitude:ne.lat ,
      bl_longitude:sw.lng ,
      tr_longitude:ne.lng ,
    
      },
      headers: {
      'X-RapidAPI-Key':   'aa90f9069dmsh77129c141cac057p10e255jsn3b7b6110ee58',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
       }
    }
    )

    
    return data
  } catch (error) {
    
  }
}