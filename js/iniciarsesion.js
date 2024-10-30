const showHiddenPassword = (inputPassword, inputIcon) => {
  const input = document.getElementById(inputPassword),
        iconEye = document.getElementById(inputIcon);

  iconEye.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text';
      iconEye.classList.add('ri-eye-line');
      iconEye.classList.remove('ri-eye-off-line');
    } else {
      input.type = 'password';
      iconEye.classList.remove('ri-eye-line');
      iconEye.classList.add('ri-eye-off-line');
    }
  });
};


showHiddenPassword('password', 'input-icon');

document.getElementById('register-btn').addEventListener('click', () => {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
});

document.getElementById('cancel-register').addEventListener('click', () => {
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
});

document.getElementById('save-register').addEventListener('click', () => {
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  if (name && email && password) {
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert('Registro exitoso');
    window.location.href = 'index.html';
  } else {
    alert('Por favor completa todos los campos');
  }
});

document.querySelector('.login__form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (email === 'admin444@gmail.com' && password === 'TecnoTapiz') {
    window.location.href = 'admin.html'; 
  } else {
    alert('Correo o contraseña incorrectos');
  }
  
});

