import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GroceryItem as GroceryType } from "@/types/GroceryItem";
import { useFocusEffect } from "expo-router";

const Cart = () => {
	const [cartItems, setCartItems] = useState<GroceryType[]>([]);

	useFocusEffect(
		React.useCallback(() => {
			const fetchCartItems = async () => {
				try {
					const storedItems = await AsyncStorage.getItem("cart");
					if (storedItems) {
						setCartItems(JSON.parse(storedItems));
					}
				} catch (error) {
					console.error("Failed to fetch cart items", error);
				}
			};

			fetchCartItems();
		}, [])
	);

	const removeItem = async (id: number) => {
		const updatedItems = cartItems.filter((item) => item.id !== id);
		setCartItems(updatedItems);
		await AsyncStorage.setItem("cart", JSON.stringify(updatedItems));
	};

	const finalizeOrder = () => {
		Alert.alert("Order finalized!", "Thank you for your purchase!");
		setCartItems([]);
	};

	const renderItem = ({ item }: { item: GroceryType }) => (
		<View style={styles.itemContainer}>
			<Text style={styles.title}>{item.title}</Text>
			<Button title="Remove" onPress={() => removeItem(item.id)} />
		</View>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Your Cart</Text>
			{cartItems.length === 0 ? (
				<Text>No items in your cart.</Text>
			) : (
				<FlatList
					data={cartItems}
					renderItem={renderItem}
					keyExtractor={(item) => item.id.toString()}
				/>
			)}
			<Button title="Finalize Order" onPress={finalizeOrder} />
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
	itemContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
	title: {
		fontSize: 18,
	},
});

export default Cart;
