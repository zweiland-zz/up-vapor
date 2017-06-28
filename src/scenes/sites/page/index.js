import React from 'react'

import SitesPage from './SitesPage'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <SitesPage {...props} theme={theme} />
