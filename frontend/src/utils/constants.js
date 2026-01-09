export const API_ENDPOINTS = {
  // Auth
  REGISTER: '/register',
  LOGIN: '/login',
  VERIFY_EMAIL: '/verify-email',
  
  // Donations
  CREATE_ORDER: '/donations/create-order',
  CAPTURE_ORDER: '/donations/capture-order',
  MY_DONATIONS: '/donations/my-donations',
  VERIFY_ORDER: '/donations/verify',
};

export const STORAGE_KEYS = {
  TOKEN: 'givehub_token',
  USER: 'givehub_user',
};

export const PRESET_AMOUNTS = [5, 10, 25, 50, 100];

export const TOAST_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful!',
  LOGIN_ERROR: 'Invalid credentials',
  REGISTER_SUCCESS: 'Registration successful! Please verify your email.',
  REGISTER_ERROR: 'Registration failed. Please try again.',
  DONATION_SUCCESS: 'Thank you for your donation!',
  DONATION_ERROR: 'Payment failed. Please try again.',
  VERIFY_EMAIL_SUCCESS: 'Email verified successfully!',
  VERIFY_EMAIL_ERROR: 'Invalid or expired OTP',
};