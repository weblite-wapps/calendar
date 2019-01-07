// W && R
const { W, R } = window

const handleCustomizeMode = (vueRoot, start) => {
  vueRoot.customizeMode = true

  // change on customization
  W.onChangeValue(({ key, value }) => {
    if (key === 'year') vueRoot.year = value
    else if (key === 'month') vueRoot.month = value
  })
  // handle customize object
  W.changeCustomize(R.identity)

  // start instantly if mode is customized
  start()
}

const handleNormalMode = (vueRoot, start) => {
  // get notes from shareDB Server
  // get Customize Value
  Promise.all([W.loadData(), W.share.getFromServer([])]).then(data => {
    const [{ customize }] = data

    vueRoot.year = customize.year
    vueRoot.month = customize.month

    start()
  })

  // shareDB sunbscription
  W.share.subscribe(notes => {
    vueRoot.notes = notes || {}
  })
}

export default vueRoot =>
  W.setHooks({
    wappWillStart(start, _, { mode }) {
      const handler =
        mode === 'customize' ? handleCustomizeMode : handleNormalMode

      handler(vueRoot, start)
    },
  })
