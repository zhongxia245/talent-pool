import './Sidebar.less'

import React, { Component } from 'react'
import classNames from 'classnames'
import autoBind from 'react-autobind'
import SidebarItem from './SidebarItem'

class Sidebar extends Component {
  render() {
    return (
      <div className='core-sidebar'>
        <div className='core-sidebar__title '>功能选择</div>
        <SidebarItem href="/" type='shopping-bag' label='求职' active />
        <SidebarItem href="/jobs" type='child' label='招聘' />
        <SidebarItem href="/life" type='life-bouy' label='生活' />
      </div>
    )
  }
}

export default Sidebar
