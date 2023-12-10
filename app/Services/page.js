
// import React from 'react';
// import DoctorCard from '../components/DoctorCard/DoctorCard'
// import styles from '../components/DoctorCard/DoctorCard.module.css'



// const Services = () => {
//   return (
//     <>
//     <h1 style={{height:"70PX",textAlign:"center" , justifyContent:"center",backgroundColor:"GrayText"}}>SERVICES</h1>
//     <div style={{border:"2px solid black",backgroundColor:"gray",marginTop:"", width:"20%", marginLeft:"10%" ,borderRadius:"20px",height:"450px"}}>
      
//       <div style={{marginLeft:"10%",marginTop:"80PX"}}>
//       <DoctorCard
//         name="Cancer care"
//         specialty="Prof. Dr. Shaharyar is a well known figure in the oncology community of Pakistan. "
//         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLfHSxePMYmzLp_7dOtIS0D1fDcz-_pSvYA&usqp=CAU"
  
//     />
//       </div>
//     </div>
//     </>
//   );
// };

// export default Services;



// // ./app/Services/page.js
// import React from 'react';

// const doctorCardStyle = {
//   container: {
//     border: '2px solid black',
//     backgroundColor: 'gray',
//     marginTop: '20px',
//     width: '40%',
//     marginLeft: '30%',
//     borderRadius: '20px',
//     padding: '20px',
//   },
//   card: {
//     textAlign: 'center',
//   },
//   image: {
//     maxWidth: '100%',
//     height: 'auto',
//     borderRadius: '50%',
//     marginBottom: '10px',
//   },
//   heading: {
//     marginBottom: '5px',
//   },
//   description: {
//     color: '#555',
//   },
// };

// const Services = () => {
//   return (
//     <>
//       <h1 style={{ height: '70px', textAlign: 'center', justifyContent: 'center', backgroundColor: 'GrayText' }}>SERVICES</h1>
//       <div style={doctorCardStyle.container}>
//         <div style={doctorCardStyle.card}>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLfHSxePMYmzLp_7dOtIS0D1fDcz-_pSvYA&usqp=CAU"
//             alt="Doctor"
//             style={doctorCardStyle.image}
//           />
//           <h2 style={doctorCardStyle.heading}>Cancer Care</h2>
//           <p style={doctorCardStyle.description}>
//             Prof. Dr. Shaharyar is a well-known figure in the oncology community of Pakistan.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;




// ./app/Services/page.js
import React from 'react';
import Navbar from '../components/Navbar/navbar';
const arrowButtonStyle = {
    button: {
      width: '50px',
      height: '30px',
      backgroundColor: 'blue',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
const doctorCardStyle = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '20px',
  },
  card: {
    textAlign: 'center',
    border: '2px solid black',
    backgroundColor: 'gray',
    borderRadius: '20px',
    padding: '20px',
    marginBottom: '20px',
    width: '30%',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  heading: {
    marginBottom: '5px',
  },
  description: {
    color: '#555',
  },
};

const Services = () => {
  return (
    <>
    <Navbar/>
      <h1 style={{ height: '70px', textAlign: 'center', justifyContent: 'center', backgroundColor: 'GrayText' }}>SERVICES</h1>
      <div style={doctorCardStyle.container}>
        <div style={doctorCardStyle.card}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLfHSxePMYmzLp_7dOtIS0D1fDcz-_pSvYA&usqp=CAU"
            alt="Doctor"
            style={doctorCardStyle.image}
          />
          <h2 style={doctorCardStyle.heading}>Cancer Care</h2>
          <p style={doctorCardStyle.description}>
            Prof. Dr. Shaharyar is a well-known figure in the oncology community of Pakistan.
          </p>
          <div style={{ textAlign: 'center', marginTop: '20px'}}>
        <button style={arrowButtonStyle.button}>→</button>
      </div>
        </div>
        {/* Add two more DoctorCard components similarly */}
        <div style={doctorCardStyle.card}>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLfHSxePMYmzLp_7dOtIS0D1fDcz-_pSvYA&usqp=CAU"
            alt="Doctor"
            style={doctorCardStyle.image}
          />
          <h2 style={doctorCardStyle.heading}>Cancer Care</h2>
          <p style={doctorCardStyle.description}>
            Prof. Dr. Shaharyar is a well-known figure in the oncology community of Pakistan.
          </p>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button style={arrowButtonStyle.button}>→</button>
      </div>
        </div>
        <div style={doctorCardStyle.card}>
           <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLfHSxePMYmzLp_7dOtIS0D1fDcz-_pSvYA&usqp=CAU"
            alt="Doctor"
            style={doctorCardStyle.image}
          />
          <h2 style={doctorCardStyle.heading}>Cancer Care</h2>
          <p style={doctorCardStyle.description}>
            Prof. Dr. Shaharyar is a well-known figure in the oncology community of Pakistan.
          </p>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button style={arrowButtonStyle.button}>→</button>
      </div>
        </div>
      </div>
    </>
  );
};

export default Services;
