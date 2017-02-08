export default () => ({
  path: 'jobs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Life = require('./components/Jobs').default
      cb(null, Life)
    })
  }
})
