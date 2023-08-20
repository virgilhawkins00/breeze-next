import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios


export const getSemcode = (username) => async dispatch => {

    let jwtToken = await AsyncStorage.getItem('jwtToken').then((data) => {
          console.log('this is semcode',data);
      });   
  
  
      let config = {
        method: 'POST',
        url: 'url/to/sem',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            AntiTemperSignature: jwtToken,
            UserID: '123456',
          },
          data: '',
        json: true
      };
  
    try {
      return axios(config)
       .then((response) => {
         console.log(response);
         if (response.data.length > 0) {
             const { code } = response.data;
             dispatch({ type: SEMCODE_FETCH_SUCCESS, payload: { semCode: code } });
         }
       })
       .catch((error) => {
         console.log(error);
       });
     }
  }