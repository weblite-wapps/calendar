// R, W
const { W } = window

export const notif = (type, { username, note }) => {
  const content =
    type === 'add'
      ? [`Event was added by ${username}`, note]
      : type === 'modify'
      ? [`Event was modified by ${username}`, note]
      : type === 'remove'
      ? [`Event was removed by ${username}`, note]
      : undefined

  if (content) W.sendNotificationToAll(...content)
}

export const getAnalyticsType = (type) => {
  if (type === "modify") return "MODIFY_EVENT"
  else if (type === "add") return "ADD_EVENT"
  return "REMOVE_EVENT"
}