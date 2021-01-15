
const login = 'auth/login';
const refreshToken = 'auth/refresh-token';
const getUserInvitationsByUserId = 'user-invitation/user/{{userId}}';
const getUserGuestsByUserId = 'guest/users/{{userId}}';
const getUserInfoByUserId = 'user/minimal/{{userId}}';
const updateUserInvitationResponse = 'user-invitation/answer/user/{{userId}}';
const refreshUserGuestByUserId = 'guest/refresh/user/{{userId}}';
const updateUserProfile = 'user/complete/{{userId}}';

const API_ENDPOINTS = {
  login,
  refreshToken,
  getUserInvitationsByUserId,
  getUserGuestsByUserId,
  getUserInfoByUserId,
  updateUserInvitationResponse,
  refreshUserGuestByUserId,
  updateUserProfile
};

export default API_ENDPOINTS;
