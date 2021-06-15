/* 
    To do : fake fetch function with HTTP status resolution
*/

// By default we'll consider the server met an error

const statusCodes = [200, 401, 403, 500];

let response = {
  ok: false,
  status: 500,
  message: "Internal server error",
};

export const resolveStatus = () => {
  // Will randomly assign a status code from a predetermined status codes array
  const randomStatusIndex = Math.floor(Math.random() * statusCodes.length);

  const status = statusCodes[randomStatusIndex];
  console.log("Status :", status);

  response.status = status;
  if (status !== 200) {
    response.ok = false;
    response.message =
      status === 401 ? "Unauthorized access" : response.message;
    response.message = status === 403 ? "Forbidden access" : response.message;
    response.message =
      status === 500 ? "Internal server error" : response.message;
  } else {
    response = { ...response, ok: true, message: "Authorized access" };
  }
  console.log(response);
  // Waits 2 seconds before returning the response object
  setTimeout(2000);
  return response;

  // Manual assignment for testing purposes
  // const status = statusCode[0];
};
