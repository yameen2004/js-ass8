var symbols = '!@#$%^&*()_+{}[]|:;"<>,.?/~';
var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';

function generatePassword() {
  var password = '';
  var length = document.getElementById('passwordLengthRange').value;
  var includeSymbols = document.getElementById('symbolsCheckbox').checked;
  var includeAlphabet = document.getElementById('alphabetCheckbox').checked;
  var includeNumbers = document.getElementById('numbersCheckbox').checked;
  
  var checked = '';
  if (includeSymbols) checked += symbols;
  if (includeAlphabet) checked += alphabet;
  if (includeNumbers) checked += numbers;

  if (checked.length === 0) {
    alert("Please select at least one option.");
    return;
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * checked.length);
    password += checked[randomIndex];
  }

  document.getElementById('password').value = password;
  
  // Determine password strength
  var strength = '';
  if (includeSymbols && includeAlphabet && includeNumbers) {
    strength = 'Very Strong';
  } else if (includeSymbols || includeAlphabet) {
    strength = 'Strong';
  } else {
    strength = 'Normal';
  }
  
  // Display password strength
  document.getElementById('passwordStrength').innerText = `Your password is ${strength}`;
}

document.getElementById('passwordLengthRange').addEventListener('input', function() {
  document.getElementById('passwordLengthValue').innerText = this.value;
});

document.getElementById('showPasswordCheckbox').addEventListener('change', function() {
  var passwordInput = document.getElementById('password');
  if (this.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});