import isoFetch from 'isomorphic-fetch';
import { itemsLoadingAC, itemsErrorAC, itemsSetAC } from '../AC/itemsAC';
function itemsThunkAC(dispatch, category) {
  return function () {
    dispatch(itemsLoadingAC());
    isoFetch(
      `https://ishop-57739.firebaseio.com/items.json?${
        category !== null ? `orderBy="category"&equalTo=` + category : 'orderBy="id"'
      }&limitToFirst=9`,
    )
      .then((response) => {
        if (!response.ok) {
          let Err = new Error('fetch error ' + response.status);
          Err.userMessage = 'Ошибка связи';
          throw Err;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        dispatch(itemsSetAC(data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(itemsErrorAC());
      });
  };
}

export { itemsThunkAC };
