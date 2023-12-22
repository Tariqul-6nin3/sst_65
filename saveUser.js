export const saveUser = async (email, password, name, phone) => {
  const response = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name, phone }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Unable to register user");
  }

  return data;
};
