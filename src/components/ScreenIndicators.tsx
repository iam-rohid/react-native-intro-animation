import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const ScreenIndicators = ({
  count,
  activeIndex,
}: {
  count: number;
  activeIndex: number;
}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginVertical: 32,
      }}
    >
      {new Array(count).fill("1").map((_, i) => (
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 8,
            backgroundColor:
              i === activeIndex ? theme.colors.primary : theme.colors.border,
          }}
          key={i}
        />
      ))}
    </View>
  );
};

export default ScreenIndicators;
