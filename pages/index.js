import {authHandler} from "../src/utils/auth-handler/authHandler";
import {useEffect} from "react";
import {getRepositories, getWorkspaces} from "bitq";

const Dashboard = ({ dataStore }) => {
  const { user, repositories, workspaces } = dataStore;

  useEffect(() => {
    console.log({ user, repositories, workspaces })
  }, [])
  return <pre>
    { JSON.stringify(repositories, null, 2) }
  </pre>
}

export async function getServerSideProps({ req }) {
  const { user, isError, bitliteSessionId } = await authHandler(req);
  // if(isError){
  //   return {
  //     props: {},
  //     redirect: {
  //       destination: 'https://bitbucket.org/site/oauth2/authorize?client_id=xn9n6AsXaK8fwGCeQY&response_type=token',
  //     },
  //   }
  // }
  const [repositories, repositoriesError] = getRepositories(bitliteSessionId);
  const [workspaces, workspacesError] = getWorkspaces(bitliteSessionId);

  let dataStore = {
    repositories: repositories || [],
    workspaces: workspaces || [],
    user
  }

  return {
    props: {
      bitliteSessionId,
      dataStore
    }
  }
}
export default Dashboard;