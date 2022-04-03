import { ScrollView, Text, View } from 'react-native'

import { Skate } from '../../components'
import { SKATES } from '../../constants'
import { styles } from './homePage.styles'

export const HomePage = () => {
  return (
    <ScrollView style={styles.container} horizontal>
      {SKATES.map(skate => {
        return <Skate key={skate.id} skate={skate} />
      })}
    </ScrollView>
  )
}
