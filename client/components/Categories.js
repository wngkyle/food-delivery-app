import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'

export default function Categories() {
    const [activeCategories, setActiveCategories] = useState(null);

  return (
    <View className="mt-4">
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
            paddingHorizontal: 15
        }}
    >
        {
            categories.map((categories, index) => {
                const isActive = categories.id == activeCategories
                const btnClass = isActive ? 'bg-gray-400' : 'bg-gray-200'
                const textClass = isActive ? 'font-semibold text-gray-600' : 'text-gray-600'
                return (
                    <View
                        key={index}
                        className="flex justify-center items-center mr-6"
                    >
                        <TouchableOpacity
                            className={`p-1 rounded-full shadow" ${btnClass}`}
                            onPress={() => {
                                setActiveCategories(categories.id)
                                console.log(categories.id)
                            }}
                        >
                            <Image 
                                style={{
                                    width: 45,
                                    height: 45,
                                }}
                                source={categories.image}
                            />
                        </TouchableOpacity>
                        <Text className={`text-sm ${textClass}`}>
                            {categories.name}
                        </Text>
                    </View>
                )
            })
        }
    </ScrollView>
    </View>
  )
}