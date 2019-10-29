import React from 'react'

// packages
import CssBaseline from '@material-ui/core/CssBaseline'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {orange, red} from '@material-ui/core/colors'
import {Checkbox} from '@material-ui/core'

// theme
const theme = createMuiTheme({
    palette: {
        primary: {
            main: red[500],
        },
        error: {
            main: orange[500],
        },
    },
})

// primary component
export const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Checkbox defaultChecked />
        </ThemeProvider>
    )
}
