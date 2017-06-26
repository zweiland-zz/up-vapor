import React from 'react'

import MainContent from './MainContent'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <MainContent {...props} theme={theme} />
