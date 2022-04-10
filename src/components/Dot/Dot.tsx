import Animated, { useAnimatedStyle } from 'react-native-reanimated'

import { styles } from './dot.styles'
import type { DotProps } from './dot.types'

export const Dot = ({ isActive }: DotProps) => {
  const dotStyle = useAnimatedStyle(() => ({
    backgroundColor: isActive ? 'black' : 'white',
  }))

  return <Animated.View style={[styles.dot, dotStyle]} />
}
