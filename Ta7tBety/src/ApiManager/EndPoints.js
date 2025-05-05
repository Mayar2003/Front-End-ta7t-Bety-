const EndPoints = {
  // Authentication
  SIGNUP: "/auth/signup",
  VERIFY_EMAIL: "/auth/verify-email",
  RESEND_VERIFICATION_CODE: "/auth/resend-verification-code",
  LOGIN: "/auth/login",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: (token) => `/auth/reset-password/${token}`,
  UPDATE_PASSWORD: "/auth/update-password",
  SEND_CHANGE_EMAIL_CODE: "/auth/send-change-email-code",
  CHANGE_EMAIL: "/auth/change-email",

  // Users
  GET_ALL_USERS: "/users",
  GET_USER_BY_ID: (id) => `/users/${id}`,
  CREATE_USER: "/users",
  UPDATE_USER: (id) => `/users/${id}`,
  DELETE_USER: (id) => `/users/${id}`,
  GET_ME: "/users/me",
  UPDATE_ME: "/users/update-me",
  DELETE_ME: "/users/delete-me",

  // Providers
  GET_ALL_PROVIDERS: "/providers",
  GET_PROVIDER_BY_ID: (id) => `/providers/${id}`,
  GET_NEARBY_PROVIDERS: (lng, lat, distance, providerType, providerGenre) =>
    `/providers/${lng}/${lat}/${distance}/${providerType}/${providerGenre}`,
  CREATE_PROVIDER: "/providers",
  UPDATE_PROVIDER: (id) => `/providers/${id}`,
  DELETE_PROVIDER: (id) => `/providers/${id}`,
  SET_SUBSCRIPTION_PERCENTAGE: (id) =>
    `/providers/${id}/subscriptionPercentage`, // Admin only
  SET_SUBSCRIPTION_MONTHLY: (id) => `/providers/${id}/subscriptionMonthly`, // Admin only
  UPLOAD_PROVIDER_ID: (id) => `/providers/${id}/uploadID`, // Provider only
  UPLOAD_CRIMINAL_RECORD: (id) => `/providers/${id}/uploadCriminalRecord`, // Provider only
  ADD_REPORTS: (id) => `/providers/${id}/addReports`, // Moderator only

  // Posts
  GET_ALL_POSTS: "/posts",
  GET_PROVIDER_POSTS: (id) => `/posts/provider-posts/${id}`,
  GET_POST_BY_ID: (id) => `/posts/${id}`,
  GET_MY_POSTS: "/posts/my-posts",
  CREATE_POST: "/posts",
  UPDATE_POST: (id) => `/posts/${id}`,
  DELETE_POST: (id) => `/posts/${id}`,

  // Orders
  GET_USER_ORDERS: (userId) => `/orders/user-orders/${userId}`,
  GET_ORDER_BY_ID: (id) => `/orders/${id}`,
  GET_MY_ORDERS: "/orders/my-orders",
  CREATE_ORDER: "/orders/create-order",
  UPDATE_ORDER: (id) => `/orders/${id}`,
  DELETE_ORDER: (id) => `/orders/${id}`,
  APPROVE_ORDER: (id) => `/orders/approve-order/${id}`, // Provider
  REJECT_ORDER: (id) => `/orders/reject-order/${id}`, // Provider
  COMPLETE_ORDER: (id) => `/orders/complete-order/${id}`, // Provider
  CANCEL_ORDER: (id) => `/orders/cancel-order/${id}`, // User

  // Reviews
  GET_ALL_REVIEWS: "/reviews",
  GET_REVIEW_BY_ID: (id) => `/reviews/${id}`,
  GET_PROVIDER_REVIEWS: (providerID) =>
    `/reviews/providerReviews/${providerID}`,
  CREATE_REVIEW: "/reviews",
  UPDATE_REVIEW: (id) => `/reviews/${id}`,
  DELETE_REVIEW: (id) => `/reviews/${id}`,

  // Problems
  GET_ALL_PROBLEMS: "/problems",
  GET_PROBLEM_BY_ID: (id) => `/problems/${id}`,
  CREATE_PROBLEM: "/problems",
  UPDATE_PROBLEM: (id) => `/problems/${id}`,
  DELETE_PROBLEM: (id) => `/problems/${id}`,

  // Moderators
  GET_ALL_MODERATORS: "/moderators",
  GET_MODERATOR_BY_ID: (id) => `/moderators/${id}`,
  CREATE_MODERATOR: "/moderators",
  UPDATE_MODERATOR: (id) => `/moderators/${id}`,
  DELETE_MODERATOR: (id) => `/moderators/${id}`,
  UPLOAD_MODERATOR_ID: (id) => `/moderators/${id}/uploadID`,
  UPLOAD_MODERATOR_CV: (id) => `/moderators/${id}/uploadCV`,

  // Dashboards
  GET_DASHBOARD: "/dashboards",
  CREATE_DASHBOARD: "/dashboards",
  DELETE_DASHBOARD: "/dashboards",

  // Messages
  CREATE_MESSAGE: "/messages",
  GET_ALL_MESSAGES: (userID, providerID) =>
    `/messages/loadAllMessages/${userID}/${providerID}`,
  UPDATE_MESSAGE: (receiverID) => `/messages/updateMessage/${receiverID}`,
  DELETE_MESSAGE: (receiverID) => `/messages/deleteMessage/${receiverID}`,
};

export default EndPoints;
