import React from 'react'

import Icon from './Icon'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <Icon {...props} theme={theme} />
