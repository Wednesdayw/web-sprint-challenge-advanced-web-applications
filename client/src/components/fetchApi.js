import { axiosWithAuth } from "./axiosWithAuth";

export function fetchApi() {
  return axiosWithAuth()
    .get("/api/colors")
    .then((response) => {
      console.log(response);
      return response;
    });
}