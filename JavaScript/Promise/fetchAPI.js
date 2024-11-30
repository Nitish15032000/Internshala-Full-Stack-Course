// Define the URL of the API endpoint
const apiUrl = 'https://api.example.com/data';

// Use the Fetch API to make a GET request to the API endpoint
fetch(apiUrl)
  .then(response => {
    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Log the fetched data to the console
    console.log('Data fetched successfully:', data);
  })
  .catch(error => {
    // Log any errors that occur during the fetch request
    console.error('Error fetching data:', error);
  });