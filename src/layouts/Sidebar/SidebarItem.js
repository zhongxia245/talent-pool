import React, { Component } from 'react'
import classNames from 'classnames'
import Icon from 'common/components/Icon'

class SidebarItem extends Component {
  render () {
    const { type, label, active } = this.props
    return (
      <div className={classNames('core-sidebar__item', { 'core-sidebar__item--active': active })}>
        <Icon type={type} />
        {label}
      </div>
    )
  }
}

export default SidebarItem
