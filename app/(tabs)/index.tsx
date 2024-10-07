import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { Image } from "expo-image";
import { Sizes } from "@/constants/Sizes";

export default function index() {
	async function fetchDishes() {
		await fetch("https://dummyjson.com/products/category/groceries")
			.then((res) => res.json())
			.then(console.log);

		// const sampleResponse = [
		// 	{
		// 		id: 16,
		// 		title: "Apple",
		// 		description:
		// 			"Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
		// 		category: "groceries",
		// 		price: 1.99,
		// 		discountPercentage: 1.97,
		// 		rating: 2.96,
		// 		stock: 9,
		// 		tags: ["fruits"],
		// 		sku: "QTROUV79",
		// 		weight: 8,
		// 		dimensions: {
		// 			width: 8.29,
		// 			height: 5.58,
		// 			depth: 12.41,
		// 		},
		// 		warrantyInformation: "2 year warranty",
		// 		shippingInformation: "Ships in 2 weeks",
		// 		availabilityStatus: "In Stock",
		// 		reviews: [
		// 			{
		// 				rating: 4,
		// 				comment: "Great product!",
		// 				date: "2024-05-23T08:56:21.620Z",
		// 				reviewerName: "Logan Lee",
		// 				reviewerEmail: "logan.lee@x.dummyjson.com",
		// 			},
		// 			{
		// 				rating: 4,
		// 				comment: "Great product!",
		// 				date: "2024-05-23T08:56:21.620Z",
		// 				reviewerName: "Elena Long",
		// 				reviewerEmail: "elena.long@x.dummyjson.com",
		// 			},
		// 			{
		// 				rating: 1,
		// 				comment: "Not as described!",
		// 				date: "2024-05-23T08:56:21.620Z",
		// 				reviewerName: "Grayson Coleman",
		// 				reviewerEmail: "grayson.coleman@x.dummyjson.com",
		// 			},
		// 		],
		// 		returnPolicy: "60 days return policy",
		// 		minimumOrderQuantity: 44,
		// 		meta: {
		// 			createdAt: "2024-05-23T08:56:21.620Z",
		// 			updatedAt: "2024-05-23T08:56:21.620Z",
		// 			barcode: "2517819903837",
		// 			qrCode: "https://assets.dummyjson.com/public/qr-code.png",
		// 		},
		// 		images: [
		// 			"https://cdn.dummyjson.com/products/images/groceries/Apple/1.png",
		// 		],
		// 		thumbnail:
		// 			"https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",
		// 	},
		// ];
	}

	// fetch dishes with useEffect

	return (
		<View>
			<Text>Hello</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		fontSize: Sizes.text.large,
		fontWeight: "bold",
		textAlign: "center",
	},

	form: {
		flexDirection: "column",
		backgroundColor: "#fff",
		padding: Sizes.margin.small,
	},

	label: {
		fontSize: Sizes.text.medium,
		marginTop: Sizes.margin.small,
		marginBottom: Sizes.margin.medium,
	},

	input: {
		padding: 4,
		width: "100%",
		borderWidth: 1,
	},

	donateBtn: {
		marginTop: Sizes.margin.medium,
	},
});
