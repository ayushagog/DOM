
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    const usernameRegx = /^[A-Za-z0-9 ]{3,20}$/;
    const phoneRegx = /^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    let val = true;

    document.getElementById('usernameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    const phoneLengthRegx = /^[0-9]{10,10}$/;
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    if (!usernameRegx.test(username)) {
      document.getElementById('usernameError').textContent = 'User name must be 3-20 char';
      val = false;
    }

    if (!phoneRegx.test(phone)) {
      document.getElementById('phoneError').textContent = 'Invalid phone number';
      val = false;
    }else if (!phoneLengthRegx.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be exactly 10 digits long.';
        val = false;
    }

    if (!emailRegx.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email address';
      val = false;
    }

    if (!passwordRegx.test(password)) {
      document.getElementById('passwordError').textContent = 'password must be 8-15 char with special symbol';
      val = false;
    }

    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
      val = false;
    }

    if (val) {
      alert('Registration Successful!');
      location.reload();

     
    }
  });
