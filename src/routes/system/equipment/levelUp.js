import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Modal } from 'antd'
import styles from './levelUp.less'

import { FilterTable } from 'components'

function LevelUp ({ modalParams, tableParams }) {
  
  return (
    <Modal {...modalParams}>
      <FilterTable {...tableParams}></FilterTable>
    </Modal>
  )
}

LevelUp.propTypes = {
  tableParams: PropTypes.object,
  modalParams: PropTypes.object,
}

export default LevelUp
