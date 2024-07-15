import {  StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {StatusBar} from 'expo-status-bar'
import styled from 'styled-components/native'
import RootNavigation from './src/screens/navigation/RootNavigation'
import useCachedResources from './hooks/useCachesResources'
import { useUserStore } from './store/useUserStore'

const App = () => {

    const isLoadingComplete = useCachedResources();

    const { session , user} = useUserStore();

    useEffect(()=>{
        console.log("session",session)
        console.log("user",user)
    },[session,user])

    if (!isLoadingComplete) {
        return null;
    }

    return (
        <Container>
            <StatusBar style='auto'/>
            <RootNavigation />
        </Container>
    )
}

export default App


const Container = styled(View)`
    flex: 1;`