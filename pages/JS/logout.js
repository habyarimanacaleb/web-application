async function logout() {
    try {
      const response = await fetch('http://localhost:5000/logout', {
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