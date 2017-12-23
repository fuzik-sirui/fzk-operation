import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'

import { FilterTable, FormModal } from 'components'

import levelUp from './levelUp'

function Equipment ({ equipment, loading, dispatch }) {
  let { FilterTableParams, modalVisible, modalLevel, levelTableParams  } = equipment
  const menuHandle = function (e, record) {
    console.log(record)
  	switch(e.key) {
      case 1: 
        dispatch({ 
          type: 'equipment/showLevel',
          payload: {
            entityID: record.ENTITYID,
            prodName: record.CLIENTTYPE,
            username: record.USERNAME,
            current: record.CURRENT,
          }
        })
      break;
      case 2:
      break;
      case 3:
      break;
      case 4: 
      break;
    }
  }
  const onAdd = function () {
    dispatch({
      type: 'equipment/showModal',
      payload: {
        modalTitle: '新增优惠券',
      },
    })
  }
  FilterTableParams.menuClick = menuHandle
  FilterTableParams.onAdd = onAdd
  let AddParams = {
    title: '新增',
    width: 600,
    visible: modalVisible,
    formList: [
      { key: 'name', placeholder: '名称', type: 'input',
        rules: [{
          required: true, message: '请输入名称',
        }]
      },
      { key: 'price', placeholder: '价格', type: 'input',
        rules: [{
          required: true, message: '请输入价格',
        }]
      },
      { key: 'type', placeholder: '类型', type: 'select', options: [{ key: '1', label: '满减' }, { key: '2', label: '打折'}],
        rules: [{
          required: true, message: '请选择类型',
        }]
      },
      { key: 'time', placeholder: '时间范围', placeArr: ['开始时间', '结束时间'], type: 'dateTime',
        rules: [{
          required: true, message: '请选择时间',
        }]
      },
      { key: 'number', placeholder: '发行数量', type: 'input',
        rules: [{
          required: true, message: '请输入发行数量',
        }]
      },
      { key: 'public_type', placeholder: '推广方式', type: 'select', options: [{ key: '1', label: '领取' }, { key: '2', label: '发放' }],
        rules: [{
          required: true, message: '请选择推广方式',
        }]
      }
    ],
    line: 2,
    onOk () {
      dispatch({
        type: 'equipment/hideModal',
      })
    },
    onCancel () {
      dispatch({
        type: 'equipment/hideModal',
      })
    },
  }
  let levelUpParams = {
    modalParams: {
      title: '版本升级列表',
      visible: modalLevel,
      footer: null
    },
    tableParams: levelTableParams
  }
  return (
    <div className={styles.pageContainer}>
      <FilterTable {...FilterTableParams}   />
      { modalVisible && <FormModal {...AddParams} /> }
      { modalLevel && <levelUp {...levelUpParams} /> }
    </div>
  )
}

Equipment.propTypes = {
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ equipment, loading }) => ({ equipment, loading }))(Equipment)
