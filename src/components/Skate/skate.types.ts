import { ImageSourcePropType } from 'react-native'

export interface SkateType {
  id: number
  source: ImageSourcePropType
  title: string
  description: string
}

export type SkateProps = {
  skate: SkateType
}
