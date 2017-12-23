const { config } = require('./common')

const { apiPrefix } = config
let database = [
  {
    id: '1',
    icon: 'home',
    name: '首页',
    route: '/dashboard'
  },
  {
    id: '2',
    bpid: '1',
    name: '系统设置',
    icon: 'setting'
  },
  {
    id: '21',
    bpid: '2',
    mpid: '2',
    name: '设备管理（升级/调试）',
    route: '/setting/equipment'
  }
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
