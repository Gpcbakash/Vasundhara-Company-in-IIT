// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavbarComponent = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/" className="flex items-center">
                    Home
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/about" className="flex items-center">
                    About
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/services" className="flex items-center">
                    Services
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link to="/contact" className="flex items-center">
                    Contact
                </Link>
            </Typography>
        </ul>
    );

    return (
        <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
            <Navbar className="sticky top-0 z-10 h-max max-w-full bg-gray-100 rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography as="div" className="mr-4 cursor-pointer py-1.5 font-medium">
                        <Link to="/">Material Tailwind</Link>
                    </Typography>
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                        <Link to="/signup">Get started</Link>
                    </Button>
                    <IconButton variant="text" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    <Button fullWidth variant="gradient" size="sm">
                        <Link to="/signup">Get started</Link>
                    </Button>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Navbar;
