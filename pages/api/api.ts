export const apiLogin = async (payload: { email: string; password: string }) => {
  const response = await fetch('http://localhost:8081/api/auth/authenticate', { // Adjust the endpoint as necessary
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json(); // Adjust based on the actual API response structure
};

export const apiLogout = async (payload: { token: string }) => {
  const response = await fetch('http://localhost:8081/api/v1/auth/logout', { // Adjust the endpoint as necessary
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${payload.token}`,
    },
    body: JSON.stringify(payload),
  });
  console.log(response);
  if (response.ok) {
    console.log(response);
    return response;
  } else {
    throw new Error('Login failed');
  }
};