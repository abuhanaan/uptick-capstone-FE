import React from "react";

export const SoftwareEngineering = () => {
  return (
    <section className="bg-white">
      <div className="container py-10 mt-20">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-2xl">Software Enginnering</h2>
          <p className="uppercase text-sm">submit our application</p>
        </div>

        <form className="mt-3 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label>First Name</label>
            <input
              className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none"
              type="text"
              placeholder="First Name"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Last Name</label>
            <input
              className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Phone Number</label>
            <input
              className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none"
              type="tel"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>City</label>
            <input
              className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none"
              type="tel"
              placeholder="e.g Jos, Plateau"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>How many years of programming experience do you have?</label>
            <select className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none">
              <option
                className="hover:bg-primary-blue"
                value="Less than a year"
              >
                Less than a year
              </option>
              <option className="hover:bg-primary-blue" value="1 - 2 years">
                1 - 2 years
              </option>
              <option className="hover:bg-primary-blue" value="Above 2 years">
                Above 2 years
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label>
              What stack are you most proficient in or looking to land a job in
              this fellowship?
            </label>
            <select className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none">
              <option className="hover:bg-primary-blue" value="Frontend">
                Frontend
              </option>
              <option className="hover:bg-primary-blue" value="Backend">
                Backend
              </option>
              <option className="hover:bg-primary-blue" value="Fullstack">
                Fullstack
              </option>
              <option className="hover:bg-primary-blue" value="Mobile">
                Mobile
              </option>
              <option className="hover:bg-primary-blue" value="Other">
                Other
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label>
              If you are a front end engineer, what technology do you use?
            </label>
            <select className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none">
              <option className="hover:bg-primary-blue" value="ReactJS">
                ReactJS
              </option>
              <option className="hover:bg-primary-blue" value="Angular">
                Angular
              </option>
              <option className="hover:bg-primary-blue" value="VueJS">
                VueJS
              </option>
              <option className="hover:bg-primary-blue" value="NextJS">
                NextJS
              </option>
              <option className="hover:bg-primary-blue" value="Other">
                Other...
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label>
              If you are a back end engineer, what technology do you use?
            </label>
            <select className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none">
              <option className="hover:bg-primary-blue" value="NodeJS">
                NodeJS
              </option>
              <option
                className="hover:bg-primary-blue"
                value="Python (Django/Flask)"
              >
                Python (Django/Flask)
              </option>
              <option
                className="hover:bg-primary-blue"
                value="Java (Springboot)"
              >
                Java (Springboot)
              </option>
              <option className="hover:bg-primary-blue" value="C# (.Net)">
                C# (.Net)
              </option>
              <option className="hover:bg-primary-blue" value="Typescript">
                Typescript
              </option>
              <option className="hover:bg-primary-blue" value="NextJS">
                NextJS
              </option>
              <option className="hover:bg-primary-blue" value="PHP">
                PHP
              </option>
              <option className="hover:bg-primary-blue" value="Laravel">
                Laravel
              </option>
              <option
                className="hover:bg-primary-blue"
                value="Other PHP frameworks(Xend, Code Igniter)"
              >
                Other PHP frameworks(Xend, Code Igniter)
              </option>
              <option className="hover:bg-primary-blue" value="Ruby on Rails">
                Ruby on Rails
              </option>
              <option className="hover:bg-primary-blue" value="Golang">
                Golang
              </option>
              <option className="hover:bg-primary-blue" value="Other">
                Other
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label>
              If you are a mobile engineer, what technology do you use?
            </label>
            <select className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none">
              <option
                className="hover:bg-primary-blue"
                value="Flutter (Dart Enginnering)"
              >
                Flutter (Dart Enginnering)
              </option>
              <option
                className="hover:bg-primary-blue"
                value="Python (Django/Flask)"
              >
                Python (Django/Flask)
              </option>
              <option className="hover:bg-primary-blue" value="React Native">
                React Native
              </option>
              <option
                className="hover:bg-primary-blue"
                value="Native Andriod (Kotlin)"
              >
                Native Andriod (Kotlin)
              </option>
              <option
                className="hover:bg-primary-blue"
                value="Native Android (Java)"
              >
                Native Android (Java)
              </option>
              <option
                className="hover:bg-primary-blue"
                value="IOS (Swift/Objective C)"
              >
                IOS (Swift/Objective C)
              </option>
              <option className="hover:bg-primary-blue" value=".Net (Xamarin)">
                .Net (Xamarin)
              </option>
              <option className="hover:bg-primary-blue" value="Ionic Framework">
                Ionic Framework
              </option>
              <option className="hover:bg-primary-blue" value="Other">
                Other
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label>
              Other tracks? List your most proficient technologies below?
            </label>
            <input
              className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none"
              type="text"
              placeholder=""
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>
              What are your career goals between the next two years?
            </label>
            <textarea
              required
              rows={2}
              className="w-[100%] sm:w-[350px] flex-1 md:flex-[2] border-neutral border-[1px] border-solid rounded-md bg-neutral-10 px-2 py-2 md:px-4 focus:outline-none"
              placeholder="message"
            ></textarea>
          </div>

          <div className="flex flex-col gap-1">
            <label>Link to Github</label>
            <input
              className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none"
              type="text"
              placeholder=""
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Link to portfolio or one of your completed Projects</label>
            <input
              className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none"
              type="text"
              placeholder=""
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>
              Are you able to commit at least 40 hours per week to participate
              fully in the fellowship?
            </label>
            <select className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none">
              <option className="hover:bg-primary-blue" value="Yes">
                Yes
              </option>
              <option className="hover:bg-primary-blue" value="No">
                No
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label>How did you get to know about the fellowship?</label>
            <select className="self-start border-neutral border-[1px] w-[90%] sm:w-[350px] border-solid rounded-md text-sm  bg-neutral-10 px-2 py-1 md:px-3 focus:outline-none">
              <option
                className="hover:bg-primary-blue"
                value="Andela Learning Comuunity"
              >
                Andela Learning Comuunity
              </option>
              <option
                className="hover:bg-primary-blue"
                value="Google Developer Groups Jos"
              >
                Google Developer Groups Jos
              </option>
              <option
                className="hover:bg-primary-blue"
                value="Google Developer Groups Lagos"
              >
                Google Developer Groups Lagos
              </option>
              <option
                className="hover:bg-primary-blue"
                value="Google Developer Groups Ikorodu"
              >
                Google Developer Groups Ikorodu
              </option>
              <option className="hover:bg-primary-blue" value="GSDC Unilag">
                GSDC Unilag
              </option>
              <option className="hover:bg-primary-blue" value="GSDC Unijos">
                GSDC Unijos
              </option>
              <option className="hover:bg-primary-blue" value="GSDC FUTA">
                GSDC FUTA
              </option>
              <option className="hover:bg-primary-blue" value="GSDC OAU">
                GSDC OAU
              </option>
              <option className="hover:bg-primary-blue" value="GSDC UI">
                GSDC UI
              </option>
              <option className="hover:bg-primary-blue" value="nHub">
                nHub
              </option>
              <option className="hover:bg-primary-blue" value="Akure Tech Hub">
                Akure Tech Hub
              </option>
              <option className="hover:bg-primary-blue" value="Code Plateau">
                Code Plateau
              </option>
              <option
                className="hover:bg-primary-blue"
                value="Meta Developer Circle Accra Ghana"
              >
                Meta Developer Circle Accra Ghana
              </option>
              <option
                className="hover:bg-primary-blue"
                value="Meta Developer Circle Accra Aba"
              >
                Meta Developer Circle Accra Aba
              </option>
              <option
                className="hover:bg-primary-blue"
                value="Meta Developer Circle Accra Lagos"
              >
                Meta Developer Circle Accra Lagos
              </option>
              <option
                className="hover:bg-primary-blue"
                value="Meta Developer Circle Accra Abuja"
              >
                Meta Developer Circle Accra Abuja
              </option>
            </select>
          </div>

          <div className="mt-4">
            <button className="bg-primary-blue text-sm text-white px-[16px] py-[10px] rounded-md  flex items-center justify-center">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
