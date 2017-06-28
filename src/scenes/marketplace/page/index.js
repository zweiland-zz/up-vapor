import React from 'react'

import MarketplacePage from './MarketplacePage'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <MarketplacePage {...props} theme={theme} />
