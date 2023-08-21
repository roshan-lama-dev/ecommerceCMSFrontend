import axios from "axios";

const apiRoot = process.env.ReactAppApi;

export const axiosProcessor = async ({ method, url, objDt }) => {
  try {
    const { data } = await axios({ method, url, data: objDt, headers });
    return data;
  } catch (error) {
    return {
      status: error,
      message: error.message,
    };
  }
};
