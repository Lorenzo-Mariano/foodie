import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GroceryItem as GroceryType } from "@/types/GroceryItem";
import { useFocusEffect } from "expo-router";

const Orders = () => {
	const [orders, setOrders] = useState<GroceryType[]>([]);

	useFocusEffect(
		React.useCallback(() => {
			const fetchOrders = async () => {
				try {
					const storedOrders = await AsyncStorage.getItem("cart");
					if (storedOrders) {
						setOrders(JSON.parse(storedOrders));
					}
				} catch (error) {
					console.error("Failed to fetch orders", error);
				}
			};

			fetchOrders();
		}, [])
	);

	const renderOrderItem = ({ item }: { item: GroceryType }) => (
		<View style={styles.orderItem}>
			<Text style={styles.title}>{item.title}</Text>
			<Text style={styles.price}>{item.price} USD</Text>
		</View>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Your Orders</Text>
			{orders.length > 0 ? (
				<FlatList
					data={orders}
					renderItem={renderOrderItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			) : (
				<Text>You have no orders yet.</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
	},
	header: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	orderItem: {
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
		paddingVertical: 10,
	},
	title: {
		fontSize: 18,
	},
	price: {
		fontSize: 16,
		color: "#888",
	},
});

export default Orders;
