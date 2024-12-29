async function logout() {
    try {
      const response = await fetch('https://web-app-back-end.onrender.com/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        alert('Logout successful!');
        window.location.href = 'login.html';
      } else {
        alert('Failed to logout');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to logout');
    }
  }