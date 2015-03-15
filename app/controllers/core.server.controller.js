'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};

exports.signin = function(req, res) {
	res.render('signin', {
		user: req.user || null,
		request: req
	});
};

exports.signup = function(req, res) {
	res.render('signup', {
		user: req.user || null,
		request: req
	});
};