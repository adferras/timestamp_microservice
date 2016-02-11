'use strict';

var path = process.cwd();

module.exports = function (app) {

    app.route('/:query')
        .get(function(req, res) {
            var monthNames = [
              "January", "February", "March",
              "April", "May", "June", "July",
              "August", "September", "October",
              "November", "December"
            ];
            var str = req.params.query;
            var date = new Date(isNaN(str) ? str : parseInt(str, 10));
            var unixTime = date.getTime()/1000;
            if(isNaN(date)) {
                naturalDate = null;
            } else {
            var naturalDate = monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
            }

            var dateObj = { 'unix': unixTime, 'natural': naturalDate };

            res.send(JSON.stringify(dateObj));
        });

    app.route('/')
        .get(function (req, res) {
            res.sendFile(path + '/public/index.html');
        });
};