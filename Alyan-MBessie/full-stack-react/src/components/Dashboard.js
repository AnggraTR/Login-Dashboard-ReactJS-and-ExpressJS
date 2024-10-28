import Layout from "./layout/Layout"; // Correct path for the Layout component

function Dashboard({ onLogout }) {
  return <Layout onLogout={onLogout} />;
}

export default Dashboard;
