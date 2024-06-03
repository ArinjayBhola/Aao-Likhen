import { Link, useNavigate } from "react-router-dom";
import Quote from "../components/Quote";
import { useState } from "react";
import { SignupType } from "@arinjay_bhola/zod-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Signup = () => {
  const [postInputs, setPostInputs] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const sendRequest = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
      const jwt = response.data;
      localStorage.setItem("token", jwt.token);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <div className="min-h-screen flex justify-center items-center">
            <div className="p-8 rounded w-full max-w-md">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Create an Account</h1>
                <p className="text-sm text-gray-600">
                  Already have an account?
                  <Link
                    to="/signin"
                    className="text-gray-600 underline">
                    Sign In
                  </Link>
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Name</div>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                    placeholder="Your Name"
                    onChange={(e) => {
                      setPostInputs({
                        ...postInputs,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Email</div>
                  <input
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                    placeholder="Email"
                    onChange={(e) => {
                      setPostInputs({
                        ...postInputs,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Password</div>
                  <input
                    type="password"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                    placeholder="Password"
                    onChange={(e) => {
                      setPostInputs({
                        ...postInputs,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                  onClick={sendRequest}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="invisible lg:visible">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Signup;
