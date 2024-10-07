import { Tabs } from "expo-router";
import { Cart, Delivery, Home, IconoirProvider } from "iconoir-react-native";
import { getHeaderTitle } from "@react-navigation/elements";
import Header from "@/components/Header";

export default function RootLayout() {
	return (
		<IconoirProvider
			iconProps={{
				color: "#000",
				height: 24,
				width: 24,
			}}
		>
			<Tabs
				screenOptions={{
					header: ({ options, route }) => {
						const title = getHeaderTitle(options, route.name);
						return <Header title={title} />;
					},
					tabBarShowLabel: false,
				}}
			>
				<Tabs.Screen
					name="index"
					options={{ title: "Home", tabBarIcon: () => <Home /> }}
				/>
				<Tabs.Screen
					name="cart"
					options={{ title: "Cart", tabBarIcon: () => <Cart /> }}
				/>
				<Tabs.Screen
					name="orders"
					options={{ title: "Orders", tabBarIcon: () => <Delivery /> }}
				/>
			</Tabs>
		</IconoirProvider>
	);
}
