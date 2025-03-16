import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { context } from "../contexts/Context";
import { Link } from "react-router-dom";

import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";

const ProfileClick = () => {
  let string=""
  const useCon = useContext(context);  
  if(useCon.isAuthenticated)
  {
    useCon.user.name.split(" ").map((person)=>{
      string=string+person[0]  
    })
  }
  else
  {
    if(!useCon.name.includes(" "))
    {
      if(useCon.name.length<=3)
      {
      string=useCon.name
      }
      else
      {
        string=useCon.name.slice(0,4)
      }
    }
    else
    {
      useCon.name.split(" ").map((person)=>{
        string=string+person[0]
      })
    }
  }

  const isLoggedin = document.cookie.includes("loginToken");
  const handleSignout = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to sign out?")) {
      if (isLoggedin) {
        document.cookie =
          "loginToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        localStorage.clear();
        window.location.reload();
      } else {
        useCon.logout();
      }
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center">
        <Button className="cursor-pointer" onClick={() => setIsOpen(true)}>
          {
            <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span class="font-medium text-gray-600 dark:text-gray-300">
                {string}
              </span>
            </div>
          }
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={HiChartPie}>
                      Dashboard
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="/e-commerce/products"
                      icon={HiShoppingBag}
                    >
                      Products
                    </Sidebar.Item>
                    <Sidebar.Item href="/users/list" icon={HiUsers}>
                      Users list
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiLogin} onClick={handleSignout} className="cursor-pointer">
                      Sign Out
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item
                      href="https://github.com/themesberg/flowbite-react/"
                      icon={HiClipboard}
                    >
                      Docs
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="https://flowbite-react.com/"
                      icon={HiCollection}
                    >
                      Components
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="https://github.com/themesberg/flowbite-react/issues"
                      icon={HiInformationCircle}
                    >
                      Help
                    </Sidebar.Item>
                    {isLoggedin && <Link to={"/edit-profile"}>
                    <Sidebar.Item
                    className="cursor-pointer"
                      icon={HiUsers}
                    >
                      Edit your Profile
                    </Sidebar.Item>
                    </Link>}
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default ProfileClick;
