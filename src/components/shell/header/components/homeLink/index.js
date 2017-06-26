import React from 'react'

import HomeLink from './HomeLink'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <HomeLink {...props} theme={theme} />
