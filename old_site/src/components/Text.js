import React from 'react'
import { Text as BaseText } from 'rebass'

export const Text = props => (
  <BaseText
    fontFamily="sans"
    as="p"
    color="gray"
    m={0}
    p={0}
    {...props}
  />
)
