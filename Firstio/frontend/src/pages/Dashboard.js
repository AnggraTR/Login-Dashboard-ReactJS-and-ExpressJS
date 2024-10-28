import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your API with the authorization token
    const fetchData = async () => {
      const token = localStorage.getItem('token'); // Assuming token is stored in localStorage after login

      try {
        const response = await fetch('http://localhost:5000/api/dashboard', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Add token to headers
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result); // Set the data received from API
        setLoading(false); // Set loading to false when data is fetched
      } catch (err) {
        setError(err); // Handle any errors
        setLoading(false); // Stop loading on error
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading dashboard data...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <main className="p-4">
      <h3 className="mt-4 text-lg font-semibold">Dashboard Data:</h3>
      
      {data && (
        <div className="mt-2">
          <p><strong>Message:</strong> {data.message}</p>
          <p><strong>User Name:</strong> {data.dashboardData.userInfo.name}</p>
          <p><strong>User Email:</strong> {data.dashboardData.userInfo.email}</p>
          <h4 className="mt-2">Statistics:</h4>
          <ul className="list-disc list-inside">
            {data.dashboardData.stats.map((stat, index) => (
              <li key={index}>Stat {index + 1}: {stat}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
