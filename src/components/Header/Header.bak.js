import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.less'

export const Header = () => (
  <div>
    <IndexLink to='/' activeClassName='route--active'>
      首页
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      计数器
    </Link>
    {' · '}
    <Link to='/zen' activeClassName='route--active'>
      异步获取
    </Link>
    {' · '}
    <Link to='/elapse' activeClassName='route--active'>
      Elapse
    </Link>
    {' · '}
    <Link to='/route/88' activeClassName='route--active'>
      路由跳转
    </Link>
    {' · '}
    <Link to='/notFound' activeClassName='route--active'>
      404
    </Link>
  </div>
)

export default Header
