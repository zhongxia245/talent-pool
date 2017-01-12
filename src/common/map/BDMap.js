export default class BDMap {
  constructor(id) {
    this.map = new BMap.Map(id)
    this.map.enableScrollWheelZoom()

    // 创建点坐标
    let point = new BMap.Point(116.404, 39.915)
    this.map.centerAndZoom(point, 15)

    //添加第三方组件
    this.addCurrentLocation()
    this.addLocationControl()
    this.addNavigationControl()
    this.addScaleControl()
  }

  /**
   * 获取当前的地址位置
   */
  addCurrentLocation() {
    const map = this.map
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
  }

  /**
   * 添加定位功能
   */
  addLocationControl() {
    const map = this.map
    let geolocationControl = new BMap.GeolocationControl()
    geolocationControl.addEventListener('locationSuccess', function (e) {
      let address = ''
      address += e.addressComponent.province
      address += e.addressComponent.city
      address += e.addressComponent.district
      address += e.addressComponent.street
      address += e.addressComponent.streetNumber
      console.log('当前定位地址为：' + address)
    })
    geolocationControl.addEventListener('locationError', function (e) {
      alert(e.message)
    })
    map.addControl(geolocationControl)
  }

  /**
   * 添加刻度尺
   */
  addScaleControl() {
    this.map.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT }))
  }

  /**
   * 导航控制
   */
  addNavigationControl() {
    this.map.addControl(new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL }));
  }

  /**
   * 添加遮罩物
   */
  addOverlay() {
    //添加覆盖物
    for (var index = 0; index < 100; index++) {
      var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(116.407845 + index * 0.001, 39.914101 + index * 0.001), '银湖海岸城' + index, 'mouseoverTxt')
      map.addOverlay(myCompOverlay)
    }
  }
}
