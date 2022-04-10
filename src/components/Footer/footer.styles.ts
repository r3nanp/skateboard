import { StyleSheet } from 'react-native'
import { BACKGROUND_COLOR } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    height: 50,
    marginBottom: 50,
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: 'row',
  },
  fillCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 1.7,
    fontWeight: '500',
  },
  iconContainer: {},
})
