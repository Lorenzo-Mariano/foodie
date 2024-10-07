import React, { forwardRef } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GroceryItem as GroceryType } from "@/types/GroceryItem";
import { Image } from "expo-image";

type GroceryDetailsProps = {
	grocery: GroceryType;
	isVisible: boolean;
	onClose: () => void;
};

const GroceryDetails = forwardRef<BottomSheet, GroceryDetailsProps>(
	({ grocery, isVisible, onClose }, ref) => {
		return (
			<BottomSheet
				ref={ref} // Attach the ref here
				index={0}
				snapPoints={["50%", "90%"]}
				onClose={onClose}
				enablePanDownToClose={true}
			>
				<BottomSheetView style={styles.sheet}>
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
						<Button
							title="Order"
							onPress={() => {
								/* Handle order */
							}}
						/>
					</ScrollView>
				</BottomSheetView>
			</BottomSheet>
		);
	}
);

const styles = StyleSheet.create({
	sheet: {
		borderTopWidth: 1,
		borderTopColor: "#ddd",
	},
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
