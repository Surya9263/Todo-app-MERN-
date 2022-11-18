export const setHeaders = () => {
  const header = {
    headers: {
      "x-auth-token": localStorage.getItem("token"), // refer middleware in backend
    },
  };
  return header;
};
