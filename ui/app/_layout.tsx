import { Stack } from "expo-router";
import "@/global.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContextProviderWrapper from "@/contexts";
import 'react-native-reanimated'
import 'react-native-gesture-handler'

const queryClient = new QueryClient();
export default function RootLayout() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ContextProviderWrapper>

        <Stack screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
          <Stack.Screen name="(protected)" />
          <Stack.Screen name="login" />
          <Stack.Screen name="(auth)" />
        </Stack>

        </ContextProviderWrapper>
      </QueryClientProvider>
    </Provider>
  );
}
 