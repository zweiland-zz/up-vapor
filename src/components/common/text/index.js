import React from 'react'

import Text from './Text'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <Text {...props} theme={theme} />
