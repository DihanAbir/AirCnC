import { ExpData, HomeData } from "../utils/Data/Exprence";

// create the reducer
const initState = {
  name: "dihan abir",
  services: ExpData,
  Homeservices: HomeData,
};

const rootReducer = (state = initState, actions) => {
  return state;
};

export default rootReducer;
