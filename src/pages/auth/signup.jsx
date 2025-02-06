import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import signupValidation from "@/validations/signup-validation";

function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      storeName: "",
      address: "",
      password: "",
    },
    validationSchema: signupValidation,
    onSubmit: (values) => {
      console.log("form values", values);
    },
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-4">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-xl font-bold">
            Img
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700">First Name</label>
            <Input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <Input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Store Name</label>
            <Input
              id="storeName"
              type="text"
              placeholder="Enter your store name"
              {...formik.getFieldProps("storeName")}
            />
            {formik.touched.storeName && formik.errors.storeName && (
              <p className="text-red-500 text-sm">{formik.errors.storeName}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <Input
              id="address"
              type="text"
              placeholder="Enter your address"
              {...formik.getFieldProps("address")}
            />
            {formik.touched.address && formik.errors.address && (
              <p className="text-red-500 text-sm">{formik.errors.address}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>
          <Button type="submit" className="w-full text-white">
            Sign Up
          </Button>
        </form>
        <div className="text-center text-sm mt-3">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
