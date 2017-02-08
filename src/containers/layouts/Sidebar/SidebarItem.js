import React, { Component } from 'react'
import classNames from 'classnames'
import Icon from 'common/components/Icon'
import { IndexLink, Link } from 'react-router'

class SidebarItem extends Component {
  render() {
    const { type, label, active, href } = this.props
    return (
      <Link to={href} className="core-sidebar__link">
        <div className={classNames('core-sidebar__item', { 'core-sidebar__item--active': active })}>
          <Icon type={type} />
          {label}
        </div>
      </Link>
    )
  }
}

export default SidebarItem
