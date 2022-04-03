import { Dimensions, StyleSheet } from 'react-native'

export const { width: PAGE_WIDTH, height: PAGE_HEIGHT } =
  Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  },
})
