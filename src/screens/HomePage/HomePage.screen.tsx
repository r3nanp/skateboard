import { View } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useDerivedValue,
} from 'react-native-reanimated'

//* CUSTOM IMPORTS
import { Footer, PAGE_WIDTH, Skate } from '../../components'
import { SKATES } from '../../constants'
import { styles } from './homePage.styles'

export const HomePage = () => {
  const translateX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x
    },
  })

  const activeIndex = useDerivedValue(() => {
    return translateX.value / PAGE_WIDTH
  }, [])

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
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

      <Footer skates={SKATES} />
    </View>
  )
}
