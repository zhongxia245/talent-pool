import './Sidebar.less'

import React, { Component } from 'react'
import classNames from 'classnames'
import autoBind from 'react-autobind'
import SidebarItem from './SidebarItem'


class Sidebar extends Component {
  render() {
    return (
      <div className="core-sidebar">
        <div className="core-sidebar__title ">功能选择</div>
        <SidebarItem type="shopping-bag" label="求职" active={true}></SidebarItem>
        <SidebarItem type="shopping-bag" label="求职"></SidebarItem>
        <SidebarItem type="shopping-bag" label="求职"></SidebarItem>
      </div>
    )
  }
}

export default Sidebar
