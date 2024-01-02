import React, { useState } from "react";

import { Button, Img, Radio, Text } from "components";
import { useLogin } from "hooks/useLogin";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate=useNavigate();

  

 
 
 


  
  return (
    <>
      <div className="bg-gradient1  flex flex-col font-roboto items-center justify-start mx-auto p-[106px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[34px] items-center justify-start mb-80 w-[35%] md:w-full">
          <div className="flex flex-col gap-[37px] items-start justify-start w-[23%] md:w-full">
            <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-[97%] md:w-full">
              <div className="md:h-[102px] h-[119px] relative w-full">
                <div className="md:h-[102px] h-[119px] m-auto w-full">
                  <div className="md:h-[102px] h-[119px] m-auto w-full">
                    <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[83%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            className="h-[102px] md:h-auto object-cover w-full"
                            src="images/img_clippathgroup.png"
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
                            src="images/img_clippathgroup_102x78.png"
                            alt="clippathgroup_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[97px] inset-y-[0] my-auto right-[2%]"
                    src="images/img_close.svg"
                    alt="close"
                  />
                </div>
                <Img
                  className="absolute h-[102px] object-cover right-[0] top-[0]"
                  src="images/img_group.png"
                  alt="group"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
              size="txtRobotoRomanRegular36"
            >
              Login
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <input
              type="text"
              className="bg-gray-100 h-11 justify-center sm:px-5 px-[35px] py-[13px] rounded-[20px] text-blue_gray-600 text-sm w-[427px]"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="bg-gray-100 h-11 justify-center mt-[18px] sm:px-5 px-[35px] py-[13px] rounded-[20px] text-blue_gray-600 text-sm w-[427px]"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex flex-row items-start justify-between mt-8 w-full">
              <Radio
                value="RememberMe"
                className="leading-[normal] text-gray-700 text-left text-sm"
                inputClassName="border border-blue_gray-100 border-solid h-[17px] mr-[5px] rounded-lg w-[17px]"
                checked={false}
                name="rememberme"
                label="Remember Me"
                id="RememberMe"
              ></Radio>
              <Button
                className="common-pointer bg-transparent cursor-pointer leading-[normal] min-w-[132px] text-center text-gray-700 text-sm"
                onClick={() => navigate("/passwordrecoveryone")}
              >
                I forgot my password
              </Button>
            </div>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[427px] sm:min-w-full mt-[50px] text-base text-center"
              shape="round"
              size="xs"
              variant="gradient"
              color="light_blue_800_gray_900"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Logging In...' : 'Login'}
            </Button>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
         
            <div className="flex flex-row items-center justify-center mt-[15px] w-full">
              <Text
                className="text-base text-gray-700"
                size="txtRobotoRegular16"
              >
                Don't have an account?
              </Text>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[132px] text-center text-gray-700 text-sm"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </div>
    
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
