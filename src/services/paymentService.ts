// // src/services/paymentService.ts
// import { apiClient } from '../App';

// export const paymentService = {
//   // Initiate M-Pesa STK push
//   initiateMpesaPayment: async (phoneNumber, amount, type) => {
//     const response = await apiClient.post('/payments/initiate', {
//       phone_number: phoneNumber,
//       amount,
//       payment_type: type,
//     });
//     return response.data;
//   },

//   // Check payment status
//   checkPaymentStatus: async (reference) => {
//     const response = await apiClient.get(`/payments/status/${reference}`);
//     return response.data;
//   },

//   // Get payment history
//   getPaymentHistory: async (filters = {}) => {
//     const response = await apiClient.get('/payments/history', { params: filters });
//     return response.data;
//   },

//   // Webhook callback handler (Laravel backend)
//   handleMpesaCallback: async (callbackData) => {
//     return apiClient.post('/payments/callback', callbackData);
//   },
// };