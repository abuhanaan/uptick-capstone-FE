
export const fetchJobsData = (accessToken) => {
    return fetch(`https://uptick-teama-capstone.onrender.com/jobs?openJobs=true&closedJobs=true`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        next: { revalidate: 1200 },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .catch(error => {
            console.error('An error occurred during data fetch:', error);
            throw error;
        });
};

export const fetchBlogPosts = (accessToken) => {
    return fetch(`https://uptick-teama-capstone.onrender.com/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        next: { revalidate: 1200 },
    })
        .then(response => {
            if (!response.ok) {
                // throw new Error('Failed to fetch data');
                return {error: 'Failed to fetch data'};
            }
            return response.json();
        })
        .catch(error => {
            console.error('An error occurred during data fetch:', error);
            // throw error;
            return {error: `Error ${error}`};
        });
};

export const fetchProgramApplicants = (accessToken, program) => {
    let programTitle = encodeURIComponent(program.replace(/\b\w/g, match => match.toUpperCase()));
    programTitle = programTitle === 'Ai%20%26%20Data' ? 'AI%20%26%20Data' : programTitle;

    return fetch(`https://uptick-teama-capstone.onrender.com/applications?programType=${programTitle}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        next: { revalidate: 1200 },
    })
        .then(response => {
            if (!response.ok) {
                // throw new Error('Failed to fetch data');
                console.log(response)
                if (response.status === 401) {
                    return {authError: 'Unauthorized'};
                }
                return {error: 'Failed to fetch data'};
            }
            return response.json();
        })
        .catch(error => {
            console.error('An error occurred during data fetch:', error);
            // throw error;
            return {error: `Error ${error}`};
        });
};

const str = `
Even if you don’t meet 100% of the qualifications below, please still consider applying. We believe in
a holistic approach when evaluating talent for our team.

Metabase is the easiest way for people to get insights from their data, from tiny startups who get up and running quickly to major corporations with tens of thousands of users. That's why people love us. <br /> <br />

We bring data tools with the elegance and simplicity of consumer products to the crufty world of enterprise business intelligence. We provide an opinionated open source starting point for how companies should measure, analyze and share their data, which is used by tens of thousands of companies. <br />

We’re looking for exceptional software engineers to join our team in doing the hard work that makes our users’ lives easy. We run on a mix of Clojure and JavaScript (and TypeScript), and the ideal candidate has shipped production code in one or more of these languages. You’ll be expected to ship major features end to end across our JavaScript and Clojure codebase, as well as deal with some of our trickier backend issues as they arise. Some familiarity with machine learning, compiler theory and modern big data infrastructures would be helpful. You should have strong product sensibilities and deeply care about the end user experience. <br /> <br />

We are hiring for multiple backend software engineer positions.
About You
- Experience in Clojure (or a strong desire to learn) <br />
- Track record of shipping products of significant complexity <br />
- Solid CS background (acquired through either a CS program or shipping software in a production setting) <br />
- Able to make good technical judgements and back them up articulately <br />
- Nice to have: Experience with JDBC and database integrations <br />
- Nice to have: Experience and knowledge of the Java ecosystem and JVM tuning <br />
- Nice to have: history of open source contributions <br />
- Nice to have: experience in JavaScript / Typescript (our frontend is in JS and TS) <br /> <br />

We're a global team (50% outside the US), fully distributed (from Thailand to California), who get things done asynchronously, with plenty of uninterrupted time, supporting each other to do the best work of our careers. We offer flexibility (define your own schedule and work from wherever you want), autonomy, and an environment that fosters growth, learning, and development. We're relentlessly user-focused and believe in building long-term value, not short-term hacks. And we raised a $30M Series B to take our approach to the next level for years to come.
`;

const post = {
    "id": 4,
    "title": "How to Build a Personal Brand as a Developer",
    "content": "There are a lot of stereotypes out there about developers—many of them untrue! But what is true is that generally as a developer, you start with a set of hard skills which you leverage into your career and professional development. You perform your work with a scientific skillset that is the perfect tool for specific tasks. While that skillset is extremely valuable and hireable, it might mean that it’s harder for you to launch the softer (yet equally crucial) skills that lead to a satisfying and fulfilling career… like building a personal brand.  But building a personal brand is a fulfilling and practical tactic in today’s industry. Far from a vanity move or unnecessary work, a personal brand:  Helps you stand out from the crowd: In a field where people have similar skillsets, you can differentiate yourself, and add an edge to your CV and portfolio.   Gives you credibility: As people in your industry become more familiar with your brand, it increases your chances to get the roles and promotions you want.  Provides the opportunity to network: Even in the process of building your brand, you’ll network more and connect with other developers, potential employers, and industry experts.  Puts your name on the map: If starting your own company, getting in at the ground level or rising to C-level is on your list of career goals, personal branding is a must!  A personal brand can help you in a myriad of crucial, career-defining ways. But how do you actually go about doing it? If you’re more comfortable showcasing your hard skills or if you’ve just never approached the idea of marketing (especially self-marketing), it might feel overwhelming or even impossible. The good news is, there are a lot of easy ways to take small steps into personal branding and build it naturally into your life. In this guide, we’ll break down some practical strategies!",
    "author": "Lambe Boluwatife",
    "image": "https://teama-fileupload.s3.amazonaws.com/Screenshot (502).png",
    "tags": [
        "developer",
        "code",
        "career"
    ],
    "published": true,
    "publicationDate": "2023-12-07T11:00:54.225Z",
    "createdAt": "2023-12-07T11:48:57.959Z",
    "updatedAt": "2023-12-07T11:48:57.959Z"
};


const data = [
    {
        "id": 1,
        "title": "jejebbh",
        "description": "jnedheej",
        "requirements": "bkeqqjqbwk",
        "applicationFormLink": "https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/",
        "companyLogo": "https://teama-fileupload.s3.amazonaws.com/Screenshot (13).png",
        "applicationDeadline": "2023-12-21T14:10:10.007Z",
        "startDate": "2024-01-06T14:10:10.007Z",
        "endDate": "2024-12-06T14:10:10.007Z",
        "createdAt": "2023-12-06T14:15:22.752Z",
        "updatedAt": "2023-12-06T14:15:22.752Z"
    },

    [
        {
            "id": 1,
            "title": "dbjksbkj",
            "content": "jkwebk",
            "author": "jkee, kew",
            "image": "https://teama-fileupload.s3.amazonaws.com/Screenshot (9).png",
            "tags": [
                "tag1",
                "tag2"
            ],
            "published": true,
            "publicationDate": "2023-12-06T14:10:10.007Z",
            "createdAt": "2023-12-06T14:10:51.173Z",
            "updatedAt": "2023-12-06T14:10:51.173Z"
        }
    ]
];