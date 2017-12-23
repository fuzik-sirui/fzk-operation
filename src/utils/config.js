const APIV1 = '/api/v1'
const APIV2 = '/api/v2'
const API = '/newApi'
module.exports = {
  name: '思锐运维管理系统',
  prefix: '思锐运维管理系统',
  footerText: '思锐运维管理系统  © 2017 桴之科',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${API}/login`,
    userLogout: `${API}/login/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${API}/client/getList`,
    dashboard: `${APIV1}/dashboard`,
    chart: `${APIV1}/fake_chart_data`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
  },
}
