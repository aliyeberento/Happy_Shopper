import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';

function* deleteSaga() {
    yield takeEvery('DELETE_ITEM', deleteItem);
}

function* deleteItem(action) {
        try {
            console.log(action.payload)
            let id = action.payload.id
            console.log('user id:', action.payload )
            let response = yield axios.delete(`/api/list/${id}`);
            yield put({ type: 'FETCH_ITEMS' })
            console.log(response.data);
        }
        catch (error) {
            console.log('Error getting items', error)
        }
}

export default deleteSaga