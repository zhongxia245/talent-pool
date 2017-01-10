import React, { Component } from 'react'
import DuckImage from '../assets/Duck.jpg'
import ComplexCustomOverlay from 'common/map/ComplexCustomOverlay.js'
import './HomeView.less'

console.log(ComplexCustomOverlay)

class HomeView extends Component {
  componentDidMount() {
    this.initMap()
  }

  initMap() {
    // TODO:点聚合，自定义覆盖物，给覆盖物添加事件，缩放功能， web版没有罗盘功能

    let map = new BMap.Map('allmap') // 创建Map实例
    let point = new BMap.Point(116.404, 39.915) // 创建点坐标
    map.centerAndZoom(point, 15)
    map.enableScrollWheelZoom() // 启用滚轮放大缩小

    // 获取地址位置
    let geolocation = new BMap.Geolocation()
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        let mk = new BMap.Marker(r.point)
        map.addOverlay(mk)
        map.panTo(r.point)
        console.log('您的位置：', r.point)
      } else {
        console.log(this.getStatus())
      }
    }, { enableHighAccuracy: true })

    // 添加定位控件
    let geolocationControl = new BMap.GeolocationControl()
    geolocationControl.addEventListener('locationSuccess', function (e) {
      // 定位成功事件
      let address = ''
      address += e.addressComponent.province
      address += e.addressComponent.city
      address += e.addressComponent.district
      address += e.addressComponent.street
      address += e.addressComponent.streetNumber
      console.log('当前定位地址为：' + address)
    })
    geolocationControl.addEventListener('locationError', function (e) {
      // 定位失败事件
      alert(e.message)
    })
    map.addControl(geolocationControl)

    // 添加刻度尺
    let top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT })// 左上角，添加比例尺
    map.addControl(top_left_control)


    //添加覆盖物
    for (var index = 0; index < 100; index++) {
      var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(116.407845 + index * 0.001, 39.914101 + index * 0.001), '银湖海岸城' + index, 'mouseoverTxt')
      map.addOverlay(myCompOverlay)
    }
  }

  render() {
    return (
      <div id='allmap' className='allmap' />
    )
  }
}

export default HomeView
