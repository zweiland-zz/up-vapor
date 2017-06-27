import React from 'react'

import UtilityNav from './UtilityNav'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <UtilityNav {...props} theme={theme} />
