import axios from "axios";
import { BASE_API_URL } from "../utility/global";

// Inisialisasi action type
export const GET_PERSONEL = "GET_PERSONEL";

export const getPersonel = () => {
  return (dispatch) => {
    // Loading Data
    dispatch({
      type: GET_PERSONEL,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Get Request
    axios({
      method: "GET",
      url: BASE_API_URL + "?results=28",
      timeout: 12000,
    })
      .then((response) => {
        // Ketika Berhasil
        dispatch({
          type: GET_PERSONEL,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // Ketika Error
        console.log(error)
        dispatch({
          type: GET_PERSONEL,
          payload: {
            loading: false,
            data: false,
            errorMessage: "Terjadi Kesalahan",
          },
        });
      });
  };
};
