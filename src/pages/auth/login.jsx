import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md h-[400px] bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <div className="flex flex-col gap-6">
          <form className="flex flex-col gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="w-full"
              />
            </div>
            <div className="text-sm flex gap-2">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border border-gray-300 bg-white text-primary focus:ring-2 focus:ring-primary"
              />
              <label className="block text-gray-700">Remember me</label>
            </div>
            <Button className="w-full text-white">Login</Button>
          </form>
        </div>

        <div className="text-center text-sm mt-3">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
