const { Appointment, User } = require('../models')

class SchedulleController {
  async index (req, res) {
    const providers = await User.findAll({ where: { provider: true } })

    return res.render('schedule/index', { providers })
  }
}

module.exports = new SchedulleController()
