// W && R
const { W, R } = window


export default (vueRoot) => {
  /* change mode */
  if (W.mode === 'customize') { vueRoot.customizeMode = true }


  /* Load Customization Data */
  // get Customize Value
  W.loadData().then(({ customize }) => {
    vueRoot.year = customize.year
    vueRoot.month = customize.month
  })


  /* ShareDB */
  // get notes from shareDB Server
  W.share.getFromServer([]).then(() => W.start())
  // shareDB sunbscription
  W.share.subscribe((notes) => { vueRoot.notes = notes || {} })


  /* Customization */
  // start instantly if mode is customized
  vueRoot.customizeMode && W.start()
  // change on customization
  W.onChangeValue(({ key, value }) => {
    if (key === 'year') vueRoot.year = value
    else if (key === 'month') vueRoot.month = value
  })
  // handle customize object
  W.changeCustomize(R.identity)
}
