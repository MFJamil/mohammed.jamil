import React from "react";
import Image from "next/image";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Page",
    icon: RectangleStackIcon,
  },
  /*
  {
    name: "Clients",
    icon: UserCircleIcon,
    href: "#clients",
    target: "_self"
  },
  {
    name: "Skills",
    icon: CommandLineIcon,
    href: "#skills",
    target: "_self"
  },
  {
    name: "Resume",
    icon: CommandLineIcon,
    href: "#resume",
    target: "_self"
  },
  */
  {
    name: "Contact",
    icon: CommandLineIcon,
    href: "#contact",
    target: "_self"
  },

];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
}

function NavItem({ children, href,target }: NavItemProps) {
  return (
    <li>
      <Typography 
        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
        as="a"
        href={href || "#"}
        target={target ? target: href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar 
      placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
      shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          <Image
                width={80}
                height={80}
                alt="logo"
                src="/image/design_1.png"
                />
                

          <Typography 
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            color="blue-gray" className="text-lg font-bold">

            M.Jamil
          </Typography>
        </ul>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href,target }) => (
            <NavItem key={name} href={href} target={target} >
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <IconButton
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button 
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
              color="gray">blocks</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>

  );
}

export default Navbar;
