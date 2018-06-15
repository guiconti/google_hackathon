'use strict';
/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const router = require('../server/core/router.js');
const logger = require('./logger');

const app = express();

app.use('/', express.static('link_app'));
app.use(logger.errorHandler());

module.exports = app;
