// W && R
const { W } = window

const handleCustomizeMode = (vueRoot, start) => {
  vueRoot.$store.commit('changeCustomizeMode', true)

  // start instantly if mode is customized
  start()
}

const handleNormalMode = vueRoot => {
  // get notes from shareDB Server
  // get Customize Value
  Promise.all([W.loadData(), W.share.getFromServer([])]).then(data => {
    const [
      {
        user: { name },
        creator,
        customize: { year, month },
      },
    ] = data

    vueRoot.$store.commit('changeWebliteRelatedData', {
      year,
      month,
      username: name,
      isAdmin: creator,
    })
  })

  // shareDB subscription
  W.share.subscribe(notes => {
    vueRoot.$store.commit('changeNotes', notes || {})
  })
}

export default vueRoot =>
  W.setHooks({
    wappWillStart(start, _, { mode }) {
      const handler =
        mode === 'customize' ? handleCustomizeMode : handleNormalMode

      handler(vueRoot, start)
    },

    onCustomizeValueChange({ key, value }) {
      if (key === 'year') vueRoot.$store.commit('changeYear', value)
      else if (key === 'month') vueRoot.$store.commit('changeMonth', value)
    },
  })
