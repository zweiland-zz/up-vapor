import React from 'react'

import Row from './Row'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <Row {...props} theme={theme} />
