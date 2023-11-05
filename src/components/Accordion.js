import React from 'react'
import React, { useState } from "react";
import "../index.css";
import { FcContacts } from "react-icons/fc";
import { TbLayoutNavbarFilled } from 'react-icons/tb'
import { AiOutlineUserAdd } from 'react-icons/ai'

import Phone from "../assets/phone.png";

const Accordion = () => {
  const [open, setOpen] = useState("1");
  return (
    <div>
        

          <div>
            <div className="max-w-[1160px] mx-auto">
              <div className="flex justify-between ">
                <div className="w-[50%] ">
                  <Accordion className={`p-4 m-4 flex flex-col gap-10 `}>
                    <div>
                      <AccordionItem
                        className={`${
                          open === "1" ? "border border-black" : ""
                        } rounded-lg flex gap-6 shadow-xl`}
                        onClick={() => setOpen("1")}
                      >
                        <div>
                          <FcContacts size={60} />
                        </div>
                        <div>
                          <AccordionItemHeading
                            className={`${open === "1" ? "pb-2" : "pb-8"}`}
                          >
                            <AccordionItemButton className="p-2 text-[32px] font-semibold">
                              Unique and Reliable Identity
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel className="my-4">
                            <p className={` text-[18px]`}>
                              Health ID cards offer a highly secure and
                              encrypted platform. User consent is mandatory for
                              accessing their PHR every time.
                            </p>
                          </AccordionItemPanel>
                        </div>
                      </AccordionItem>
                    </div>

                    <div>
                      <AccordionItem
                        className={`${
                          open === "2" ? "border border-black" : ""
                        } rounded-lg flex gap-6 shadow-xl`}
                        onClick={() => setOpen("2")}
                      >
                        <div>
                          <TbLayoutNavbarFilled color="blue" size={60} />
                        </div>
                        <div>
                          <AccordionItemHeading
                            className={`${open === "2" ? "pb-2" : "pb-8"}`}
                          >
                            <AccordionItemButton className="p-2 text-[32px] font-semibold">
                              Consolidated Benefits Platform
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel className="my-4">
                            <p className={`text-[18px]`}>
                              Effortlessly link diverse healthcare benefits,
                              from public health programs to insurance schemes,
                              with your ABHA number.
                            </p>
                          </AccordionItemPanel>
                        </div>
                      </AccordionItem>
                    </div>

                    <div>
                      <AccordionItem
                        className={`${
                          open === "3" ? "border border-black" : ""
                        } rounded-lg flex gap-6 shadow-xl`}
                        onClick={() => setOpen("3")}
                      >
                        <div>
                          <AiOutlineUserAdd color="green" size={60} />
                        </div>
                        <div>
                          <AccordionItemHeading
                            className={`${open === "3" ? "pb-2" : "pb-8"}`}
                          >
                            <AccordionItemButton className="p-2 text-[32px] font-semibold">
                              Quick and Easy Registration
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel className="my-4">
                            <p className={`text-[18px]`}>
                              Register swiftly by entering basic information and
                              validating your Aadhaar or mobile number to
                              generate your Health ID card.
                            </p>
                          </AccordionItemPanel>
                        </div>
                      </AccordionItem>
                    </div>
                  </Accordion>
                </div>

                <div>
                  <img src={Phone} alt="phone image" className="h-[80vh]" />
                </div>
              </div>
              </div>
            </div>
            </div>
  )
}

export default Accordion