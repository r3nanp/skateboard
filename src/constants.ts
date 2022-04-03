import { SkateType } from './components'

export const BACKGROUND_COLOR = '#F1F1F1'

export const SKATES: SkateType[] = [
  {
    id: 1,
    title: 'Samurai',
    description:
      'A durable deck featured with a menacing face of a samurai at the center of the underside accompanied with a large red sun motif.',
    source: require('./assets/01.png'),
  },
  {
    id: 2,
    title: 'Reject',
    description:
      "You don't have time to consider wheter the graphic on your CSS board would be considered modernist.",
    source: require('./assets/02.png'),
  },
  {
    id: 3,
    title: 'Great Wave',
    description:
      'The top of the deck has the same matching graphic in black outline and embodies an overall mellow concave.',
    source: require('./assets/03.png'),
  },
]
