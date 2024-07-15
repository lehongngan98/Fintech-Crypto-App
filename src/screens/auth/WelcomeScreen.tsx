import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated'

import ButtonOutline from '@/src/components/ButtonOutline'
import Button from '@/src/components/Button'
import Breaker from '../../components/Breaker';
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp ,useNavigation} from '@react-navigation/native'



const WelcomeScreen = () => {

    const { navigate : navigateAuth } : NavigationProp<AuthNavigationProps> = useNavigation();
    

    return (
        <SafeAreaView className='flex-1 bg-white justify-between items-center'>
            <StatusBar style='auto' />

            <View className='w-full px-4 items-center justify-center space-y-6 h-full'>

                {/* Logo */}
                <View className='justify-center items-center'>
                    <Animated.Image
                        source={require('@/assets/images/logo.png')}
                        className='w-24 h-24'
                        entering={FadeInDown.duration(200).springify()}
                    />
                </View>


                {/* Welcome text */}
                <View className='justify-center items-center'>
                    <Animated.Text
                        className='text-neutral-800 text-3xl font-medium leading-10'
                        entering={FadeInDown.duration(200).delay(200).springify()}
                        style={{
                            fontFamily: "PlusJakartaSansBold"
                        }}
                    >
                        Welcome
                    </Animated.Text>
                </View>

                {/* Login and Sign up button */}
                <View className='w-full justify-start'>
                    <Animated.View
                        entering={FadeInRight.duration(200).delay(300).springify()}
                        className='pb-6'
                    >
                        <Button title={'Login'} action={() => navigateAuth('Login')}/>
                    </Animated.View>

                    <Animated.View
                        entering={FadeInRight.duration(200).delay(400).springify()}
                    >
                        <ButtonOutline title={'Sign Up'} action={() => navigateAuth('Register')}/>
                    </Animated.View>

                </View>

                {/* Breaker Line */}
                <View>
                    <Breaker />
                </View>

                {/* 3rt Party Auth */}
                <View className='w-full justify-normal'>
                    <Animated.View
                        entering={FadeInRight.duration(100).delay(600).springify()}
                        className='pb-4'
                    >
                        <ButtonOutline title={'Continue with Google'}>
                            <AntDesign name="google" size={24} color="red" />
                        </ButtonOutline>
                    </Animated.View>

                    <Animated.View
                        entering={FadeInRight.duration(100).delay(700).springify()}

                    >
                        <ButtonOutline title={'Continue with Apple'}>
                            <AntDesign name="apple1" size={24} color="silver" />
                        </ButtonOutline>
                    </Animated.View>


                </View>
            </View>

        </SafeAreaView>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({})