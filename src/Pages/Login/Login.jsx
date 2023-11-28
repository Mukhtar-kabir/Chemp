import "../Login/Login.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  // signInWithEmailAndPassword,
} from "firebase/auth";
import { addUser, removeUser } from "../../redux/chempSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      dispatch(
        addUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        })
      );

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully!");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <div className="container">
        <h1>Login to Start</h1>
        <div className="details">
          <h3>Email:</h3>
          <input type="email" />
          <h3>Password:</h3>
          <input type="password" />
        </div>

        <div className="button">
          <button>Login</button>
        </div>

        <div className="sign">
          <div className="google" onClick={handleGoogleLogin}>
            <img src="/Images/googleIcon.png" alt="" />
            <p>Sign in with Google</p>
          </div>

          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;

// import "../Login/Login.scss";
// import { useDispatch } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
// import { useState } from "react";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { addUser, removeUser } from "../../redux/chempSlice";

// const Login = () => {
//   const [authenticated, setAuthenticated] = useState(false);
//   const dispatch = useDispatch();
//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();

//   const handleGoogleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       dispatch(
//         addUser({
//           id: user.uid,
//           name: user.displayName,
//           email: user.email,
//           image: user.photoURL,
//         })
//       );

//       setAuthenticated(true);

//       toast.success("Login Successful!");
//     } catch (error) {
//       console.error(error);
//       toast.error("Login Failed. Please try again.");
//     }
//   };

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         toast.success("Log Out Successfully!");
//         dispatch(removeUser());
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   if (!authenticated) {
//     return (
//       <div className="login">
//         <div className="container">
//           <h1>Login to Start</h1>
//           <div className="details">
//             <h3>Email:</h3>
//             <input type="email" />
//             <h3>Password:</h3>
//             <input type="password" />
//           </div>

//           <div className="button">
//             <button>Login</button>
//           </div>
//           <div className="sign">
//             <div className="google" onClick={handleGoogleLogin}>
//               <img src="/Images/googleIcon.png" alt="" />
//               <p>Sign in with Google</p>
//             </div>

//             <button onClick={handleSignOut}>Sign Out</button>
//           </div>
//         </div>
//         <ToastContainer
//           position="top-left"
//           autoClose={2000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="dark"
//         />
//       </div>
//     );
//   }

//   // If authenticated, don't render anything (or you can render a loading indicator)
//   return null;
// };

// export default Login;
