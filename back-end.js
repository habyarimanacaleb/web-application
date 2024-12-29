
// post data in back-end server
const back_end_uri = "https://web-app-back-end.onrender.com"
const getAllApplications ="https://web-app-back-end.onrender.com/api/applications"


document.getElementById('applicationForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      dob: document.getElementById('dob').value,
      gender: document.querySelector('input[name="gender"]:checked').value,
      address: document.getElementById('address').value,
      highSchool: document.getElementById('highSchool').value,
      grades: document.getElementById('grades').value,
      course: document.getElementById('course').value,
      message: document.getElementById('message').value,
    };
   
    try {
        const response = await fetch('https://web-app-back-end.onrender.com/apply', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Application submitted successfully!');
          document.getElementById('applicationForm').reset();
        } else {
          alert('Failed to submit application');
          document.getElementById('applicationForm').reset();
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit application');
      }
    });
