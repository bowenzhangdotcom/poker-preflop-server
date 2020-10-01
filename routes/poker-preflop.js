const express = require('express');
const router = express.Router();
const {validateChartRange, ChartRange} = require('../model/poker-preflop');
const {generalAuth, adminAuth} = require('../middleware/auth');
const {generateCompositeRange} =require ('../HandDefinitions/range');


router.get('/api/getChartRange', generalAuth, async (req, res) => {
    let resChartRange = await ChartRange.find({
        chartType: req.query.chartType,
        heroPosition: req.query.heroPosition,
        villianPosition: req.query.villianPosition
    });
    res.send(resChartRange);
});

router.put('/api/addChartRange', adminAuth, async (req, res) => {   
    const {error} = validateChartRange(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    newChartRange = new ChartRange({
        chartName: req.body.chartName,
        chartType: req.body.chartType,
        heroPosition: req.body.heroPosition,
        villianPosition: req.body.villianPosition,
        raiseShortRange: req.body.raiseShortRange,
        callShortRange: req.body.callShortRange,
        foldShortRange: req.body.foldShortRange,
    });

    let chartRangeExist = await ChartRange.findOne({
        chartName: req.body.chartName,
        chartType: req.body.chartType,
        heroPosition: req.body.heroPosition,
        villianPosition: req.body.villianPosition,
        raiseShortRange: req.body.raiseShortRange,
        callShortRange: req.body.callShortRange,
        foldShortRange: req.body.foldShortRange
    });

    if (chartRangeExist) {
        chartRangeExist.overwrite(newChartRange);
        chartRangeExist = await chartRangeExist.save();
        res.send(chartRangeExist);
    } else {
        newChartRange = await newChartRange.save();
        res.send(newChartRange);
    };
});

router.delete('/api/deleteRange', adminAuth, async (req, res) => {
    let range = await ChartRange.deleteOne({
        chartName: req.body.chartName,
        chartType: req.body.chartType,
        heroPosition: req.body.heroPosition,
        villianPosition: req.body.villianPosition
    });
    if (range.n < 1) return res.status(400).send('The chartRange with the given parameters was not found');
    res.send(`${req.body.chartName} has been deleted`);
});


module.exports = router;