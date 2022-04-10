import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

//* CUSTOM IMPORTS
import { Dot } from '../Dot'
import type { FooterProps } from './footer.types'
import { styles } from './footer.styles'

export const Footer = ({ skates }: FooterProps) => (
  <View style={styles.container}>
    {/* Paginator */}
    <View style={[styles.fillCenter, { flexDirection: 'row' }]}>
      {skates.map((_, index) => (
        <Dot key={index} isActive={index === 0} />
      ))}
    </View>

    {/* Text container */}
    <View style={styles.fillCenter}>
      <Text style={styles.text}>View Board</Text>
    </View>

    {/* Icon container */}
    <View style={styles.fillCenter}>
      <AntDesign name="arrowright" size={24} />
    </View>
  </View>
)
