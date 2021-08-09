import Axios from "../../api/apiService";

export async function authHandler(req){
  const { cookies } = req;
  const { bitlite_session_id: bitliteSessionId } = cookies

  if(bitliteSessionId){
    let [data, error] = [null, null];

    try {
      const res = await Axios.get("user", {
        headers: {
          Authorization: `Bearer ${bitliteSessionId}`
        }
      })
      data = res.data;
    }
    catch (e) {
      error = e;
    }
    if(error){
      return {
        isError: true
      }
    }
    return {
      user: data,
      bitliteSessionId,
    }
  }
  else{
    return {
      isError: true,
    }
  }
}