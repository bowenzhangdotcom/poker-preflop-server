const mongoose = require('mongoose');
const Joi = require('joi');

let chartRangeSchema = new mongoose.Schema({
    chartName: {
        type: String,
        require: true
    },
    chartType: {
        type: String,
        require: true
    },
    heroPosition: {
        type: String,
        require: true
    },
    villianPosition: {
        type: String,
        require: true
    },
    chartRange: {
        type: Object,
        require: true
    }
});

const ChartRange = mongoose.model('ChartRange', chartRangeSchema);

function validateChartRequest(chartRange) {
    const schema = Joi.object({
        chartName: Joi.string().required(),
        chartType: Joi.string().required(),
        heroPosition: Joi.string().required(),
        villianPosition: Joi.string().required(),
        raiseShortRange: Joi.string().required(),
        callShortRange: Joi.string().required(),
        foldShortRange: Joi.string().required(),
        splitRange: Joi.string().required()
    });
    return schema.validate(chartRange);
}

exports.validateChartRequest = validateChartRequest;
exports.ChartRange = ChartRange;