import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* search (action) {
    // console.log('in search Saga', action.payload)
    let response = yield axios.get(`/api/home?searchterm=${action.payload}`) 
    // console.log('response:',response.data)
    yield put({ type: 'SHOW_ITEMS', payload: response.data})
}

function* searchSaga() {
    yield takeLatest('FETCH_ITEMS', search);
  }
  

export default searchSaga