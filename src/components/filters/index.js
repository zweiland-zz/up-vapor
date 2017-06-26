import React from 'react'

import Filters from './Filters'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <Filters {...props} theme={theme} />
