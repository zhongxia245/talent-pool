import React, { Component } from 'react'
import classNames from 'classnames'
import autoBind from 'react-autobind'
import Header from '../../components/Header'
import './CoreLayout.less'
import '../../styles/core.less'

class CoreLayout extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
    this.state = {
      open: false
    }
  }

  handleOpen(flag) {
    console.log(flag)
    this.setState({
      open: flag
    })
  }

  render() {
    const {children} = this.props
    return (
      <div className='core-layout__container'>
        <div className={classNames('core-layout__sidebar', { 'core-layout__sidebar--active': this.state.open })}>
          demo
      </div>
        <div className='core-layout__viewport'>
          <Header handleOpen={this.handleOpen} />
          {children}
        </div>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
