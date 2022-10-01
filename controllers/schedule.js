

function index(req, res) {
  res.render('schedule/index', {
    title: 'Schedule'
  })
}

export {
  index,
}