import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* add (action) {
    console.log(`ready to add this item: ${action.payload}`)
    let response = yield axios.post(`/api/list`, action.payload)
    console.log('in add Saga', response.data)
    yield put({type: 'GETTING_ITEM'})
}

function* addSaga(){
yield takeLatest('ADD_ITEM', add);
}

export default addSaga