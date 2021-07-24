import Axios from "../../api/apiService";

export async function authHandler(req){
  const { cookies } = req;
  const { bitlite_session_id } = cookies

  if(bitlite_session_id){
    let [data, error] = [null, null];
    await Axios.get("user", {
      headers: {
        Authorization: `Bearer ${bitlite_session_id}`
      }
    })
      .then((res) => {
        data = res.data;
      })
      .catch((err) => {
        error = err
      })

    return {
      props : {
        user: data
      }
    }
  }
  else{
    return {
      props: {},
      redirect: {
        destination: 'https://bitbucket.org/site/oauth2/authorize?client_id=xn9n6AsXaK8fwGCeQY&response_type=token',
      },
    }
  }
}