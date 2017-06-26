import React from 'react'

import Ad from './Ad'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <Ad {...props} theme={theme} />
