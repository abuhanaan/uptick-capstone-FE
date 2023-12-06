
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
    }
  ];