import { routerRedux } from 'dva/router'
import { login } from 'services/login'
import { setCookie } from 'utils/index'
import { Message } from 'antd'
export default {
  namespace: 'login',

  state: {},

  effects: {
    * login ({
      payload,
    }, { put, call, select }) {
      const data = yield call(login, payload)
      console.log(data)
      const { locationQuery } = yield select(_ => _.app)
      if (!data.result.resultCode) {
        setCookie('houyu_username', payload.Name)
        const { from } = locationQuery
        yield put({ type: 'app/query' })
        if (from && from !== '/login') {
          yield put(routerRedux.push(from))
        } else {
          yield put(routerRedux.push('/dashboard'))
        }
      } else {
        Message.error(data.result.resultMessage)
        throw data.result.resultMessage
      }
    },
  },

}
