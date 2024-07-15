import * as Font from 'expo-font';
import { useEffect, useState } from "react";
import * as SplashScreen  from 'expo-splash-screen';
import {FontAwesome} from '@expo/vector-icons';
import { Alert } from 'react-native';



export default function useCachedResources() {

    const [isLoadingComplete, setLoadingComplete] = useState(false);

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {

                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    PlusJakartaSans : require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
                    PlusJakartaSansBold : require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
                    PlusJakartaSansExtraBold : require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
                    PlusJakartaSansBoldItalic : require('../assets/fonts/PlusJakartaSans-BoldItalic.ttf'),
                    PlusJakartaSansMedium : require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
                    PlusJakartaSansMediumItalic : require('../assets/fonts/PlusJakartaSans-MediumItalic.ttf'),

                    ...FontAwesome.font,
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
                alert(e)
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
