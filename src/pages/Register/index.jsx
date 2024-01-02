// RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Img, Text } from 'components';
import { useSignup } from 'hooks/useSignup';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, name, phone);
  };

  return (
    <>
      <div className="bg-gradient1  flex flex-col font-roboto gap-[18px] items-center justify-start mx-auto p-[106px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[38px] items-start justify-start w-[11%] md:w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px] w-[72%] md:w-full">
            <div className="md:h-[102px] h-[119px] relative w-full">
              <div className="md:h-[102px] h-[119px] m-auto w-full">
                <div className="md:h-[102px] h-[119px] m-auto w-full">
                  <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[83%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[102px] md:h-auto object-cover w-full"
                          src="images/img_clippathgroup.png" // Replace with actual image source
                          alt="clippathgroup"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[83%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[102px] md:h-auto object-cover w-full"
                          src="images/img_clippathgroup_102x78.png" // Replace with actual image source
                          alt="clippathgroup_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[97px] inset-y-[0] my-auto right-[2%]"
                  src="images/img_close_black_900.svg" // Replace with actual image source
                  alt="close"
                />
              </div>
              <Img
                className="absolute h-[102px] object-cover right-[0] top-[0]"
                src="images/img_group.png" // Replace with actual image source
                alt="group"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
            size="txtRobotoRomanRegular36"
          >
            Register
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start mb-[223px] w-[35%] md:w-full">
          {/* Email Input */}
          <input
            type="text"
            className="bg-gray-100 h-11 justify-center sm:px-5 px-[35px] py-[13px] rounded-[20px] text-blue_gray-600 text-sm w-[427px]"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <input
            type="password"
            className="bg-gray-100 h-11 justify-center mt-[15px] sm:px-5 px-[35px] py-[13px] rounded-[20px] text-blue_gray-600 text-sm w-[427px]"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Name Input */}
          <input
            type="text"
            className="bg-gray-100 h-11 justify-center mt-[15px] sm:px-5 px-[35px] py-[13px] rounded-[20px] text-blue_gray-600 text-sm w-[427px]"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Phone Input */}
          <input
            type="text"
            className="bg-gray-100 h-11 justify-center mt-[15px] sm:px-5 px-[35px] py-[13px] rounded-[20px] text-blue_gray-600 text-sm w-[427px]"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* Register Button */}
          <Button
            className="cursor-pointer font-bold leading-[normal] min-w-[427px] sm:min-w-full mt-[25px] text-base text-center"
            shape="round"
            size="xs"
            variant="gradient"
            color="light_blue_800_gray_900"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Register
          </Button>
            
            {/* Error Message */}
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}


          <Button
            className="cursor-pointer font-bold leading-[normal] mt-4 text-base text-center text-light_blue_800_gray_900"
            shape="round"
            size="xs"
            onClick={() => navigate('/login')}
          >
            Already have an account? Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
