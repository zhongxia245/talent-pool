import React, { Component } from 'react'
import DuckImage from '../assets/Duck.jpg'
import ComplexCustomOverlay from 'common/map/ComplexCustomOverlay.js'
import BDMap from 'common/map/BDMap.js'
import './HomeView.less'

class HomeView extends Component {
  componentDidMount() {
    let bdMap = new BDMap('allmap')
    bdMap.addOverlay()
  }

  render() {
    return (
      <div id='allmap' className='allmap' />
    )
  }
}

export default HomeView
