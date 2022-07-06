
import axios from 'axios';


export const getPlacesData = async (type,sw,ne) => {
  try {
    const {data:{data}} = await axios.get( `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
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