import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';

function* updateQuantitySaga() {
    yield takeEvery('UPDATE_QUANTITY', updateQuantity);
    yield takeEvery('GETTING_ITEM', getItems)
}

function* getItems() {
    try {
        let response = yield axios.get(`/api/list`)
        console.log(response.data)
        yield put({type:'SET_ITEM', payload: response.data})
    }
    catch (error) {
        console.log('error in getItems function', error )
    }
}

function* updateQuantity(action) {
    try {
        console.log('PUT ROUTE ACTION PAYLOAD', action.payload)
        let id = action.payload.id
        let quanitity = action.payload.quantity
        let response = yield axios.put(`/api/list/${id}`);
        yield put({type:'GETTING_ITEM'})
    }
    catch (error) {
        console.log('Error updating quanitity', error)
    }
}

export default updateQuantitySaga;