const {bot} = require('../index');
const ayarlar = require('../json/ayarlar.json');
const moment = require('moment');
const Discord = require("discord.js");
const chalk = require('chalk');
function log(logg) {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${logg}`);
}