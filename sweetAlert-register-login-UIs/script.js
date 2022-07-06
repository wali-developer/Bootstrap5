// sweet alert function for Register button

async function submitForm() {
  await Swal.fire({
    title: "Create Account",
    html:
      '<input type="text" class="swal2-input" id="name" placeholder="Name">' +
      '<input type="email" class="swal2-input" id="email" placeholder="email">' +
      '<input type="password" class="swal2-input" id="pass" placeholder="password">' +
      '<input type="password" class="swal2-input" id="ConfirmPass" placeholder="confirm password">' +
      "<p class='form-para'>By signing up, you agree to the <span>terms of services</span> and <span>privacy policy</span></p>" +
      '<button type="submit" class="btn primary-button register-button">Register</button>',
    focusConfirm: false,
  });
}

// sweet alert function for Login button

async function Login() {
  await Swal.fire({
    title: "LOGIN",
    html:
      '<input type="email" class="swal2-input" id="email" placeholder="email">' +
      '<input type="password" class="swal2-input" id="pass" placeholder="password">' +
      '<div class="d-flex flex-row justify-content-between align-items-center loginInfoContainer my-1">' +
      '<div class="keepMeLogged">' +
      '<input type="checkbox" class="form-check-input" id="exampleCheck1">' +
      '<label class="form-check-label" for="exampleCheck1">Keep me logged in</label>' +
      "</div>" +
      '<div class="forgotPass">' +
      "<a class='forgot' href='#'>Forgot Passoword?</a>" +
      "</div>" +
      "</div>" +
      '<button class="btn primary-button register-button">Login</button>' +
      "<p class='noAccountPara'>Don't have an account? <a class='registerNow' href='#'>Register now</a></p>",
    focusConfirm: false,
  });
}
