
export const fetchJobsData = (accessToken) => {
    return fetch(`https://upthick-talent-teama.onrender.com/jobs?openJobs=true&closedJobs=true
    `, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
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