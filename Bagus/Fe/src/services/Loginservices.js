import Swal from 'sweetalert2';

export const handleLogin = async (username, password) => {
  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);

  const response = await fetch('http://localhost:5001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  });

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Login failed',
      text: 'Invalid username or password',
    });
    throw new Error('Login failed');
  }
};
