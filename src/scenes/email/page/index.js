import React from 'react'

import EmailPage from './EmailPage'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <EmailPage {...props} theme={theme} />
