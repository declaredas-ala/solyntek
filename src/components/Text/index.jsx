import React from "react";

const sizeClasses = {
  txtHelveticaNeueBlack14: "font-black font-helveticaneue",
  txtRobotoRomanRegular14Bluegray50001: "font-normal font-roboto",
  txtRobotoRomanBold16: "font-bold font-roboto",
  txtRobotoRomanRegular36: "font-normal font-roboto",
  txtRobotoRomanRegular14: "font-normal font-roboto",
  txtRobotoRomanBold36: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
