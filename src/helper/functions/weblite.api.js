// W && R
const { W, R } = window

export default vueRoot => {
  /* change mode */
  if (W.mode === 'customize') {
    vueRoot.customizeMode = true
  }

  /* Load Customization Data */
  // get Customize Value
  W.loadData().then(
    ({ user: { name }, creator, customize: { year, month } }) => {
      vueRoot.year = year
      vueRoot.month = month
      vueRoot.username = name
      vueRoot.isAdmin = creator
    },
  )

  /* ShareDB */
  // get notes from shareDB Server
  W.share.getFromServer([]).then(W.start)
  // shareDB subscription
  W.share.subscribe(notes => {
    vueRoot.notes = notes || {}
  })

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

// // W && R
// const { W, R } = window

// const handleCustomize = (start, vue) => {
//   W.onChangeValue(({ key, value }) => {
//     if (key === 'title') vue.$store.commit('changeTitle', value)
//   })

//   W.changeCustomize(R.identity)

//   start()
// }

// const handleNormal = (start, vue) => {
//   W.loadData().then(({ user: { name }, creator, customize: { title } }) => {
//     vue.$store.commit('changeWebliteRelatedData', {
//       username: name,
//       title,
//       isAdmin: creator,
//     })
//   })

//   W.share.getFromServer([]).then(start)
// }

// export default vue => {
//   W.setHooks({
//     wappWillStart(start, error, { mode }) {
//       mode === 'customize'
//         ? handleCustomize(start, vue)
//         : handleNormal(start, vue)
//     },

//     onNotif() {
//       W.deleteAllNotifications()
//     },
//   })
// }
