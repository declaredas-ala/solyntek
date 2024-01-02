import React from "react";

import { Img, Text } from "components";

const LoginRowrosalieflepp = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="md:ml-[0] ml-[25px] text-blue_gray-600 text-sm"
          size="txtRobotoRomanRegular14"
        >
          {props?.rosalieflepp}
        </Text>
        <Text
          className="md:ml-[0] ml-[71px] text-blue_gray-600 text-sm"
          size="txtRobotoRomanRegular14"
        >
          {props?.p1234567890}
        </Text>
        <Text
          className="ml-20 md:ml-[0] text-blue_gray-600 text-sm"
          size="txtRobotoRomanRegular14"
        >
          {props?.email}
        </Text>
        {!!props?.userimage ? (
          <Img
            className="h-6 md:ml-[0] ml-[362px] w-6"
            alt="user"
            src={props?.userimage}
          />
        ) : null}
        {!!props?.editicon ? (
          <Img
            className="h-6 md:ml-[0] ml-[33px] w-6"
            alt="fluentnoteeditTwo"
            src={props?.editicon}
          />
        ) : null}
      </div>
    </>
  );
};

LoginRowrosalieflepp.defaultProps = {};

export default LoginRowrosalieflepp;
