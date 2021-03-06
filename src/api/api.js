import axios from "axios";

let backendAddress = "http://localhost:8080/";

function sendRequest(address, endpoint, method, body, headers) {
  headers["Content-Type"] = "application/json";
  return axios({
    method: method.toLowerCase(),
    url: address + endpoint,
    headers: headers,
    data: body
  });
}

export function getMeals(){
  return sendRequest(
    backendAddress,
    "meals",
    "get",
    {},
    {}
  );
}


