import React, { Component } from 'react'
import classes from './PageNotFound.less'
import { withRouter } from 'react-router'

class PageNotFound extends Component {
  render() {
    const props = this.props
    return (
      <div className={classes.container}>
        <h1>Page not found!!!</h1>
        <h3>
          <a className={classes.link} onClick={props.router.goBack}>Back</a>
        </h3>
      </div>
    )
  }
}

PageNotFound.propTypes = {
  router: React.PropTypes.object.isRequired
}

export default withRouter(PageNotFound)
