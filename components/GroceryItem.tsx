// components/GroceryItem.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { GroceryItem as GroceryType } from "@/types/GroceryItem"; // Adjust the import path if necessary

const GroceryItem = ({
	item,
	onPress,
}: {
	item: GroceryType;
	onPress: () => void;
}) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Image
				source={{ uri: item.thumbnail }}
				style={styles.image}
				contentFit="scale-down"
			/>
			<View style={styles.details}>
				<Text style={styles.title}>{item.title}</Text>
				<Text>{item.price} USD</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 5,
		padding: 10,
		backgroundColor: "#fff",
	},
	image: {
		width: "100%",
		height: 100, // Set a specific height for the image
		borderRadius: 5,
	},
	details: {
		marginTop: 10,
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default GroceryItem;
