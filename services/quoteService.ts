export const getMotivationQuote = async (): Promise<string> => {
  const quotes = [
    "Belajar hari ini untuk masa depan yang lebih baik.",
    "Sedikit demi sedikit menjadi bukit.",
    "Waktu terbaik untuk belajar adalah sekarang."
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
};
