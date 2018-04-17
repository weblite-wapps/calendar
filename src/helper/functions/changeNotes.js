const { W } = window


export const dispatch = qlite => W.share.dispatch([], qlite, {})


export const addNote = (day, note) => dispatch(['__assoc', [day, note]])
