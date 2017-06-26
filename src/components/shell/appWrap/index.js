import React from 'react'

import AppWrap from './AppWrap'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <AppWrap {...props} theme={theme} />
