import { auth } from "../public/firebase/firebase";
import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser();
      }
    });
  }, []);

  return [user];
};

export default useUser;
