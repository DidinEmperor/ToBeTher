import axios from "axios";

export const getMotivationQuote = async () => {
  try {
    const response = await axios.get("https://api.quotable.io/random");
    return response.data.content + " — " + response.data.author;
  } catch (error) {
    return "Gagal memuat quote";
  }
};
