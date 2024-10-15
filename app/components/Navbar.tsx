"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Select,
  SelectItem,
  SelectSection,
} from "@nextui-org/react";
import Image from "next/image";
import Logo from "../assests/logo-indira.png";

export default function App() {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Image src={Logo} width="200" alt="logo" height="100" />
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <Select className="max-w-xs" defaultSelectedKeys={["en"]}>
          <SelectItem key="en">English</SelectItem>
          <SelectItem key="es">Spanish</SelectItem>
        </Select>

        <Select className="max-w-xs" defaultSelectedKeys={["001"]}>
          <SelectSection showDivider title="Production">
            <SelectItem key="001">Medilaser</SelectItem>
            <SelectItem key="002">San Jose</SelectItem>
            <SelectItem key="003">Homi</SelectItem>
            <SelectItem key="004">Clinica Norte</SelectItem>
          </SelectSection>
          <SelectSection title="QA">
            <SelectItem key="001qa">Medilaser QA</SelectItem>
            <SelectItem key="002qa">San Jose QA</SelectItem>
            <SelectItem key="003qa">Homi </SelectItem>
            <SelectItem key="004qa">Clinica Norte QA</SelectItem>
          </SelectSection>
        </Select>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              showFallback
              name="FO"
              src="https://images.unsplash.com/broken"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">aortiz@indigo.tech</p>
            </DropdownItem>
            <DropdownItem key="templates">Templates</DropdownItem>
            <DropdownItem key="sign">Sign</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="preferences">Preferences</DropdownItem>
            <DropdownItem key="documents">Documents</DropdownItem>
            <DropdownItem key="changelogs">Changelogs</DropdownItem>
            <DropdownItem key="about">About</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
