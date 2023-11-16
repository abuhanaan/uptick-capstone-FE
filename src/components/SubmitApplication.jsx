import React from "react";
import { Button } from "./Button";
import { CgAttachment } from "react-icons/cg";

export const SubmitApplication = () => {
  return (
    <section className="mt-20 bg-white">
      <div className="container">
        <div className="w-[90%] mx-auto pt-6">
          <h2 className="text-2xl font-semibold">
            Software Engineer (Backend)
          </h2>

          <p className="font-bold text-sm my-2">
            GLOBAL REMOTE ENGINEERING / FULL-TIME <br /> (REMOTE) / REMOTE
          </p>

          <p className="my-6">SUBMIT YOUR APPLICATION</p>

          <form>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row gap-1">
                <label
                  className="flex-[2] flex flex-col md:flex-row "
                  htmlFor="resume"
                >
                  <span className="flex-[2]">Resume/CV</span>
                  <input
                    className="flex-1 bg-neutral hidden"
                    type="file"
                    name=""
                    id="resume"
                  />
                  <div className="flex-1 md:flex-[2] flex gap-1 items-center cursor-pointer border-neutral border-[1px] border-solid rounded-md bg-neutral px-2 py-2 md:px-4 focus:outline-none">
                    <span>
                      <CgAttachment />
                    </span>
                    <span className="text-sm text-gray-700">
                      Attach Resume / File
                    </span>
                  </div>
                </label>
              </div>

              <div className="flex flex-col md:flex-row gap-1">
                <label className="text-md md:flex-[2]">Fullname</label>
                <input
                  required
                  className="flex-1 md:flex-[2] border-neutral border-[1px] border-solid rounded-md bg-neutral-10 px-2 py-2 md:px-4 focus:outline-none"
                  type="text"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-1 ">
                <label className="text-md flex-[2]">Email</label>
                <input
                  required
                  className="flex-1 md:flex-[2] border-neutral border-[1px] border-solid rounded-md bg-neutral-10 px-2 py-2 md:px-4 focus:outline-none"
                  type="email"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-1 ">
                <label className="text-md flex-[2]">Phone</label>
                <input
                  required
                  className="flex-1 md:flex-[2] border-neutral border-[1px] border-solid rounded-md bg-neutral-10 px-2 py-2 md:px-4 focus:outline-none"
                  type="tel"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-1 ">
                <label className="text-md flex-[2]">Current Company</label>
                <input
                  className="flex-1 md:flex-[2] border-neutral border-[1px] border-solid rounded-md bg-neutral-10 px-2 py-2 md:px-4 focus:outline-none"
                  type="text"
                />
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-md uppercase">Links</h3>
              <div className="flex flex-col gap-4 mt-10">
                <div className="flex flex-col md:flex-row gap-1 ">
                  <label className="text-md flex-[2]">LinkedIn URL</label>
                  <input
                    required
                    className="flex-1 md:flex-[2] border-neutral border-[1px] border-solid rounded-md bg-neutral-10 px-2 py-2 md:px-4 focus:outline-none"
                    type="text"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-1 ">
                  <label className="text-md flex-[2]">Twitter URL</label>
                  <input
                    required
                    className="flex-1 md:flex-[2] border-neutral border-[1px] border-solid rounded-md bg-neutral-10 px-2 py-2 md:px-4 focus:outline-none"
                    type="text"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-1 ">
                  <label className="text-md flex-[2]">Github URL</label>
                  <input
                    required
                    className="flex-1 md:flex-[2] border-neutral border-[1px] border-solid rounded-md bg-neutral-10 px-2 py-2 md:px-4 focus:outline-none"
                    type="text"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-1 ">
                  <label className="text-md flex-[2]">Portfolio URL</label>
                  <input
                    required
                    className="flex-1 md:flex-[2] border-neutral border-[1px] border-solid rounded-md bg-neutral-10 px-2 py-2 md:px-4 focus:outline-none"
                    type="text"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-1 ">
                  <label className="text-md flex-[2]">Other website </label>
                  <input
                    required
                    className="flex-1 md:flex-[2] border-neutral border-[1px] border-solid rounded-md bg-neutral-10 px-2 py-2 md:px-4 focus:outline-none"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="uppercase">Where are you based?</h2>

              <div className="mt-4">
                <div className="mt-2 flex flex-col gap-2">
                  <label>(City, Country)</label>
                  <input
                    required
                    type="text"
                    className="flex-1 md:flex-[2] border-neutral border-[1px] border-solid rounded-md bg-neutral-10 px-2 py-2 md:px-4 focus:outline-none"
                    placeholder="Type your response"
                  />
                </div>

                <div className="mt-6">
                  <div className="mt-4 flex flex-col gap-4">
                    <label className="uppercase">Additional Information</label>
                    <textarea
                      required
                      rows={6}
                      className="w-[100%] flex-1 md:flex-[2] border-neutral border-[1px] border-solid rounded-md bg-neutral-10 px-2 py-2 md:px-4 focus:outline-none"
                      placeholder="Name"
                    ></textarea>
                  </div>
                </div>

                <div className="my-10 text-center flex justify-center">
                  <button className="bg-primary-blue text-sm text-white px-[16px] py-[10px] rounded-md  flex items-center justify-center">
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
