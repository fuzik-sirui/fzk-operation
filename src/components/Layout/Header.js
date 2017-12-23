import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Popover } from 'antd'
import classnames from 'classnames'
import styles from './Header.less'
import Menus from './Menu'
import { config } from 'utils'

const SubMenu = Menu.SubMenu
import Bread from './Bread'

const Header = ({ user, logout, switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover, navOpenKeys, changeOpenKeys, menu, switchUserPopver, userPopoverVisible, isHideUser }) => {
  let handleClickMenu = e => e.key === 'logout' && logout()
  const menusProps = {
    menu,
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenKeys,
  }
  const breadProps = {
    menu,
    location,
  }
  return (
    <div className={styles.header}>
      
      {isNavbar
        ? <Popover placement="bottomLeft" onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName={styles.popovermenu} trigger="click" content={<Menus {...menusProps} />}>
          <div className={styles.button}>
            <Icon type="bars" />
          </div>
        </Popover>
        : <div
          className={styles.button}
          onClick={switchSider}
        >
          <Icon type={classnames({ 'menu-unfold': siderFold, 'menu-fold': !siderFold })} />
        </div>}
      {isNavbar ? null : <Bread {...breadProps}></Bread> } 
      <div className={styles.rightWarpper}>
      {isHideUser 
        ? <Popover placement="bottomRight" onVisibleChange={switchUserPopver} visible={userPopoverVisible} overlayClassName={styles.popovermenu} trigger="click"
        content={
          <Menu mode="horizontal" onClick={handleClickMenu}>
            <Menu.Item key="time">
              <Icon type="clock-circle" />时间转换工具
            </Menu.Item>
            <Menu.Item key="map">
              <Icon type="environment" />坐标转换地图
            </Menu.Item>
            <Menu.Item key="password">
              <i className="iconfont headIcon">&#xe600;</i>加密/解密
            </Menu.Item>
            <Menu.Item key="mail">
              <i className="iconfont headIcon">&#xe667;</i>蓝牙
            </Menu.Item>
            <SubMenu
              style={{
                float: 'right',
              }}
              title={<span>
                <Icon type="user" />
                {user.username}
              </span>}
            >
              <Menu.Item key="logout">
                Sign out
              </Menu.Item>
            </SubMenu>
          </Menu>
        }> 
          <div className={styles.button}>
            <Icon type="user" />
          </div>
        </Popover> : 
        <Menu mode="horizontal" onClick={handleClickMenu}>
          <Menu.Item key="time">
            <Icon type="clock-circle" />时间转换工具
          </Menu.Item>
          <Menu.Item key="map">
            <Icon type="environment" />坐标转换地图
          </Menu.Item>
          <Menu.Item key="password">
            <i className="iconfont headIcon">&#xe600;</i>加密/解密
          </Menu.Item>
          <Menu.Item key="mail">
            <i className="iconfont headIcon">&#xe667;</i>蓝牙
          </Menu.Item>
          <SubMenu
            style={{
              float: 'right',
            }}
            title={<span>
              <Icon type="user" />
              {user.username}
            </span>}
          >
            <Menu.Item key="logout">
              退出登录
            </Menu.Item>
          </SubMenu>
        </Menu>
      }
        
      </div>
    </div>
  )
}

Header.propTypes = {
  menu: PropTypes.array,
  user: PropTypes.object,
  logout: PropTypes.func,
  switchSider: PropTypes.func,
  siderFold: PropTypes.bool,
  isNavbar: PropTypes.bool,
  isHideUser: PropTypes.bool,
  menuPopoverVisible: PropTypes.bool,
  location: PropTypes.object,
  switchMenuPopover: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
}

export default Header
