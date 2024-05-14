"use client"
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import axios from 'axios';

const Registration = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassField, setShowPassField] = useState(false);
  const [showConfirmPassField, setShowConfirmPassField] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    // Check if password and confirm password fields match
    setPasswordMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    // Check if password and confirm password fields match
    setPasswordMatch(event.target.value === password);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassField(!showPassField);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassField(!showConfirmPassField);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
  
    if (!name.trim()) {
      setErrorMessage('Please enter a valid name.');
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email.');
      return;
    }
  
    if (password.length < 4) {
      setErrorMessage('Please enter a valid password (at least 4 characters).');
      return;
    }
  
    if (!/^\d{10}$/.test(phone)) {
      setErrorMessage('Please enter a valid phone number (10 digits).');
      return;
    }
  
    const formData = {
      name: name,
      email: email,
      password: password,
      phone: phone
    };
  
    try {
      const response = await axios.post('http://localhost:3005/user/registration', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      console.log('Response:', response); // Log the response
  
      if (response.data && response.data.success) {
        alert('Registration successful');
        // Redirect to dashboard or another page
      } 
      alert('success')
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message); // Log the error
      setErrorMessage('Registration failed');
    }
  };
  

  return (
    <div className="h-screen"
      style={{
        backgroundImage: "url(reg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="flex mt-32">
        <div className="flex-1"></div>
        <div className="flex-auto items-start">
          <form onSubmit={handleRegistration} className="md:w-3/4 lg:w-3/4 mx-auto ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                value={name}
                name="name"
                placeholder="name"
                className="input input-bordered"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                name="email"
                placeholder="email"
                className="input input-bordered"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassField ? "text" : "password"}
                name="password"
                value={password}
                // onChange={handlePasswordChange}
                placeholder="password"
                className="input input-bordered w-full"
                // onChange={(e) => setPassword(e.target.value)}
                onChange={(e) => {
                    handlePasswordChange(e);
                    setPassword(e.target.value);
                  }}
              />

              <span
                className="absolute top-9 text-2xl right-0 pr-3 pt-3 cursor-pointer"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassField ? <IoEyeOffSharp /> : <IoEye />}
              </span>
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={showConfirmPassField ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="confirm password"
                className="input input-bordered w-full"
                required
              />

              <span
                className="absolute top-9 text-2xl right-0 pr-3 pt-3 cursor-pointer"
                onClick={handleToggleConfirmPasswordVisibility}
              >
                {showConfirmPassField ? <IoEyeOffSharp /> : <IoEye />}
              </span>
            </div>
            {!passwordMatch && (
              <p className="text-red-500">Passwords do not match</p>
            )}
            {passwordMatch && password && confirmPassword && (
              <p className="text-green-500">Passwords match</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                value={phone}
                name="phone"
                placeholder="phone"
                className="input input-bordered"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-lg text-white">Register</button>
            </div>
          </form>
          <Link href="/login">
            <p className="md:w-3/4 lg:w-3/4 mx-auto pt-1 ">
              Already have an account.?
              <span className="text-blue-500 underline hover:text-white"> Login</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;