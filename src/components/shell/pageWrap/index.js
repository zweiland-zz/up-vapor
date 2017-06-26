import React from 'react'

import PageWrap from './PageWrap'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <PageWrap {...props} theme={theme} />
