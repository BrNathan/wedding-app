
const login = 'auth/login';
const refreshToken = 'auth/refresh-token';
const getUserInvitationsByUserId = 'user-invitation/user/{{userId}}';
const getUserGuestsByUserId = 'guest/user/{{userId}}';
const getUserInfoByUserId = 'user/minimal/{{userId}}';
const updateUserInvitationResponse = 'user-invitation/answer/user/{{userId}}';
const refreshUserGuestByUserId = 'guest/refresh/user/{{userId}}';
const updateUserProfile = 'user/complete/{{userId}}';
const checkAvailabilityEmail = 'user/available-email';
const forgetPassword = 'auth/forget-password';

const API_ENDPOINTS = {
  login,
  refreshToken,
  getUserInvitationsByUserId,
  getUserGuestsByUserId,
  getUserInfoByUserId,
  updateUserInvitationResponse,
  refreshUserGuestByUserId,
  updateUserProfile,
  checkAvailabilityEmail,
  forgetPassword
};

export default API_ENDPOINTS;
