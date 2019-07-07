import React from "react";
import { Auth } from "aws-amplify";
import { Flex, Box, Text, Button, Heading } from "@modulz/radix";
import { useScreenTitle } from '../../components/ScreenTitle'

export function Header() {
  const [user, setUser] = React.useState();
  const title = useScreenTitle();
  React.useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(user => {
        console.log(user);
        setUser(user);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px={5} py={4}
      height={64}
      borderBottom={[0, "1px solid"]}
      borderColor={["grays.2", "grays.2"]}
    >
      <Heading>{title}</Heading>
      <Box>
      {user && <Text mr={3}>{user.attributes.email}</Text>}
      <Button onClick={() => Auth.signOut()}>Cerrar Sesion</Button>
      </Box>
    </Flex>
  );
}
