// import React, { useState } from 'react';
// import axios from 'axios';
// import { Footer, Navbar } from '../components';

// function ForgotPasswordForm() {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('', { email });
//       setMessage(response.data.message);
//       setError('');
//     } catch (error) {
//       setMessage('');
//       setError(error.response.data.error);
//     }
//   };

//   return (
//     <div>
//         <Navbar/>
//     <div className="container">
//       <div className="row justify-content-center mt-5">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <h4 className="card-title mb-4">Forgot Password</h4>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="email">Email address:</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary btn-block">
//                   Reset Password
//                 </button>
//               </form>
//               {message && (
//                 <div className="alert alert-success mt-3" role="alert">
//                   {message}
//                 </div>
//               )}
//               {error && (
//                 <div className="alert alert-danger mt-3" role="alert">
//                   {error}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// }

// export default ForgotPasswordForm;

import React, { useState } from 'react';
import { Footer, Navbar } from '../components';

function ForgotPasswordForm() {
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [error, setError] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await fetch('http://localhost:3000/forgot_password', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ email })
});
const data = await response.json();
setMessage(data.message);
setError('');
} catch (error) {
setMessage('');
setError(error.response.data.error);
}
};

return (
<div>
<Navbar/>
<div className="container">
<div className="row justify-content-center mt-5">
<div className="col-md-6">
<div className="card">
<div className="card-body">
<h4 className="card-title mb-4">Forgot Password</h4>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="email">Email address:</label>
<input
type="email"
className="form-control"
id="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</div>
<button type="submit" className="btn btn-primary btn-block">
Reset Password
</button>
</form>
{message && (
<div className="alert alert-success mt-3" role="alert">
{message}
</div>
)}
{error && (
<div className="alert alert-danger mt-3" role="alert">
{error}
</div>
)}
</div>
</div>
</div>
</div>
</div>
<Footer/>
</div>
);
}

export default ForgotPasswordForm;





// Regenerate response
