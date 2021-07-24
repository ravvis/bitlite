import { useEffect } from "react"
import locationHashParser from "parse-location-hash";
import {useRouter} from "next/router";
export default function Auth(){

  const router = useRouter();
  useEffect(() => {
    const hash = locationHashParser(window.location.hash);
    const { access_token } = hash;
    document.cookie = `bitlite_session_id=${access_token};`;
    router.push("/");
  })

  return <h4>
    Please wait...
  </h4>
}