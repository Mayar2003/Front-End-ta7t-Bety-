import ApiMethods from "./ApiMethods";
import EndPoints from "./EndPoints";

class ApiManager {
  // Authentication
  static signup(data) {
    const url = EndPoints.SIGNUP;
    return ApiMethods.post(url, data);
  }

  static verifyEmail(data) {
    const url = EndPoints.VERIFY_EMAIL;
    return ApiMethods.post(url, data);
  }

  static resendVerificationCode(data) {
    const url = EndPoints.RESEND_VERIFICATION_CODE;
    return ApiMethods.post(url, data);
  }

  static login(data) {
    const url = EndPoints.LOGIN;
    return ApiMethods.post(url, data);
  }

  static forgotPassword(data) {
    const url = EndPoints.FORGOT_PASSWORD;
    return ApiMethods.post(url, data);
  }

  static resetPassword(token, data) {
    const url = `${EndPoints.RESET_PASSWORD}/${token}`;
    return ApiMethods.put(url, data);
  }

  static sendChangeEmailCode(data) {
    const url = EndPoints.SEND_CHANGE_EMAIL_CODE;
    return ApiMethods.post(url, data);
  }

  static changeEmail(data) {
    const url = EndPoints.CHANGE_EMAIL;
    return ApiMethods.put(url, data);
  }

  static updatePassword(data) {
    const url = EndPoints.UPDATE_PASSWORD;
    return ApiMethods.put(url, data);
  }

  // Users
  static getMe() {
    const url = EndPoints.GET_ME;
    return ApiMethods.get(url);
  }

  static updateMe(data) {
    const url = EndPoints.UPDATE_ME;
    return ApiMethods.put(url, data);
  }

  static deleteMe() {
    const url = EndPoints.DELETE_ME;
    return ApiMethods.delete(url);
  }

  static getAllUsers(queryParams) {
    const url = `${EndPoints.GET_ALL_USERS}?${queryParams}`;
    return ApiMethods.get(url);
  }

  static getUser(userId) {
    const url = `${EndPoints.GET_USER_BY_ID(userId)}`;
    return ApiMethods.get(url);
  }

  static createUser(data) {
    const url = EndPoints.CREATE_USER;
    return ApiMethods.post(url, data);
  }

  static deleteUser(userId) {
    const url = `${EndPoints.DELETE_USER(userId)}`;
    return ApiMethods.delete(url);
  }

  static updateUser(userId, data) {
    const url = `${EndPoints.UPDATE_USER(userId)}`;
    return ApiMethods.put(url, data);
  }

  // Orders
  static getAllOrders() {
    const url = EndPoints.GET_ALL_ORDERS;
    return ApiMethods.get(url);
  }

  static getMyOrders() {
    const url = EndPoints.GET_MY_ORDERS;
    return ApiMethods.get(url);
  }

  static getUserOrders(userId) {
    const url = EndPoints.GET_USER_ORDERS(userId);
    return ApiMethods.get(url);
  }

  static getOrderById(id) {
    const url = EndPoints.GET_ORDER_BY_ID(id);
    return ApiMethods.get(url);
  }

  static createOrder(data) {
    const url = EndPoints.CREATE_ORDER;
    return ApiMethods.post(url, data);
  }

  static updateOrder(id, data) {
    const url = EndPoints.UPDATE_ORDER(id);
    return ApiMethods.put(url, data);
  }

  static deleteOrder(id) {
    const url = EndPoints.DELETE_ORDER(id);
    return ApiMethods.delete(url);
  }

  static approveOrder(id) {
    const url = EndPoints.APPROVE_ORDER(id);
    return ApiMethods.put(url);
  }

  static rejectOrder(id) {
    const url = EndPoints.REJECT_ORDER(id);
    return ApiMethods.put(url);
  }

  static completeOrder(id) {
    const url = EndPoints.COMPLETE_ORDER(id);
    return ApiMethods.put(url);
  }

  static cancelOrder(id) {
    const url = EndPoints.CANCEL_ORDER(id);
    return ApiMethods.put(url);
  }

  // Providers
  static getAllProviders() {
    const url = EndPoints.GET_ALL_PROVIDERS;
    return ApiMethods.get(url);
  }

  static getProviderById(id) {
    const url = EndPoints.GET_PROVIDER_BY_ID(id);
    return ApiMethods.get(url);
  }

  static getNearbyProviders(lng, lat, distance, providerType, providerGenre) {
    const url = EndPoints.GET_NEARBY_PROVIDERS(
      lng,
      lat,
      distance,
      providerType,
      providerGenre
    );
    return ApiMethods.get(url);
  }

  static createProvider(data) {
    const url = EndPoints.CREATE_PROVIDER;
    return ApiMethods.post(url, data);
  }

  static updateProvider(id, data) {
    const url = EndPoints.UPDATE_PROVIDER(id);
    return ApiMethods.put(url, data);
  }

  static deleteProvider(id) {
    const url = EndPoints.DELETE_PROVIDER(id);
    return ApiMethods.delete(url);
  }

  static setSubscriptionPercentage(id, data) {
    const url = EndPoints.SET_SUBSCRIPTION_PERCENTAGE(id);
    return ApiMethods.put(url, data);
  }

  static setSubscriptionMonthly(id, data) {
    const url = EndPoints.SET_SUBSCRIPTION_MONTHLY(id);
    return ApiMethods.put(url, data);
  }

  static uploadProviderId(id, data) {
    const url = EndPoints.UPLOAD_PROVIDER_ID(id);
    return ApiMethods.post(url, data);
  }

  static uploadCriminalRecord(id, data) {
    const url = EndPoints.UPLOAD_CRIMINAL_RECORD(id);
    return ApiMethods.post(url, data);
  }

  static addReports(id, data) {
    const url = EndPoints.ADD_REPORTS(id);
    return ApiMethods.post(url, data);
  }

  // Posts
  static getAllPosts() {
    const url = EndPoints.GET_ALL_POSTS;
    return ApiMethods.get(url);
  }

  static getProviderPosts(id) {
    const url = EndPoints.GET_PROVIDER_POSTS(id);
    return ApiMethods.get(url);
  }

  static getPostById(id) {
    const url = EndPoints.GET_POST_BY_ID(id);
    return ApiMethods.get(url);
  }

  static getMyPosts() {
    const url = EndPoints.GET_MY_POSTS;
    return ApiMethods.get(url);
  }

  static createPost(data) {
    const url = EndPoints.CREATE_POST;
    return ApiMethods.post(url, data);
  }

  static updatePost(id, data) {
    const url = EndPoints.UPDATE_POST(id);
    return ApiMethods.put(url, data);
  }

  static deletePost(id) {
    const url = EndPoints.DELETE_POST(id);
    return ApiMethods.delete(url);
  }

  // Reviews
  static getAllReviews() {
    const url = EndPoints.GET_ALL_REVIEWS;
    return ApiMethods.get(url);
  }

  static getReviewById(id) {
    const url = EndPoints.GET_REVIEW_BY_ID(id);
    return ApiMethods.get(url);
  }

  static getProviderReviews(providerID) {
    const url = EndPoints.GET_PROVIDER_REVIEWS(providerID);
    return ApiMethods.get(url);
  }

  static getPostReviews(postID) {
    const url = EndPoints.GET_POST_REVIEWS(postID);
    return ApiMethods.get(url);
  }

  static createProviderReview(providerID, data) {
    const url = EndPoints.CREATE_PROVIDER_REVIEW(providerID);
    return ApiMethods.post(url, data);
  }

  static createPostReview(postID, data) {
    const url = EndPoints.CREATE_POST_REVIEW(postID);
    return ApiMethods.post(url, data);
  }

  static updateReview(id, data) {
    const url = EndPoints.UPDATE_REVIEW(id);
    return ApiMethods.put(url, data);
  }

  static deleteReview(id) {
    const url = EndPoints.DELETE_REVIEW(id);
    return ApiMethods.delete(url);
  }

  // Problems
  static getAllProblems() {
    const url = EndPoints.GET_ALL_PROBLEMS;
    return ApiMethods.get(url);
  }

  static getProblemById(id) {
    const url = EndPoints.GET_PROBLEM_BY_ID(id);
    return ApiMethods.get(url);
  }

  static createProblem(data) {
    const url = EndPoints.CREATE_PROBLEM;
    return ApiMethods.post(url, data);
  }

  static updateProblem(id, data) {
    const url = EndPoints.UPDATE_PROBLEM(id);
    return ApiMethods.put(url, data);
  }

  static deleteProblem(id) {
    const url = EndPoints.DELETE_PROBLEM(id);
    return ApiMethods.delete(url);
  }

  // Moderators
  static getAllModerators() {
    const url = EndPoints.GET_ALL_MODERATORS;
    return ApiMethods.get(url);
  }

  static getModeratorById(id) {
    const url = EndPoints.GET_MODERATOR_BY_ID(id);
    return ApiMethods.get(url);
  }

  static createModerator(data) {
    const url = EndPoints.CREATE_MODERATOR;
    return ApiMethods.post(url, data);
  }

  static updateModerator(id, data) {
    const url = EndPoints.UPDATE_MODERATOR(id);
    return ApiMethods.put(url, data);
  }

  static deleteModerator(id) {
    const url = EndPoints.DELETE_MODERATOR(id);
    return ApiMethods.delete(url);
  }

  static uploadModeratorId(id, data) {
    const url = EndPoints.UPLOAD_MODERATOR_ID(id);
    return ApiMethods.post(url, data);
  }

  static uploadModeratorCv(id, data) {
    const url = EndPoints.UPLOAD_MODERATOR_CV(id);
    return ApiMethods.post(url, data);
  }

  // Dashboards
  static getDashboard() {
    const url = EndPoints.GET_DASHBOARD;
    return ApiMethods.get(url);
  }

  static createDashboard(data) {
    const url = EndPoints.CREATE_DASHBOARD;
    return ApiMethods.post(url, data);
  }

  static deleteDashboard() {
    const url = EndPoints.DELETE_DASHBOARD;
    return ApiMethods.delete(url);
  }

  // Messages
  static createMessage(data) {
    const url = EndPoints.CREATE_MESSAGE;
    return ApiMethods.post(url, data);
  }

  static getAllMessages(userID, providerID) {
    const url = EndPoints.GET_ALL_MESSAGES(userID, providerID);
    return ApiMethods.get(url);
  }

  static updateMessage(receiverID, data) {
    const url = EndPoints.UPDATE_MESSAGE(receiverID);
    return ApiMethods.put(url, data);
  }

  static deleteMessage(receiverID) {
    const url = EndPoints.DELETE_MESSAGE(receiverID);
    return ApiMethods.delete(url);
  }
}

export default ApiManager;
