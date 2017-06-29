import React from 'react'

import MediaBlock from './MediaBlock'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <MediaBlock {...props} theme={theme} />
