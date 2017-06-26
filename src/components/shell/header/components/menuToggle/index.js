import React from 'react'

import MenuToggle from './MenuToggle'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <MenuToggle {...props} theme={theme} />
