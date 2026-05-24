function nameValidator(name: string): string | boolean {
  if (!name || name.length < 3) {
    return false;
  }

  name = name.trim().toLowerCase().replace(/\s+/g, " ");

  if (/^[A-Za-z ']+$/.test(name)) return name;

  return false;
}

function emailValidator(email: string): string | boolean {
  if (!email || email.length < 3) return false;

  email = email.trim().toLowerCase();

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return email;

  return false;
}

function passwordValidator(password: string): boolean {
  if (!password || (password.length < 8 && password.length > 24)) return false;
  
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  if (!/[^A-Za-z0-9]/.test(password)) return false;

  return true;
}

export { nameValidator, emailValidator, passwordValidator };
