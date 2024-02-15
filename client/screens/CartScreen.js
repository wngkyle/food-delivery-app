import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { featured } from '../constants';
import { themeColors } from '../theme';
import * as Icons from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';

export default function CartScreen() {
    const navigation = useNavigation();
    const restaurant = featured.restaurants[0];
    return (
        <View className="bg-blue flex-1">
            {/* back button */}
            <View className='relative py-4 shadow-sm'>
                <TouchableOpacity
                    style={{backgroundColor: themeColors.bgColor(1)}}
                    className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
                    onPress={() => { navigation.goBack()}}
                >
                    <Icons.ArrowLeft strokeWidth={3} stroke='white' />
                </TouchableOpacity>
                <View>
                    <Text className='font-bold text-xl text-center'>
                        Your Cart
                    </Text>
                    <Text className='text-gray-500 text-center'>
                        {restaurant.name}
                    </Text>
                </View>
            </View>
        </View>
    );
}
