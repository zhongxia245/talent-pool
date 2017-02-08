/**
 * 高德底图类库
 */
export default class GDMap {
  constructor(id, resizeEnable = true, zoom = 13) {
    this.map = new AMap.Map(id, {
      resizeEnable: resizeEnable,
      center: [116.397428, 39.90923],
      zoom: zoom
    })

    this.addScaleControl()
    this.addLocationControl()
  }

  /**
   * 添加定位功能
   */
  addLocationControl() {
    const map = this.map

    map.plugin('AMap.Geolocation', function () {
      let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：无穷大
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        buttonPosition: 'LB'
      })

      map.addControl(geolocation)

      geolocation.getCurrentPosition()

      AMap.event.addListener(geolocation, 'complete', onComplete) //返回定位信息
      AMap.event.addListener(geolocation, 'error', onError) //返回定位出错信息
    })
    //解析定位结果
    function onComplete(data) {
      console.log('定位成功', data)
    }
    //解析定位错误信息
    function onError(data) {
      console.log('定位失败', data)
    }
  }

  /**
   * 添加刻度尺
   */
  addScaleControl() {
    const map = this.map
    map.plugin(["AMap.ToolBar"], function () {
      map.addControl(new AMap.ToolBar())
    })
  }

  /**
 * 添加遮罩物
 */
  addOverlay(callback, draggable = false) {
    const map = this.map

    var marker = new AMap.Marker({ //添加自定义点标记
      map: map,
      position: [116.400100, 39.90923], //基点位置
      offset: new AMap.Pixel(0, 0), //相对于基点的偏移位置
      draggable: draggable,  //是否可拖动
      content: '<div class="overlay">point</div>'   //自定义点标记覆盖物内容
    });

    marker.on('click', function (e) {
      let dom = e.target.ji.contentDom.childNodes[0]

      if (dom.classList.contains('overlay--active')) {
        dom.classList.remove('overlay--active')
        callback && callback(false)
      } else {
        dom.classList.add('overlay--active')
        callback && callback(true)
      }
    });

    this.addaddCluster1()
  }

  /**
   * 点汇聚功能，需要优化下。
   */
  addaddCluster1() {
    const map = this.map
    var cluster, markers = [];

    // 随机向地图添加500个标注点
    var mapBounds = map.getBounds();
    var sw = mapBounds.getSouthWest();
    var ne = mapBounds.getNorthEast();
    var lngSpan = Math.abs(sw.lng - ne.lng);
    var latSpan = Math.abs(ne.lat - sw.lat);
    for (var i = 0; i < 500; i++) {
      var markerPosition = [sw.lng + lngSpan * (Math.random() * 1), ne.lat - latSpan * (Math.random() * 1)];
      var marker = new AMap.Marker({
        position: markerPosition,
        icon: "http://amappc.cn-hangzhou.oss-pub.aliyun-inc.com/lbs/static/img/marker.png",
        offset: { x: -8, y: -34 }
      });
      markers.push(marker);
    }
    this.addCluster(cluster, markers);
  }

  // 添加点聚合
  addCluster(cluster, markers) {
    const map = this.map
    if (cluster) {
      cluster.setMap(null);
    }

    /**
     * 参照：http://lbs.amap.com/api/javascript-api/reference/plugin/#AMap.MarkerClusterer
     */
    var sts = [{
      url: "http://a.amap.com/lbs/static/img/1102-1.png",
      size: new AMap.Size(32, 32),
      offset: new AMap.Pixel(-16, -30)
    }, {
      url: "http://a.amap.com/lbs/static/img/2.png",
      size: new AMap.Size(32, 32),
      offset: new AMap.Pixel(-16, -30)
    }, {
      url: "http://lbs.amap.com/wp-content/uploads/2014/06/3.png",
      size: new AMap.Size(48, 48),
      offset: new AMap.Pixel(-24, -45),
      textColor: '#FFF'
    }];
    map.plugin(["AMap.MarkerClusterer"], function () {
      cluster = new AMap.MarkerClusterer(map, markers, {
        styles: sts
      });
    });
  }
}
