// R, W
const { W } = window

export default (type, { username, note }) => {
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
