import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";

export const JobDetails = () => {
  const job = {
    id: 2,
    img: "/images/software-developer.png",
    title: "Software Engineer (Frontend)",
    desc: "We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages...",
    due: "18th Nov 2023",
  };
  return (
    <section className="mt-20 bg-white">
      <div className="container">
        <div className="w-[90%] mx-auto pt-6">
          <h2 className="text-2xl font-semibold">{job.title}</h2>
          <div className="my-2 flex gap-4">
            <span>Deadline</span>
            <p>{job.due}</p>
          </div>
          <h2 className="text-xl">Job Description/ Requirement</h2>

          <p className="max-sm:text-sm mt-4">
            Even if you don’t meet 100% of the qualifications below, please
            still consider applying. We believe in a holistic approach when
            evaluating talent for our team.
          </p>

          <p className="max-sm:text-sm my-4">
            Metabase is the easiest way for people to get insights from their
            data, from tiny startups who get up and running quickly to major
            corporations with tens of thousands of users. That's why people love
            us.
          </p>

          <p className="max-sm:text-sm">
            We bring data tools with the elegance and simplicity of consumer
            products to the crufty world of enterprise business intelligence. We
            provide an opinionated open source starting point for how companies
            should measure, analyze and share their data, which is used by tens
            of thousands of companies.
          </p>

          <p className="max-sm:text-sm my-4">
            We’re looking for exceptional software engineers to join our team in
            doing the hard work that makes our users’ lives easy. We run on a
            mix of Clojure and JavaScript (and TypeScript), and the ideal
            candidate has shipped production code in one or more of these
            languages. You’ll be expected to ship major features end to end
            across our JavaScript and Clojure codebase, as well as deal with
            some of our trickier backend issues as they arise. Some familiarity
            with machine learning, compiler theory and modern big data
            infrastructures would be helpful. You should have strong product
            sensibilities and deeply care about the end user experience.
          </p>

          <p className="max-sm:text-sm">
            We are hiring for multiple backend software engineer positions.{" "}
            <br />
            About You
          </p>

          <ul className="mt-2 mb-6">
            <li className="max-sm:text-sm">
              Experience in Clojure (or a strong desire to learn)
            </li>
            <li className="max-sm:text-sm">
              Track record of shipping products of significant complexity
            </li>
            <li className="max-sm:text-sm">
              Solid CS background (acquired through either a CS program or
              shipping software in a production setting)
            </li>
            <li className="max-sm:text-sm">
              Able to make good technical judgements and back them up
              articulately
            </li>
            <li className="max-sm:text-sm">
              Nice to have: Experience with JDBC and database integrations
            </li>

            <li className="max-sm:text-sm">
              Nice to have: Experience and knowledge of the Java ecosystem and
              JVM tuning
            </li>

            <li className="max-sm:text-sm">
              Nice to have: history of open source contributions
            </li>

            <li className="max-sm:text-sm">
              Nice to have: experience in JavaScript / Typescript (our frontend
              is in JS and TS)
            </li>
          </ul>

          <p className="max-sm:text-sm">
            We're a global team (50% outside the US), fully distributed (from
            Thailand to California), who get things done asynchronously, with
            plenty of uninterrupted time, supporting each other to do the best
            work of our careers. We offer flexibility (define your own schedule
            and work from wherever you want), autonomy, and an environment that
            fosters growth, learning, and development. We're relentlessly
            user-focused and believe in building long-term value, not short-term
            hacks. And we raised a $30M Series B to take our approach to the
            next level for years to come.
          </p>

          <div className="my-6">
            <Link to="/submit-application">
              <Button text="Apply For This Job" type="filled" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
