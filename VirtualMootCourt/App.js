import React from 'react';
import Navigator from './src-app/ui/nav/Navigation';
import { PaperProvider } from 'react-native-paper';
import { RootProvider } from './src-app/contexts/RootContext'

const App = () => {
    return (
        <RootProvider>
            <PaperProvider>
                <Navigator />
            </PaperProvider>
        </RootProvider>
    )
}

export default App;