
const login = 'login';
const getUserInvitationsByUserId = 'users/{{userId}}/user-invitations';
const getUserGuestsByUserId = 'users/{{userId}}/guests';
const getUserInfoByUserId = 'users/{{userId}}?filter=%7B%0A%20%20%22fields%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20true%2C%0A%20%20%20%20%22firstName%22%3A%20true%2C%0A%20%20%20%20%22lastName%22%3A%20true%0A%20%20%7D%0A%7D';
const updateUserInvitationResponse = 'users/{{userId}}/user-invitations';
const refreshUserGuestByUserId = 'guests/refresh/user/{{userId}}';

const API_ENDPOINTS = {
  login,
  getUserInvitationsByUserId,
  getUserGuestsByUserId,
  getUserInfoByUserId,
  updateUserInvitationResponse,
  refreshUserGuestByUserId
};

export default API_ENDPOINTS;
