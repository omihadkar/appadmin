const Person = require('../models/admin.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('This is test controller!');
};

exports.admin_create = function (req, res) {
    let person = new Person(
        {
            username: req.body.username,
            password: req.body.password,            
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
    );

    person.save(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        console.log(person.username);
        res.send('Person Created successfully')
    })
};


exports.admin_auth = function (req, res) {
    Person.findOne({username: req.body.username,password:req.body.password},function (err, person) 
    {
        if (err) {console.log(err);  return next(err);}
        console.log(person);
        res.send(person);
    })
};