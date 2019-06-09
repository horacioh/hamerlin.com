import React from "react";
import { Auth } from "aws-amplify";

export function Header() {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(user => {
        console.log(user)
        setUser(user);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%', padding: 16}}>
      <p>{user ? user.attributes.email : ""}</p>
      <button onClick={() => Auth.signOut()}>Cerrar Sesion</button>
    </div>
  );

}
