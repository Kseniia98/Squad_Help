import httpClient from '../interceptor';

// /auth
export const registerRequest = (data) => httpClient.post('auth/registration', data);
export const loginRequest = (data) => httpClient.post('auth/login', data);
export const refreshRequest = (data) => httpClient.put('auth/refresh', data);

// /user
export const getUser = () => httpClient.post('user/getUser');
export const payMent = (data) => httpClient.post('user/pay', data.formData);
export const changeMark = (data) => httpClient.post('user/changeMark', data);
export const cashOut = (data) => httpClient.post('user/cashout', data);
export const updateUser = (data) => httpClient.patch('user/updateUser', data);

// /chat
export const getPreviewChat = () => httpClient.get('chat/getPreview');
export const getDialog = (data) => httpClient.get('chat/getChat', data);
export const newMessage = (data) => httpClient.post('chat/newMessage', data);
export const changeChatFavorite = (data) => httpClient.post('chat/favorite', data);
export const changeChatBlock = (data) => httpClient.post('chat/blackList', data);
export const getCatalogList = (data) => httpClient.get('chat/getCatalogs', data);
export const addChatToCatalog = (data) => httpClient.post('chat/addNewChatToCatalog', data);
export const createCatalog = (data) => httpClient.post('chat/createCatalog', data);
export const deleteCatalog = (data) => httpClient.delete('chat/deleteCatalog', data);
export const removeChatFromCatalog = (data) => httpClient.delete('chat/removeChatFromCatalog', data);
export const changeCatalogName = (data) => httpClient.patch('chat/updateNameCatalog', data);

// /contest
export const dataForContest = (data) => httpClient.post('contest/dataForContest', data);
export const updateContest = (data) => httpClient.post('contest/updateContest', data);
export const setNewOffer = (data) => httpClient.post('contest/setNewOffer', data);
export const setOfferStatus = (data) => httpClient.post('contest/setOfferStatus', data);
export const downloadContestFile = (data) => httpClient.post(`contest/downloadFile/${data.fileName}`);
export const getCustomersContests = (data) => httpClient.post('contest/getCustomersContests', { limit: data.limit, offset: data.offset }, {
  headers: {
    status: data.contestStatus,
  },
});
export const getActiveContests = ({
  offset, limit, typeIndex, contestId, industry, awardSort, ownEntries,
}) => httpClient.post('contest/getAllContests', {
  offset, limit, typeIndex, contestId, industry, awardSort, ownEntries,
});
export const getContestById = (data) => httpClient.get('contest/getContestById', {
  headers: {
    contestId: data.contestId,
  },
});
