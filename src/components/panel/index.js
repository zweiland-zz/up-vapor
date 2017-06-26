import React from 'react'

import Panel from './Panel'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <Panel {...props} theme={theme} />
