import React ,{useState}from "react";

import { Button, Img, Text } from "components";


const PasswordRecoveryOnePage = () => {
  const [email, setEmail] = useState("");
  const handleConfirm=()=>{
    console.log("Confirming with email:", email);
  }

  return (
    <>
      <div className="bg-gradient1  flex flex-col font-roboto items-center justify-start mx-auto p-[106px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start w-[8%] md:w-full">
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
                src="images/img_close_black_900_97x81.svg"
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
        <Text
          className="mt-9 text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
          size="txtRobotoRomanRegular36"
        >
          Password Recovery
        </Text>
        <div className="flex flex-col gap-[46px] items-center justify-start mb-[437px] mt-[34px] w-[35%] md:w-full">
        <input
              type="text"
              className="bg-gray-100 h-11 justify-center sm:px-5 px-[35px] py-[13px] rounded-[20px] text-blue_gray-600 text-sm w-[427px]"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
        
          <Button
            className="cursor-pointer font-bold leading-[normal] min-w-[427px] sm:min-w-full text-base text-center"
            shape="round"
            size="xs"
            variant="gradient"
            color="light_blue_800_gray_900"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};

export default PasswordRecoveryOnePage;
