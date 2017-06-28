import React from 'react'

import AccountPage from './AccountPage'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <AccountPage {...props} theme={theme} />
