import { View, Text, SafeAreaView } from 'react-native'
import Animated, { FadeInRight } from 'react-native-reanimated';
import React, { useEffect } from 'react'
import { useColorScheme } from 'nativewind'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import {Image} from 'expo-image'

const SplashScreen = () => {

    const { colorScheme, toggleColorScheme } = useColorScheme();

    const { navigate }: NavigationProp<SplashNavigationType> = useNavigation();

    const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


  useEffect(()=>{
    setTimeout(() => {
        navigate('Welcome')
    }, 2000)
  },[])

    return (
        <SafeAreaView className='flex-1 justify-center items-center bg-white'>
            <StatusBar style='auto' />

            <View className='w-full px-4 items-center' >
                <Animated.View className='flex-row items-center justify-center'
                    entering ={FadeInRight.duration(100).springify()}
                >
                    <View className='pr-2'>
                        <View className='w-20 h-20 overflow-hidden'>
                            <Image
                                source={require('../../../assets/images/logo.png')}
                                className='w-full h-full flex-1'
                                placeholder={blurhash}
                                contentFit='cover'
                                transition={1000}                                
                            />
                        </View>
                    </View>
                </Animated.View>

                <Animated.View className='flex-row justify-center items-center'
                    entering ={FadeInRight.delay(200).springify()}
                >
                    <Text
                        className='text-neutral-600 text-xl leading-10 pl-1'
                        style={{
                            fontFamily: 'PlusJakartaSans'
                        }}
                    >STACKS</Text>

                    <Text
                        className='text-[#31aca3] text-xl leading-10 pl-1'
                        style={{
                            fontFamily: 'PlusJakartaSansBold'
                        }}
                    >SCRYPTO</Text>

                </Animated.View>

            </View>

        </SafeAreaView>
    )
}

export default SplashScreen