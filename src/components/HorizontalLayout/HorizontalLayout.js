import React from "react"
import { View } from "react-native"
import Props from "prop-types"

const CONTAINER = {
  alignSelf: "stretch",
  display: "flex",
  flexDirection: "row",
}

const HorizontalLayout = props => {
  const { children, style } = props
  return <View style={{ ...CONTAINER, ...style }}>{children}</View>
}

HorizontalLayout.propTypes = {
  style: Props.object,
}
export { HorizontalLayout }
