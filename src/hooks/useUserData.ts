import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../shared/context/tokenContext";

interface IUserData {
    name?: string;
    iconImg?: string;
  }

export function useUserData() {
  const [data, setData] = useState<IUserData>({});
  const token = useContext(tokenContext)

  useEffect (() => {
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: { Authorization: `bearer ${token}`,
    }
    })
    .then((resp) => {
      const userData = resp.data;
      setData({ name: userData.account.name, iconImg: userData.account.profileImg });

    })
    .catch(function(error) {
      console.log(error);
  });
    }, [token]) 

    return [data]

}


// useEffect(() => {
//   const sendPostRequest = async () => {
//       const resp = await axios.get('https://oauth.reddit.com/api/v1/me', {
//         headers: { Authorization: `bearer ${token}` }
//       })
//       .then((resp) => {
//         const userData = resp.data;
//         setData({ name: userData.name, iconImg: userData.icon_img });
//       })
//      }
//       }, [token])