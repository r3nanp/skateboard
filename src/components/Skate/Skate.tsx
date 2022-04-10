import { Dimensions, Text, View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

//* CUSTOM IMPORTS
import type { SkateProps } from './skate.types'
import { styles } from './skate.styles'

export const { width: PAGE_WIDTH, height: PAGE_HEIGHT } =
  Dimensions.get('window')

export const Skate = ({ skate, index, translateX }: SkateProps) => {
  const inputRange = [
    (index - 1) * PAGE_WIDTH,
    index * PAGE_WIDTH,
    (index + 1) * PAGE_WIDTH,
  ]

  const circleStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    )

    return {
      transform: [{ scale }],
    }
  })

  const imageStyle = useAnimatedStyle(() => {
    const progress = interpolate(
      translateX.value,
      inputRange,
      [0, 0, 1],
      Extrapolate.CLAMP
    )

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    )

    return {
      opacity,
      transform: [
        {
          rotate: `${progress * Math.PI}rad`,
        },
      ],
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Animated.View style={[styles.circle, circleStyle]} />

        <Animated.Image
          source={skate.source}
          style={[styles.image, imageStyle]}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>{skate.title}</Text>
      <Text style={styles.description}>{skate.description}</Text>
    </View>
  )
}
