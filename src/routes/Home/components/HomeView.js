import React, { Component } from 'react';
import DuckImage from '../assets/Duck.jpg'
import './HomeView.less'

class HomeView extends Component {
  componentDidMount() {
    this.initMap()
  }

  initMap() {
    var map = new BMap.Map("allmap"); // 创建Map实例
    var point = new BMap.Point(116.404, 39.915); // 创建点坐标
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(); //启用滚轮放大缩小

    //获取地址位置
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        console.log('您的位置：', r.point)
      }
      else {
        console.log(this.getStatus())
      }
    }, { enableHighAccuracy: true })
  }

  render() {
    return (
      <div id="allmap" className="allmap">
      </div>
    );
  }
}

export default HomeView;
