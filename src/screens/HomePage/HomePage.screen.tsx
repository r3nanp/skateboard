import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

import { Skate } from '../../components'
import { SKATES } from '../../constants'
import { styles } from './homePage.styles'

export const HomePage = () => {
  const translateX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x
    },
  })

  const scrollTranslation = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }))

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      style={[styles.container, scrollTranslation]}
    >
      {SKATES.map(skate => {
        return <Skate key={skate.id} skate={skate} />
      })}
    </Animated.ScrollView>
  )
}
