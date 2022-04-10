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

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {SKATES.map((skate, index) => {
        return (
          <Skate
            key={skate.id}
            skate={skate}
            index={index}
            translateX={translateX}
          />
        )
      })}
    </Animated.ScrollView>
  )
}
