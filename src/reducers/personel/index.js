import { GET_PERSONEL } from "../../actions/personelAction";

// Inisial State
const initialState = {
  getPersonelResult: false,
  getPersonelLoading: false,
  getPersonelError: false,
};

const personelReducer = (state = initialState, action) => {
  switch (action.type) {
    //   Simpan Hasil Request dari action kedalam state berdasarkan action type
    case GET_PERSONEL:
      return {
        ...state,
        getPersonelResult: action.payload.data,
        getPersonelLoading: action.payload.loading,
        getPersonelError: action.payload.errorMessage,
      };
    default:
      // Kembali ke state Awal jika dalam keadaan default
      return state;
  }
};

export default personelReducer;
