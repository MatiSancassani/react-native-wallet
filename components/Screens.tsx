import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className="flex-1 bg-white pt-4 px-4">
      {children}
    </SafeAreaView>
  );
};

export default Screen;
