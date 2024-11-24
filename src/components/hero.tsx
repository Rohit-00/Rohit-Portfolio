import { FloatingDock } from "../floatingDock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
  IconBrandBehance,
  IconBrandLinkedin
} from "@tabler/icons-react";


export default function Hero() {
  const links = [
    {
      title: "Twitter",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 " />
      ),
      href: "#",
    },
    {
      title: "Behance",
      icon: (
        <IconBrandBehance className="h-full w-full text-neutral-500 " />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 " />
      ),
      href: "#",
    },


    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 " />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 " />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
