import { View, Text, StyleSheet, FlatList, Alert, Button } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Sizes } from "@/constants/Sizes";

export default function Donations() {
	const [donations, setDonations] = useState([]);

	const loadDonations = async () => {
		try {
			const storedDonations = await AsyncStorage.getItem("donations");
			if (storedDonations) {
				setDonations(JSON.parse(storedDonations));
			}
		} catch (error) {
			Alert.alert("Error", "Failed to load donations");
		}
	};

	const handleRefresh = () => {
		loadDonations();
	};

	useEffect(() => {
		loadDonations();
	}, []);

	const renderDonation = ({
		item,
	}: {
		item: { id: string; name: string; amount: number };
	}) => (
		<View style={styles.donationItem}>
			<Text>
				{item.name}: PHP {item.amount.toFixed(2)}
			</Text>
		</View>
	);

	return (
		<View style={{ padding: Sizes.margin.small }}>
			<Text style={styles.header}>Donations</Text>
			<FlatList
				data={donations}
				renderItem={renderDonation}
				keyExtractor={(item) => item.id}
				style={styles.donationsList}
			/>
			<Button title="Refresh Donations" onPress={handleRefresh} />
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		fontSize: Sizes.text.large,
		fontWeight: "bold",
		textAlign: "center",
	},

	donationsList: {
		marginTop: Sizes.margin.large,
		marginBottom: Sizes.margin.large,
	},

	donationItem: {
		padding: Sizes.margin.small,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
});
