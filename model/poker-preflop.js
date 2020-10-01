const mongoose = require('mongoose');
const Joi = require('joi');

let chartRangeSchema = new mongoose.Schema({
    chartName: {
        type: String,
        require: true
    },
    chartType: {
        type: String,
        enum: ['RFI', 'FOR', 'F3B', 'NA'],
        require: true
    },
    heroPosition: {
        type: String,
        enum: ['EP', 'MP', 'CO', 'BU', 'SB', 'BB', 'NA'],
        require: true
    },
    villianPosition: {
        type: String,
        enum: ['EP', 'MP', 'CO', 'BU', 'SB', 'BB', 'NA'],
        require: true
    },
    raiseShortRange: {
        type: String,
        required: true
    },
    callShortRange: {
        type: String,
        required: true
    },
    foldShortRange: {
        type: String,
        required: true
    }
});

const ChartRange = mongoose.model('ChartRange', chartRangeSchema);

function validateChartRange(chartRange) {
    const schema = Joi.object({
        chartName: Joi.string().required(),
        chartType: Joi.string().valid('RFI', 'FOR', 'F3B', 'NA').required(),
        heroPosition: Joi.string().valid('EP', 'MP', 'CO', 'BU', 'SB', 'BB', 'NA').required(),
        villianPosition: Joi.string().valid('EP', 'MP', 'CO', 'BU', 'SB', 'BB', 'NA').required(),
        raiseShortRange: Joi.string().required(),
        callShortRange: Joi.string().required(),
        foldShortRange: Joi.string().required(),
    });
    return schema.validate(chartRange);
}

exports.validateChartRange = validateChartRange;
exports.ChartRange = ChartRange;