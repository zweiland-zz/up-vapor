import React from 'react'

import SiteCard from './SiteCard'

const theme = require("./styles/" + process.env.UP_UI_THEME + ".css")

export default props => <SiteCard {...props} theme={theme} />
