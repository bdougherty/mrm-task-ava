'use strict';

const { packageJson, install } = require('mrm-core');

function task() {
	packageJson().appendScript('test', 'ava').save();
	install('ava');
}

task.description = 'Adds ava to the project';
module.exports = task;
