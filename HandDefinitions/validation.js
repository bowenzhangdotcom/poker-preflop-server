const {cardRank, RangeSuits, Actions} = require('./rank');


const validateCard = (card) => {
    if (card in cardRank) {
        return card;
    } else {
        throw new Error('Invalid card');
    };
};

const validateHandFormat = (highCard, kicker) => {
    if (cardRank[highCard] >= cardRank[kicker]) {
        return true;
    } else {
        throw new Error('Invalid hand format, kicker is greater than high card');
    };
};

const validateRangeSuit = (suit) => {
    if (RangeSuits[suit] === 1) {
        return suit;
    } else {
        throw new Error('Invalid range suit symbol');
    };
};

const validateAction = (action) => {
    if (Actions[action] === 1) {
        return action;
    } else {
        throw new Error('Invalid action');
    }
}

exports.validateCard = validateCard;
exports.validateRangeSuit = validateRangeSuit;
exports.validateAction = validateAction;
exports.validateHandFormat = validateHandFormat;