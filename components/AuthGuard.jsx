import React from "react";

const AuthGuard = (props) => {
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //   } else {
  //   }
  // });

  return <div>{props.children}</div>;
};

export default AuthGuard;
