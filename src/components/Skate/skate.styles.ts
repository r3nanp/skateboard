import { Dimensions, StyleSheet } from 'react-native'

export const { width: PAGE_WIDTH, height: PAGE_HEIGHT } =
  Dimensions.get('window')

const CIRCLE_WIDTH = PAGE_WIDTH * 0.7

export const styles = StyleSheet.create({
  container: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    width: CIRCLE_WIDTH,
    marginBottom: 120,
  },
  image: {
    aspectRatio: 1,
    position: 'absolute',
    height: PAGE_HEIGHT * 0.5,
  },
  circle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: CIRCLE_WIDTH / 2,
  },
  title: {
    fontWeight: '700',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
})
