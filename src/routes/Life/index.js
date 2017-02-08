export default () => ({
  path: 'life',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Life = require('./components/Life').default
      cb(null, Life)
    })
  }
})
