# Preflop Poker Assistant Server
Backend server for the Preflop Poker Assistant at https://bowenzhang.com/PreflopPokerAssistant/
Accepts a JSON input of standard poker range shorthand and stores the result in MongoDB as a JSON of Raise / Call / Fold percentages for each hand in the poker hand matrix. 
Built with Node.js, Express.js, Joi, and MongoDB. 

Valid chartTypes: RFI (Raise First In), FOR (Facing Open Raise), F3B (Facing 3Bet)
Valid positions for hero and villian: UTG (Under the Gun), HJ (Hijack), CO (Cutoff), BU (Button), SB (Small Blind), BB (Big Blind). 
Valid playerCount: 2 and 6
Sizing (Only for 2 player): 2x, 2.25x, 2.5x, 3x, 3.5x, 4x, 4.5x, 5x

## How to use
### Get Endpoint
Returns a hand chart that matches the following criteria: {
        chartType: 
        heroPosition: 
        villianPosition: 
        playerCount: 
        sizing: 
}

### Put Endpoint
Adds a hand chart with the following parameters: {
        chartName: 
        playerCount: 
        chartType: 
        heroPosition: 
        villianPosition: 
        sizing:
        raiseShortRange: Shorthand for 100% raise hands
        callShortRange: Shorthand for 100% call hands
        foldShortRange: Shorthand for 100% fold hands
        splitRange: JSON containing hands and percentage split between raise / call / fold
}

Example accepted shorthand: "KK, 33, AJs-AQs, A4s-A5s, KTs, K6s, K3s, Q9s, Q7s, Q2s, J7s, J2s, T6s, T2s-T3s, 94s-95s, 92s, 82s, 72s, 62s, 52s, 42s, A4o-AQo, K6o, K3o, Q7o, Q2o, J7o, J2o, T6o, T3o, 94o-95o, 74o, 63o, 52o, 42o"

## Delete Endpoint
Requires admin credentials. 
Deletes a specified chartName. 