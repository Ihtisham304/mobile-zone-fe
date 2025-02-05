import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import loginValidation from "@/validations/login-validation";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (values) => {
      console.log("form values", values);
    },
  });
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md h-[400px] bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <div className="flex flex-col gap-6">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm">{formik.errors.password}</p>
              )}
            </div>
            <div className="text-sm flex gap-2">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border border-gray-300 bg-white text-primary focus:ring-2 focus:ring-primary"
              />
              <label className="block text-gray-700">Remember me</label>
            </div>
            <Button type="submit" className="w-full text-white">
              Login
            </Button>
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
