export const login = async (data) => {
    const response = await fetch("http://localhost:3003/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  };