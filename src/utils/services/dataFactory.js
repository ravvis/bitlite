import Axios from "../../api/apiService";

export async function getRepositories(token){
  let repositories = [];
  let error = null;

  try {
    const repositoriesResponse = await Axios.get("repositories", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    repositories = repositoriesResponse.data;
  }
  catch (e) {
    error = e;
  }

  return [
    repositories,
    error
  ]
}

export async function getWorkspaces(token){
  let workspaces = [];
  let error = null;

  try {
    const workspacesResponse = await Axios.get("workspaces", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    workspaces = workspacesResponse.data;
  }
  catch (e) {
    error = e;
  }

  return [
    workspaces,
    error
  ]
}