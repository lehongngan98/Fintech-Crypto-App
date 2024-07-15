import { ActivityIndicator, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import Button from '@/src/components/Button';
import Breaker from '@/src/components/Breaker';
import ButtonOutline from '@/src/components/ButtonOutline';
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { navigate : navigateAuth} :NavigationProp<AuthNavigationProps> = useNavigation();

    return (
        <View className='flex-1'>

            {/* loading */}
            {
                isLoading && (
                    <View className='absolute z-50 h-full w-full justify-center items-center'>
                        <View className='h-full w-full justify-center items-center bg-black opacity-[0.45]'>

                        </View>

                        <View className='absolute'>
                            <ActivityIndicator size={'large'} color={'white'} />
                        </View>
                    </View>
                )
            }

            <View className='flex-1 relative justify-center items-center'>
                <View className='w-full justify-center items-center px-4 space-y-4'
                    style={{ height: height * 0.75 }}
                >
                    {/* welcome text */}
                    <Animated.View
                        className='justify-center items-center'
                        entering={FadeInDown.duration(100).delay(200).springify()}
                    >
                        <Text className='text-neutral-800 text-2xl leading-[60px]'
                            style={{ fontFamily: "PlusJakartaSansBold" }}
                        >
                            Welcome User
                        </Text>

                        <Text className='text-neutral-600 text-sm font-medium'>
                            Welcome back! Please enter your account.
                        </Text>
                    </Animated.View>

                    {/* Email and Pasword text input */}
                    <Animated.View className='py-8 space-y-8 w-full'
                        entering={FadeInDown.duration(100).delay(300).springify()}
                    >

                        {/* Email */}
                        <View className='border-2 border-gray-400 rounded-lg'>
                            <TextInput
                                className='p-4'
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                                placeholder='Email'
                                autoCapitalize='none'

                            />
                        </View>

                        {/* Password */}
                        <View className='border-2 border-gray-400 rounded-lg'>
                            <TextInput
                                className='p-4'
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                                placeholder='Password'
                                autoCapitalize='none'
                                secureTextEntry={true}
                            />
                        </View>
                    </Animated.View>

                    {/* Login Button */}
                    <Animated.View className='w-full justify-start'
                        entering={FadeInDown.duration(100).delay(400).springify()}
                    >
                        <View className='pb-6'>
                            <Button title={"Login"} />
                        </View>
                    </Animated.View>

                    {/* Breaker Line */}
                    <View>
                        <Breaker />
                    </View>

                    {/* 3rt Party Auth */}
                    <View className='w-full justify-normal'>
                        <Animated.View
                            entering={FadeInDown.duration(100).delay(600).springify()}
                            className='pb-4'
                        >
                            <ButtonOutline title={'Continue with Google'}>
                                <AntDesign name="google" size={24} color="red" />
                            </ButtonOutline>
                        </Animated.View>
                    </View>


                    {/* Don't have an account */}
                    <Animated.View
                        entering={FadeInDown.duration(100).delay(700).springify()}
                        className='flex-row items-center justify-center'
                    >
                        <Text
                            className='text-neutral-600 text-lg font-medium leading-[38px] text-center'
                            style={{ fontFamily: "PlusJakartaSansMedium" }}
                        >
                            Don't have an account?{"  "}
                        </Text>


                        <Pressable onPress={()=> navigateAuth("Register")}>
                            <Text
                                className='text-green-800 text-lg font-medium leading-[38px] text-center'
                                style={{ fontFamily: "PlusJakartaSansBold" }}
                            >
                                Register
                            </Text>
                        </Pressable>
                    </Animated.View>

                </View>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})