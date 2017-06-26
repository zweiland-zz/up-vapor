import React from 'react'

import Sidebar from './Sidebar'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <Sidebar {...props} theme={theme} />
