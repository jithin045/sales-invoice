import { commonApi } from "./commonApi";
import base_url from "./server_url";

//add-company
export const addCompanies = async (data) => {
    return await commonApi("POST", `${base_url}/addcompanies`, data, "")
}


export const homeCompanys = async () => {
    return await commonApi('GET', `${base_url}/home-companys`, "", "")
}