'use strict';
/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const router = require('../server/core/router.js');
const morgan = require('morgan');
const logger = require('./logger');
const app = express();

//app.use('/', router);
express.static.mime.default_type = 'application/json';
app.use('/', express.static('link_app'));
app.use(logger.errorHandler());
app.use(morgan('tiny'));

module.exports = app;
