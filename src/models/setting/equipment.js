
let data = {
  namespace: 'equipment',
  state: {
    FilterTableParams: {
      filterList: [
        { key: 'leixing', type: 'select', options: [{ key: 3, label: 'OTU' }, { key: 1, label: 'TCUA/B'}, { key: 2, label: 'TCUC' }], label: '类型', placeholder: '请选择类型' },
        { key: 'onOffline', type: 'select', options: [{ key: 1, label: '在线' }], label: '状态', placeholder: '过滤离线' },
        { key: 'terminalID', type: 'input', label: '设备ID', placeholder: '设备ID' },
      ],
      filterGrade: [
        { key: 'IMEI', type: 'input', label: 'IMEI', placeholder: 'imei或后六位逗号隔开' },
        { key: 'softwarename', type: 'input', label: '软件名称', placeholder: '软件名称' },
        { key: 'softwareversion', type: 'input', label: '软件版本', placeholder: '软件版本' },
        { key: 'hardwareversion', type: 'input', label: '硬件版本', placeholder: '硬件版本' },
      ],
      filterForm: { onOffline: '', terminalID: '', IMEI: '', softwarename: '', softwareversion: '', hardwareversion: '', leixing: 3 },
      addBtn: false,
      fetch: { url: '/newApi/client/getList', data: () => this.filterForm, dataKey: 'rows' },
      tableList: [
        { title: '接入端类型', dataIndex: 'CLIENTTYPE',  key: 'CLIENTTYPE',
          render (text, record) {
            switch(text) {
              case 1: 
              return 'TCUA/B';
              break;
              case 2: 
              return 'TCUC'
              break;
              case 3: 
              return 'OTU';
              break;
            }
          }
        },
        { title: 'entityID', dataIndex: 'ENTITYID', key: 'ENTITYID' },
        { title: 'IMEI', dataIndex: 'IMEI', key: 'IMEI' },
        { title: 'barCode', dataIndex: 'BARCODE', key: 'BARCODE' },
        { title: '软件名称', dataIndex: 'SOFTWARENAME', key: 'SOFTWARENAME' },
        { title: '硬件版本号', dataIndex: 'HARDWAREVERSION', key: 'HARDWAREVERSION' },
        { title: '运行bank', dataIndex: 'BANK', key: 'BANK' },
        { title: '接入时间', dataIndex: 'LOGINTIME', key: 'LOGINTIME' },
        { title: '离线', dataIndex: 'LASTMESSAGETIME', key: 'LASTMESSAGETIME',
          render (text, record) {
            return text.replace(/<[^>]+>/g, '')
          }
        },
        { title: '升级开始时间', dataIndex: 'STARTTIME', key: 'STARTTIME' },
        { title: '升级信息', dataIndex: 'b', key: 'b' },
      ],
      otherList: [],
      opreat: [{ key: 1, name: '升级' }, { key: 2, name: '压测' }, { key: 3, name: '调试' }, { key: 4, name: '图表' }],
      rowKey: 'ENTITYID',
      localName: 'equipment',
      scroll: 1200
    },
    modalVisible: false,
    modalTitle: '新增优惠券',
    modalLevel: false,
    levelParams: {},
    levelTableParams: {
      filterList: [
        { key: 'prodName', type: 'input', placeholder: '产品名称' },
        { key: 'envTypeQuery', type: 'select', options: [{ key: 1, label: '商用' }, { key: 2, label: '在研' }, { key: 3, label: '未知' }], placeholder: '环境类型' },
      ],
      filterGrade: [],
      filterForm: { prodName: '', envTypeQuery: '', terminalID: '' },
      addBtn: false,
      fetch: { url: '/newApi/update/getListByClientType', data: () => this.filterForm, dataKey: 'rows' },
      tableList: [
        { title: '接入端类型', dataIndex: 'ENVTYPE',  key: 'ENVTYPE',
          render (text, record) {
            let msg = null
            if (text == 1) {
							msg = "TCUA/B"
						} else if (text == 2) {
							msg = "TCUC"
						} else if (text == 3) {
							msg = "OTU"
						} else if (text == 11) {
							msg = "OST"
						} else if (text == 14) {
							msg = "PPKE"
            }
            return msg
          }
        },
        {
          title: '版本', dataIndex: 'VERSION',  key: 'VERSION',
        },
        {
          title: '产品名称', dataIndex: 'PRODNAME',  key: 'PRODNAME',
        },
        {
          title: '硬件版本', dataIndex: 'HARDVERSION',  key: 'HARDVERSION',
        },
        {
          title: '分区格式', dataIndex: 'PARTITIONFORMAT',  key: 'PARTITIONFORMAT',
        },
        {
          title: '软件名称', dataIndex: 'SOFTNAME',  key: 'SOFTNAME',
        },
        {
          title: '编译类型', dataIndex: 'COMPILETYPE',  key: 'COMPILETYPE',
        },
        {
          title: '软件版本', dataIndex: 'SOFTVERSION',  key: 'SOFTVERSION',
        },
        {
          title: '环境类型', dataIndex: 'ENVTYPE',  key: 'ENVTYPE',
          render (text, record) {
            var msg = ""
						if (text == 1) {
							msg = "商用"
						} else if (text == 2) {
							msg = "在研"
						} else {
							msg = "未知"
						}
						return msg
          }
        },
        {
          title: '备注', dataIndex: 'MEMO',  key: 'MEMO',
        },
      ],
      otherList: [],
      opreat: [{ key: '1', name: '升级到该版本' }],
      rowKey: 'ENTITYID',
      localName: 'equipmentLevel',
      scroll: 1200
    }
  },
  effects: {},
  subscriptions: {},
  reducers: {
    showModal (state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },

    hideModal (state) {
      return { ...state, modalVisible: false }
    },

    showLevel (state, { payload }) {
      return { ...state, modalLevel: true, levelParams: payload }
    },
  }
}
let self = data
export default data