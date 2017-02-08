import React, { Component } from 'react'
import Icon from 'common/components/Icon'
import InfoShow from 'common/components/InfoShow'
import GDMap from 'common/map/GDMap.js'
import './Life.less'

class HomeView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showInfo: false,
      data: {
        name: '生活细节',
        desc: '生活中有很多细节，你没有注意到，现在赶紧来找回你的细节生活哈。',
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
