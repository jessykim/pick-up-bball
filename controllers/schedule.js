

function index(req, res) {
  res.render('schedule/index', {
    title: 'Schedule'
  })
}

function indexSunday(req, res) {
  res.render('schedule/sunday', {
    title: 'Sunday'
  })
}

export {
  index,
  indexSunday,
}