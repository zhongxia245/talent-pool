/**
 * 信息展示组件
 * 读者信息，或者企业信息的展示
 */
import React, { Component } from 'react'
import Icon from 'common/components/Icon'

import './index.less'

class InfoShow extends Component {
  render() {
    const data = this.props.data
    return (
      <div className="infoshow" data-id={data.id} data-url={data.url}>
        <img className="infoshow__img" src={data.path} alt="avatar" />
        <div className="infoshow__content">
          <strong>{data.name}</strong>
          <p>{data.desc}</p>
        </div>
        <Icon type="chevron-right" className="infoshow__icon"></Icon>
      </div>
    )
  }
}

export default InfoShow
