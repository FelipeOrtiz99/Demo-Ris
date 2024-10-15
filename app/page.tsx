"use client";
import React from "react";
import NavbarComponent from "./components/Navbar";
import PatientForm from "./components/PatientForm";
import PatientTable from "./components/PatientTable";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <main className="h-screen w-full">
        <div>
          <NavbarComponent />
        </div>

        <div style={{ width: 1200, margin: "auto", paddingTop: "30px" }}>
          <Tabs aria-label="Options" color="primary" variant="bordered">
            <Tab
              key="Form"
              title={
                <div className="flex items-center space-x-2">
                  {/* <GalleryIcon/> */}
                  <span>Patient Form</span>
                </div>
              }
            >
              <Card>
                <CardBody>
                  <PatientForm />
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="Table"
              title={
                <div className="flex items-center space-x-2">
                  {/* <MusicIcon/> */}
                  <span>Patient Table</span>
                </div>
              }
            >
              <PatientTable />
            </Tab>
          </Tabs>
        </div>
      </main>
    </>
  );
}
