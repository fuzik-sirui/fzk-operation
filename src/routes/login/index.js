import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Cascader, Form, Row, Col, Input, Select, Radio, DatePicker, Button, Modal } from 'antd'
import { config } from 'utils'
import styles from './index.less'
// import LogoGather from './logoGather'
import logo from '../../assets/logo.svg'

const FormItem = Form.Item

const Login = ({
  loading,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }

  return (
    <div className={styles.loginWrap}>
      {/* <LogoGather
        image={'/logo.png'}
        pixSize={10}
        pointSizeMin={10}
      /> */}
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt={'logo'} src={logo} />
          <span>{config.name}</span>
        </div>
        <form>
          <FormItem hasFeedback>
            {getFieldDecorator('Name', {
              rules: [
                {
                  required: true,
                  message: "用户名必填"
                },
              ],
            })(<Input size="large" name="name" onPressEnter={handleOk} placeholder="用户名" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: "密码必填"
                },
              ],
            })(<Input size="large" name="password" type="password" onPressEnter={handleOk} placeholder="密码" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('authcode', {
              rules: [
                {
                  required: true,
                  message: "验证码必填"
                },
              ],
            })(<Input size="large" name="authcode" onPressEnter={handleOk} placeholder="验证码" />)}
            <img className={styles.authcode} src="/newApi/login/getAuthcodeImg" />
          </FormItem>
          <Row>
            <Button size="large" type="primary" onClick={handleOk} loading={loading.effects.login}>
              登录
            </Button>
          </Row>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ loading }) => ({ loading }))(Form.create()(Login))
