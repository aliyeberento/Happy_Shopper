import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';

function* deleteSaga() {
    yield takeEvery('DELETE_ITEM', deleteItem);
}

function* deleteItem(action) {
        try {
            console.log(action.payload)
            let id = action.payload.id
            let response = yield axios.delete(`/api/list/${id}`);
            // yield put({ type: 'SHOW_ITEMS' })
            console.log(response.data);
            yield put({type:'GETTING_ITEM'})
        }
        catch (error) {
            console.log('Error getting items', error)
        }
}

export default deleteSaga