import React from 'react'

import Header from './Header'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <Header {...props} theme={theme} />
