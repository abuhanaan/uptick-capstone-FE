import React from "react";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export const Footer = () => {
  return (
    <section className="bg-dark py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div>
              <img src="/images/navbar-logo.png" alt="Footer logo" />
            </div>

            <div className="flex flex-col">
              <p className="text-sm text-neutral ">
                Stay in the loop with the latest industry insights, <br></br>{" "}
                success stories, and program updates. Subscribe to <br></br> our
                newsletter today!
              </p>
              <div className="mt-3 max-w-[276px ] sm:w-[276px] h-[36px]  self-start flex relative">
                <input
                  type="text"
                  className="focus:outline-none ps-4 pr-3 text-sm rounded-s-md"
                  placeholder="Enter your Email Address "
                />
                <button className="bg-primary-blue text-white px-3 py-2 rounded-md rounded-s-none text-sm  flex items-center justify-center absolute right-[0px] md:right-[6px]">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-between order-1 lg:order-2">
            <div className="flex flex-col gap-8">
              <h3 className="text-white">Useful Links</h3>

              <div className="flex flex-col gap-3">
                <Link to="/" className="text-sm text-neutral">
                  Home
                </Link>
                <Link to="/" className="text-sm text-neutral">
                  About Us
                </Link>
                <Link to="/" className="text-sm text-neutral">
                  Jobs
                </Link>
                <Link to="/" className="text-sm text-neutral">
                  Blogs
                </Link>
                <Link to="/" className="text-sm text-neutral">
                  Support
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <h3 className="text-white">Our Programs</h3>

              <div className="flex flex-col gap-3">
                <p className="text-sm text-neutral">Uptick Talent Beginners</p>
                <p className="text-sm text-neutral">Uptick Talent Tech</p>
                <p className="text-sm text-neutral">Uptick Talent Business</p>
                <p className="text-sm text-neutral">Uptick Talent Map</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <h3 className="text-white">Contact Us</h3>

              <div className="flex flex-col gap-3">
                <p className="flex gap-2 items-center text-neutral">
                  <FiPhone className="text-2xl" />{" "}
                  <span className="text-sm">+234 9037424764</span>
                </p>
                <p className="flex gap-2 items-center text-neutral">
                  <CiMail className="text-2xl" />{" "}
                  <span className="text-sm">hey@upticktalent.africa</span>
                </p>
                <p className="flex gap-2 items-center  text-neutral">
                  <SlLocationPin className="text-2xl" />{" "}
                  <span className="text-sm">
                    7A, Hara-Hyel House, Dogon <br />
                    Karfe, Jos, Plateau State, Nigeria
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-[1px] border-primary-blue border-solid mt-6 pt-4 flex items-center justify-between flex-wrap gap-4">
          <p className="text-neutral text-sm">
            {" "}
            Copyright © 2023 Uptick Talent All Rights Researved
          </p>

          <div className="flex gap-4">
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-1 bg-neutral ">
              <div className="w-[90%] h-[90%] rounded-full flex justify-center items-center bg-primary-blue">
                <FaTwitter className="text-white" />
              </div>
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-1 bg-neutral ">
              <div className="w-[90%] h-[90%] rounded-full flex justify-center items-center bg-primary-blue">
                <FaInstagram className="text-white" />
              </div>
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-1 bg-neutral ">
              <div className="w-[90%] h-[90%] rounded-full flex justify-center items-center bg-primary-blue">
                <CiLinkedin className="text-white" />
              </div>
            </div>
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full p-1 bg-neutral ">
              <div className="w-[90%] h-[90%] rounded-full flex justify-center items-center bg-primary-blue">
                <FaFacebook className="text-white" />
              </div>
            </div>
          </div>

          <p className="text-neutral text-sm">
            | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </section>
  );
};
