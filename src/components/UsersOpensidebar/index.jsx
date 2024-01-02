import React from "react";

import { Img, List, Text } from "components";

const UsersOpensidebar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-28 justify-start mb-[348px] mt-[7px] w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[7px] w-[66%] md:w-full">
            <div className="flex flex-col items-center justify-end w-full">
              <div className="flex flex-row gap-2.5 items-center justify-between mb-0.5 mt-[9px] w-[99%] md:w-full">
                <div className="md:h-[37px] h-[43px] relative w-[23%]">
                  <div className="md:h-[37px] h-[43px] m-auto w-full">
                    <div className="md:h-[37px] h-[43px] m-auto w-full">
                      <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-4/5">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-[37px] md:h-auto object-cover w-full"
                              src="images/img_clippathgroup.png"
                              alt="clippathgroup"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-4/5">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Img
                              className="h-[37px] md:h-auto object-cover w-full"
                              src="images/img_clippathgroup_102x78.png"
                              alt="clippathgroup_One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[35px] inset-y-[0] my-auto right-[0]"
                      src="images/img_close_black_900_35x29.svg"
                      alt="close"
                    />
                  </div>
                  <Img
                    className="absolute h-[37px] object-cover right-[0] top-[0]"
                    src="images/img_group.png"
                    alt="clippathgroup_Two"
                  />
                </div>
                <Img
                  className="h-6"
                  src="images/img_group_blue_gray_700.svg"
                  alt="group"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[17px] items-center justify-between w-full">
            <div className="flex flex-col gap-[47px] items-start justify-start w-[85%]">
              <div className="flex flex-row gap-7 items-start justify-start w-[62%] md:w-full">
                <div className="flex flex-col h-6 items-center justify-start w-6">
                  <Img
                    className="h-6 w-6"
                    src="images/img_2regularhome.svg"
                    alt="2regularhome"
                  />
                </div>
                {props?.dashboard}
              </div>
              <div className="flex flex-row items-start justify-start w-full">
                <div className="flex flex-col h-6 items-center justify-start w-6">
                  <Img
                    className="h-6 w-6"
                    src="images/img_2regularbell.svg"
                    alt="2regularbell"
                  />
                </div>
                <Text
                  className="ml-7 mt-[3px] text-blue_gray-500_01 text-sm tracking-[0.50px]"
                  size="txtRobotoRomanRegular14Bluegray50001"
                >
                  {props?.messages}
                </Text>
                <div className="bg-light_blue-800_a2 h-2 ml-[101px] my-2 rounded-[50%] shadow-bs1 w-2"></div>
              </div>
              <List
                className="flex flex-col gap-[46px] w-[56%]"
                orientation="vertical"
              >
                <div className="flex flex-row gap-7 items-center justify-start w-full">
                  <div className="flex flex-col h-6 items-center justify-start w-6">
                    <Img
                      className="h-6 w-6"
                      src="images/img_2regularvideo.svg"
                      alt="2regularvideo"
                    />
                  </div>
                  <Text
                    className="text-blue_gray-500_01 text-sm tracking-[0.50px]"
                    size="txtRobotoRomanRegular14Bluegray50001"
                  >
                    {props?.wallet}
                  </Text>
                </div>
                <div className="flex flex-row gap-7 items-center justify-start w-[81%] md:w-full">
                  <div className="flex flex-col h-6 items-center justify-start w-6">
                    <Img
                      className="h-6 w-6"
                      src="images/img_2regulardesktop.svg"
                      alt="2regulardesktop"
                    />
                  </div>
                  <Text
                    className="text-blue_gray-500_01 text-sm tracking-[0.50px]"
                    size="txtRobotoRomanRegular14Bluegray50001"
                  >
                    {props?.trade}
                  </Text>
                </div>
                <div className="flex flex-row gap-7 items-center justify-start w-[84%] md:w-full">
                  <div className="flex flex-col h-6 items-center justify-start w-6">
                    <Img
                      className="h-6 w-6"
                      src="images/img_2regularmappin.svg"
                      alt="2regularmappin"
                    />
                  </div>
                  <Text
                    className="text-blue_gray-500_01 text-sm tracking-[0.50px]"
                    size="txtRobotoRomanRegular14Bluegray50001"
                  >
                    {props?.trade1}
                  </Text>
                </div>
                <div className="flex flex-row gap-7 items-center justify-start w-[82%] md:w-full">
                  <div className="flex flex-col h-6 items-center justify-start w-6">
                    <Img
                      className="h-6 w-6"
                      src="images/img_2regularuser.svg"
                      alt="2regularuser"
                    />
                  </div>
                  <Text
                    className="text-blue_gray-500_01 text-sm tracking-[0.50px]"
                    size="txtRobotoRomanRegular14Bluegray50001"
                  >
                    {props?.accountsetting}
                  </Text>
                </div>
              </List>
            </div>
            <div className="bg-white-A700 flex flex-col h-10 md:h-auto items-center justify-center mb-[170px] mt-[165px] outline outline-[0.5px] outline-blue_gray-50 p-1.5 rounded-[10px] shadow-bs w-5">
              <Img
                className="h-[17px]"
                src="images/img_vector.svg"
                alt="vector"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UsersOpensidebar.defaultProps = {
  dashboard: (
    <Text
      className="mt-1 text-light_blue-800 text-sm tracking-[0.50px]"
      size="txtHelveticaNeueBlack14"
    >
      <span className="text-light_blue-800 font-roboto text-left font-bold">
        Dashboar
      </span>
      <span className="text-light_blue-800 font-roboto text-left font-bold">
        d
      </span>
    </Text>
  ),
  messages: "Alerts",
  wallet: "Cameras",
  trade: "Rules",
  trade1: "Zones",
  accountsetting: "Users",
};

export default UsersOpensidebar;
