import React from 'react'

import DomainsPage from './DomainsPage'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <DomainsPage {...props} theme={theme} />
