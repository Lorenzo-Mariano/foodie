import React, { forwardRef } from "react";
import { Text, StyleSheet, ScrollView, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GroceryItem as GroceryType } from "@/types/GroceryItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";

type GroceryDetailsProps = {
	grocery: GroceryType;
	isVisible: boolean;
	onClose: () => void;
};

const GroceryDetails = forwardRef<BottomSheet, GroceryDetailsProps>(
	({ grocery, isVisible, onClose }, ref) => {
		const addToCart = async () => {
			try {
				const currentCart = await AsyncStorage.getItem("cart");
				const cartItems = currentCart ? JSON.parse(currentCart) : [];
				cartItems.push(grocery);
				await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
				alert("Item added to cart!");
			} catch (error) {
				console.error("Failed to add item to cart", error);
			}
		};

		return (
			<BottomSheet
				ref={ref}
				index={0}
				snapPoints={["50%", "75%"]}
				onClose={onClose}
				enablePanDownToClose={true}
				style={{
					borderTopWidth: 1,
					borderTopColor: "#bdbdbd",
				}}
			>
				<BottomSheetView>
					<ScrollView contentContainerStyle={styles.content}>
						<Image
							source={{ uri: grocery.images[0] }}
							style={styles.image}
							contentFit="contain"
						/>
						<Text style={styles.title}>{grocery.title}</Text>
						<Text style={styles.description}>{grocery.description}</Text>
						<Text style={styles.stock}>Stock: {grocery.stock}</Text>
						<Text style={styles.rating}>Rating: {grocery.rating}</Text>
						<Button title="Order" onPress={addToCart} />
					</ScrollView>
				</BottomSheetView>
			</BottomSheet>
		);
	}
);

const styles = StyleSheet.create({
	content: {
		padding: 16,
	},
	image: {
		width: "100%",
		height: 200,
		marginBottom: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	description: {
		fontSize: 14,
		marginBottom: 10,
	},
	stock: {
		fontSize: 14,
		marginBottom: 10,
	},
	rating: {
		fontSize: 14,
		marginBottom: 20,
	},
	buttonContainer: {
		marginTop: 20,
	},
});

export default GroceryDetails;
