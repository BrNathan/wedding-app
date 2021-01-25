import apiService from '@/services/api.service';
import API_ENDPOINTS from '@/utils/constants/api-endpoints';
import passwordHasherService from './password-hasher.service';

declare interface UpdateUserProfile {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

class UserService {
  /**
   * updateUserProfile
   */
  public async updateUserProfile(userId: string, email: string, firstName: string, lastName: string, newPassword: string) {
    const url: string = API_ENDPOINTS.updateUserProfile.replace('{{userId}}', userId.toString());

    const hashedPassword = passwordHasherService.hash(newPassword);
    const countTrueUpdated = await apiService.doPutRequest<UpdateUserProfile, {count: number}>(url, { email: email, password: hashedPassword, firstName: firstName, lastName: lastName });

    return countTrueUpdated;
  }

  public async checkAvailabilityEmail(emailToCheck: string): Promise<{isEmailAvailable: boolean; isEmailWellFormed: boolean}> {
    const url: string = API_ENDPOINTS.checkAvailabilityEmail;

    const isAvailable = { isEmailAvailable: false, isEmailWellFormed: false };
    try {
      const result = await apiService.doPostRequest<{email: string}, {available: boolean}>(url, { email: emailToCheck });
      isAvailable.isEmailAvailable = result.available;
      isAvailable.isEmailWellFormed = true;
    } catch (error) {
      isAvailable.isEmailAvailable = false;
      isAvailable.isEmailWellFormed = false;
    }

    return isAvailable;
  }

  // /**
  //  * getUserInvitations
  //  */
  // public async getUserInvitations(userId: string): Promise<UserInvitation[]> {
  //   const url: string = API_ENDPOINTS.getUserInvitationsByUserId.replace('{{userId}}', userId);
  //   const invitations = await apiService.doGetRequest<UserInvitation[]>(url);
  //   return invitations;
  // }

  // /**
  //  * getUserGuests
  //  */
  // public async getUserGuests(userId: string): Promise<UserGuest[]> {
  //   const url: string = API_ENDPOINTS.getUserGuestsByUserId.replace('{{userId}}', userId);
  //   const guests = await apiService.doGetRequest<UserGuest[]>(url);
  //   return guests;
  // }

  // /**
  //  * getUserInfo
  //  */
  // public async getUserInfo(userId: string): Promise<UserInfo> {
  //   const url: string = API_ENDPOINTS.getUserInfoByUserId.replace('{{userId}}', userId);
  //   const userInfo = await apiService.doGetRequest<UserInfo>(url);
  //   return userInfo;
  // }

  // /**
  //  * updateUserInvitationResponse
  //  */
  // public async updateUserInvitationResponse(userId: string, userInvitations: UserInvitation[]): Promise<boolean> {
  //   if (userInvitations.some(i => i.userId.toString() !== userId)) {
  //     throw new Error('At least one invitations have the wrong userId');
  //   }
  //   const url: string = API_ENDPOINTS.updateUserInvitationResponse.replace('{{userId}}', userId);

  //   const idAnswerTrueList: number[] = userInvitations?.filter(i => i.answer === true)?.map(i => i.id) ?? [];
  //   const idAnswerFalseList: number[] = userInvitations?.filter(i => i.answer === false || i.answer === null)?.map(i => i.id) ?? [];

  //   const result: boolean[] = [];
  //   if ((idAnswerTrueList?.length ?? 0) > 0) {
  //     const orLogicAnswerTrue = {
  //       or: [...idAnswerTrueList.map(i => { return { id: i }; })]
  //     };

  //     const trueUrl = url + '?where=' + encodeURIComponent(JSON.stringify(orLogicAnswerTrue));
  //     const countTrueUpdated = await apiService.doPatchRequest<{answer: boolean}, {count: number}>(trueUrl, { answer: true });

  //     result.push((idAnswerTrueList?.length ?? 0) === countTrueUpdated.count);
  //   }
  //   if ((idAnswerFalseList?.length ?? 0) > 0) {
  //     const orLogicAnswerFalse = {
  //       or: [...idAnswerFalseList.map(i => { return { id: i }; })]
  //     };

  //     const falseUrl = url + '?where=' + encodeURIComponent(JSON.stringify(orLogicAnswerFalse));
  //     const countFalseUpdated = await apiService.doPatchRequest<{answer: boolean}, {count: number}>(falseUrl, { answer: false });

  //     result.push((idAnswerFalseList?.length ?? 0) === countFalseUpdated.count);
  //   }
  //   return !result.some(r => !r);
  // }

  // /**
  //  * updateUserGuest
  //  */
  // public async updateUserGuest(userId: string, userGuests: UserGuest[]): Promise<boolean> {
  //   if (userGuests.some(g => g.userId.toString() !== userId.toString())) {
  //     throw new Error('At least one guest have the wrong userId');
  //   }
  //   if (!validatorService.validateGuestList(userGuests)) {
  //     throw new Error('At least one guest is not valid');
  //   }
  //   const url: string = API_ENDPOINTS.refreshUserGuestByUserId.replace('{{userId}}', userId.toString());

  //   const result = await apiService.doPostRequest<UserGuest[], {result: boolean}>(url, userGuests);

  //   return result.result;
  // }
}

export default new UserService();
