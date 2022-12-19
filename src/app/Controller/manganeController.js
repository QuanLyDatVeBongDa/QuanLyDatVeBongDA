const { muntipleMongooseToObject } = require('../../until/mongoose');
const { mongooseToObject } = require('../../until/mongoose');

const Ticket = require('../Models/ticket');
const Accout = require('../Models/accouts');
const UserBuyTicket = require('../Models/userbuyticket');

class manageController {

    // show list accout
    show(req, res, next) {
        Accout.find({ role: '2' })
          .then((accout) => {
            res.render('manageUser', {
              accout: muntipleMongooseToObject(accout),
            });
          })
          .catch(next);
      }

       //[DELETE] /manage/deleteUser/:id
  deleteUser(req, res, next) {
    Accout.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  //[GET] /
  search(req, res, next) {
    Accout.find({
      userName: { $regex: '.*' + req.query.search + '.*', $options: 'i' },
      role: '2',
    })
      .then((accout) =>
        res.render('manageUser', {
          accout: muntipleMongooseToObject(accout),
        })
      )
      .catch(next);
  }

}

module.exports = new manageController();
