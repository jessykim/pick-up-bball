

function index(req, res) {
  res.render('schedule/index', {
    title: 'Schedule'
  })
}

function sunday(req, res) {
  res.render('schedule/sunday', {
    title: 'Sunday'
  })
}

function monday(req, res) {
  res.render('schedule/monday', {
    title: 'Monday'
  })
}

function tuesday(req, res) {
  res.render('schedule/tuesday', {
    title: 'Tuesday'
  })
}

function wednesday(req, res) {
  res.render('schedule/wednesday', {
    title: 'Wednesday'
  })
}

function thursday(req, res) {
  res.render('schedule/thursday', {
    title: 'Thursday'
  })
}

function friday(req, res) {
  res.render('schedule/friday', {
    title: 'Friday'
  })
}

function saturday(req, res) {
  res.render('schedule/saturday', {
    title: 'Saturday'
  })
}

export {
  index,
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday
}