function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const response = "This is the API response";
      // Simulating success
      resolve(response);
      // Simulating failure
      // reject(new Error("Failed to fetch data from API"));
    }, 2000); // Simulating a delay of 2 seconds
  });
}

// Example usage:
getResponseFromAPI()
  .then(response => {
    console.log("API Response:", response);
  })
  .catch(error => {
    console.error("Error fetching data:", error.message);
  });

