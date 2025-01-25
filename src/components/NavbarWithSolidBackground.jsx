import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import * as motion from "motion/react-client";

export function NavbarWithSolidBackground() {
  const [openNav, setOpenNav] = React.useState(false);

  const box = {
    width: 100,
    height: 40,
    borderRadius: 100,
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-white hover:bg-blue-900 hover:rounded-xl"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-white hover:bg-blue-900 hover:rounded-xl"
      >
        <a href="#" className="flex items-center">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-white hover:bg-blue-900 hover:rounded-xl"
      >
        <a href="#" className="flex items-center">
          Projects
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-white"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography> */}
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-full flex items-center justify-center mt-4 ps-12">
      <Navbar className="sticky top-0 z-10 h-max max-w-full bg-transparent rounded-none px-4 py-2 lg:px-8 lg:py-4 border-none rounded-lg">
        <div className="flex items-center justify-between text-white">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          ></Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <motion.button
            size="sm"
            className="hidden lg:inline-block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
          >
            <span className="text-sm">Get in Touch</span>
          </motion.button>

          <IconButton
            variant="text"
            className="lg:hidden text-white"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          {navList}
          <motion.button
            size="sm"
            className=" bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
          >
            <span className="text-sm">Get in Touch</span>
          </motion.button>
        </Collapse>
      </Navbar>
    </div>
  );
}
