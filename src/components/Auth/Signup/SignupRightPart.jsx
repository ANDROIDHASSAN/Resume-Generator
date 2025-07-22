import React, { useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { TbPasswordFingerprint } from 'react-icons/tb';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../../firebase/Firebase';

function SingupRightpart() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up:", userCredential.user);
      toast.success("Account created successfully!");
      setEmail("");
      setPassword("");
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.message);
    }
  };

 
  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google user:", user);
      toast.success("Signed up with Google successfully!");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error(`Google Sign-in failed: ${error.code}`);
    }
  };

  return (
    <>
      <div className="flex items-center bg-slate-900 justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
          <h2 className="font-bold leading-tight text-white sm:text-4xl">Welcome To Our Resume Builder!</h2>
          <p className="mt-2 text-base text-gray-600">
            Already have an account? <a href="/login" className="font-medium text-blue-600 hover:underline">Login</a>
          </p>

          <form className="mt-8" onSubmit={handleSignup}>
            <div className="space-y-5">
              <div>
                <label className="text-base font-medium text-gray-300">Email address</label>
                <div className="mt-2.5 relative text-gray-400">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <MdOutlineAlternateEmail />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email to get started"
                    className="block w-full py-4 pl-10 pr-4 text-white placeholder-gray-500 border bg-transparent border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-base font-medium text-gray-300">Password</label>
                <div className="mt-2.5 relative text-gray-400">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <TbPasswordFingerprint />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="block w-full py-4 pl-10 pr-4 text-white placeholder-gray-500 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-4 font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-blue-600 rounded-md hover:opacity-80"
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>

          <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <button
              onClick={handleGoogleSignup}
              className="text-sm font-semibold w-full px-4 py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:bg-gray-100"
            >
              Sign up with Google
            </button>

            <button
              className="text-sm font-semibold w-full px-4 py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:bg-gray-100"
            >
              Sign up with Facebook
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default SingupRightpart;
