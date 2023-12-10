// "use client"
// // pages/Dashboard.js
// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const styles = {
//   container: {
//     maxWidth: '800px',
//     margin: '20px auto',
//     padding: '20px',
//     backgroundColor: '#fff',
//     borderRadius: '10px',
//     boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
//   },
//   heading: {
//     textAlign: 'center',
//     color: '#333',
//   },
//   widgetContainer: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//     gap: '20px',
//   },
//   widget: {
//     padding: '20px',
//     backgroundColor: '#f4f4f4',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   },
//   chart: {
//     marginTop: '20px',
//   },
// };

// const Dashboard = () => {
//   const chartData = {
//     labels: ['January', 'February', 'March', 'April', 'May'],
//     datasets: [
//       {
//         label: 'Monthly Revenue',
//         data: [2000, 3000, 5000, 4000, 6000],
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Dashboard</h1>
//       <div style={styles.widgetContainer}>
//         <div style={styles.widget}>
//           <h2>Widget 1</h2>
//           <p>Content for Widget 1 goes here...</p>
//         </div>
//         <div style={styles.widget}>
//           <h2>Widget 2</h2>
//           <p>Content for Widget 2 goes here...</p>
//         </div>
//         <div style={styles.widget}>
//           <h2>Revenue Chart</h2>
//           <Bar data={chartData} options={chartOptions} style={styles.chart} />
//         </div>
//         {/* Add more widgets as needed */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
