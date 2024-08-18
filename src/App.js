import React from 'react'
import { Typography, AppBar } from '@mui/material'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notification from './components/Notification'

const App = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
        }}>
            <AppBar sx={{
                borderRadius: 15,
                margin: '30px 100px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '600px',
                border: '2px solid black',
            }} position='static' color='inherit'>
                <Typography variant='h2' align='center'>Video Chat</Typography>
            </AppBar>
            {/* Video Player COmponent */}
            <VideoPlayer />
            {/* Notification Bar */}
            <Options>
                <Notification />
            </Options>

        </div>
    )
}

export default App
