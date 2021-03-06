var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var workspaceId = req.query.workspaceId;
    if (typeof workspaceId == 'undefined') {
        workspaceId = "";
    }
    var sess = req.session;
    var username = req.session.username;
    var isLoggedIn = true;
    if (typeof username === "undefined") {
        username = "";
        isLoggedIn = false;
    }
    res.render('index', { title: 'Web Audio Editor', username: username, isLoggedIn: isLoggedIn, workspaceId: workspaceId});
});

module.exports = router;
