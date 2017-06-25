import React from 'react'

import Logo from './Logo'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <Logo {...props} theme={theme} />
