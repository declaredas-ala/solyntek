import React, { useState, useEffect } from "react";
import { Button, Text } from "components";
import UsersOpensidebar from "components/UsersOpensidebar";
import { useLogout } from "hooks/useLogout";
import { useAuthContext } from "hooks/useAuthContext";

const UsersPage = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [userData, setUserData] = useState([]);

  const { email: userEmail } = user;

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/user");
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  const handleClick = () => {
    logout();
  };

  return (
    <div className="bg-gradient1 flex flex-col font-helveticaneue items-start justify-start mx-auto pb-[97px] md:pr-10 sm:pr-5 pr-[97px] w-full">
      <div className="flex md:flex-col flex-row gap-[55px] items-start justify-start mb-[204px] w-full">
        <UsersOpensidebar
          className="bg-gray-100 flex md:flex-1 flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[62px] py-[62px] w-[23%] md:w-full"
          dashboard={
            <Text className="font-black mt-1 text-light_blue-800 text-sm tracking-[0.50px]">
              <span className="text-light_blue-800 font-roboto text-left font-bold">
                Dashboard
              </span>
            </Text>
          }
        />
        <div className="flex md:flex-1 flex-col font-roboto gap-5 items-center justify-start md:mt-0 mt-[67px] w-[74%] md:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-700_ab"
                size="txtRobotoRomanBold36"
              >
                Hello {userEmail}
              </Text>
              <Button
                className="cursor-pointer font-bold h-11 mt-[15px] outline outline-[0.5px] outline-blue_gray-50 rounded-[15px] text-center text-sm w-[200px]"
                color="white_A700"
                size="xs"
                variant="fill"
                onClick={handleClick}
              >
                Logout
              </Button>
            </div>
            <table className="mt-5 w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>phone</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user) => (
                  <tr key={user.id}>
                    <td>{user.namee}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
               
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
