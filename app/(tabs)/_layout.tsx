import { Tabs } from "expo-router";
import { Cart, Delivery, Home, IconoirProvider } from "iconoir-react-native";
import { getHeaderTitle } from "@react-navigation/elements";
import Header from "@/components/Header";
import { Colors } from "@/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
	return (
		<IconoirProvider
			iconProps={{
				color: "#000",
				height: 24,
				width: 24,
			}}
		>
			<GestureHandlerRootView>
				<Tabs
					screenOptions={{
						header: ({ options, route }) => {
							const title = getHeaderTitle(options, route.name);
							return <Header title={title} />;
						},
						tabBarShowLabel: false,
						tabBarActiveTintColor: Colors.light.tabIconSelected,
					}}
				>
					<Tabs.Screen
						name="index"
						options={{
							title: "Home",
							tabBarIcon: ({ color }) => <Home color={color} />,
						}}
					/>
					<Tabs.Screen
						name="cart"
						options={{
							title: "Cart",
							tabBarIcon: ({ color }) => <Cart color={color} />,
						}}
					/>
					<Tabs.Screen
						name="orders"
						options={{
							title: "Orders",
							tabBarIcon: ({ color }) => <Delivery color={color} />,
						}}
					/>
				</Tabs>
			</GestureHandlerRootView>
		</IconoirProvider>
	);
}
