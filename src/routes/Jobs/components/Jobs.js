import React, { Component } from 'react'
import Icon from 'common/components/Icon'
import InfoShow from 'common/components/InfoShow'
import GDMap from 'common/map/GDMap.js'
import './Jobs.less'

class HomeView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showInfo: false,
      data: {
        name: '百度',
        desc: '招聘人辣，赶紧过来辣',
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
