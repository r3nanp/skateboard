import { ImageSourcePropType } from 'react-native'
import Animated from 'react-native-reanimated'

export interface SkateType {
  id: number
  source: ImageSourcePropType
  title: string
  description: string
}

export type SkateProps = {
  skate: SkateType
  index: number
  translateX: Animated.SharedValue<number>
}
