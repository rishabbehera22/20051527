// Function to fetch train data from the API
export async function fetchTrainData(accessToken) {
    try {
        const response = await fetch('http://20.244.56.144:80/train/trains', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch train data');
        }

        const trainData = await response.json();
        return trainData;
    } catch (error) {
        throw error;
    }
}


// {
//     "companyName": "Train Cent",
//     "clientID": "0df8f8b7-9006-4200-8674-b16af12dd210",
//     "clientSecret": "xsRnSFqRIjOBrNax",
//     "ownerName": "Rishab",
//     "ownerEmail": "20051527@kiit.ac.in",
//     "rollNo": "20051527"
// }

// {
//     "token_type": "Bearer",
//     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODk5MzYyNDksImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudCIsImNsaWVudElEIjoiMGRmOGY4YjctOTAwNi00MjAwLTg2NzQtYjE2YWYxMmRkMjEwIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMDUxNTI3In0.wMCb_0z0pWnlZOc4L1jPNItcIrxJhhdQgLerNagGuwA",
//     "expires_in": 1689936249
// }