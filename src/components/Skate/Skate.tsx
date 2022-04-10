import { Image, Text, View } from 'react-native'

import { SkateProps } from './skate.types'
import { styles } from './skate.styles'

export const Skate = ({ skate }: SkateProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle} />

        <Image
          source={skate.source}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>{skate.title}</Text>
      <Text style={styles.description}>{skate.description}</Text>
    </View>
  )
}
