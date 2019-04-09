const SubUser= require('../models/subusers.model');

exports.subUser_create = function (req, res) {
    let subUser = new SubUser(
        {
            username: req.body.username,
            domain: req.body.domain,            
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
    );

    subUser.save(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        console.log(subUser.username);
        res.send('Subuser'+subUser.username+'Created successfully')
    })
};


exports.subUser_getdata = function (req, res) {
    SubUser.find(function (err, subuser) 
    {
        if (err) {console.log(err);  return next(err);}
        console.log(subuser);
        res.send(subuser);
    })
};
