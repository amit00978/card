import React from "react"
import { View } from "react-native"

const CONTAINER= {
  flexDirection: "column",
}

const VerticalLayout = props => {
  const { children, style } = props
  return <View style={{ ...CONTAINER, ...style }} {...props}>{children}</View>
}

export { VerticalLayout }
