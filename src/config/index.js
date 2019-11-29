export const BETA_API = "";
export const LIVE_API = "";
export const API_URL = !__DEV__ ? BETA_API : LIVE_API;

export default {
  allowTextFontScaling: false,
  API_URL,
  textSelectable: true
}
