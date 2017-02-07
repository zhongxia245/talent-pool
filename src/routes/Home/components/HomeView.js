import React, { Component } from 'react'
import Icon from 'common/components/Icon'
import InfoShow from 'common/components/InfoShow'
import GDMap from 'common/map/GDMap.js'
import './HomeView.less'

class HomeView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showInfo: false,
      data: {
        name: '张天爱',
        desc: '如果你无法简洁的表单你的想法，那只能说明你还不够了解它',
        path: 'http://tva4.sinaimg.cn/crop.0.0.200.200.50/006lypzijw8f6d2oefojqj305k05kaa0.jpg',
        url: '',
        id: '1'
      }
    }
  }
  componentDidMount() {
    let gdMap = new GDMap('allmap')
    gdMap.addOverlay((flag) => {
      this.setState({ showInfo: flag })
    })
  }

  renderInfoArea() {
    return (
      <InfoShow data={this.state.data} />
    )
  }

  render() {
    return (
      <div className="home">
        <div id='allmap' className='allmap' />
        {this.state.showInfo ? this.renderInfoArea() : ''}
      </div>
    )
  }
}

export default HomeView
