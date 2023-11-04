const regex = {
  date: /\d{4}.\d{2}.\d{2}/,
  time: /\d{2}:\d{2}/
}

const match = (date: string, regex: RegExp) => {
  return date.match(regex)?.[0] ?? ''
}

export default {
  regex,
  match
}