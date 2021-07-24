import {authHandler} from "../src/utils/auth-handler/authHandler";

const Dashboard = ({ user }) => {
  return <h1>
    Hi {user.display_name}
  </h1>
}

export async function getServerSideProps({ req }) {
  return {
    ...await authHandler(req),
  }
}
export default Dashboard;