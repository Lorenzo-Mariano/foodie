import React, { useRef, useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import GroceryItem from "@/components/GroceryItem";
import GroceryDetails from "@/components/GroceryDetails";
import { GroceryItem as GroceryType } from "@/types/GroceryItem";
import BottomSheet from "@gorhom/bottom-sheet";

const Index = () => {
	const [groceries, setGroceries] = useState<GroceryType[]>([]);
	const [selectedGrocery, setSelectedGrocery] = useState<GroceryType | null>(
		null
	);
	const bottomSheetRef = useRef<BottomSheet>(null);

	useEffect(() => {
		async function fetchGroceries() {
			try {
				const response = await fetch(
					"https://dummyjson.com/products/category/groceries"
				);
				const groceriesJson = await response.json();
				setGroceries(groceriesJson.products);
			} catch (error) {
				console.error("Failed to fetch groceries", error);
			}
		}

		fetchGroceries();
	}, []);

	const handlePress = (grocery: GroceryType) => {
		setSelectedGrocery(grocery);
		bottomSheetRef.current?.expand();
	};

	const renderRow = ({ item }: { item: GroceryType[] }) => (
		<View style={styles.row}>
			{item.map((grocery) => (
				<View style={styles.groceryContainer} key={grocery.id}>
					<GroceryItem item={grocery} onPress={() => handlePress(grocery)} />
				</View>
			))}
		</View>
	);

	const groupedGroceries = [];
	for (let i = 0; i < groceries.length; i += 2) {
		groupedGroceries.push(groceries.slice(i, i + 2));
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={groupedGroceries}
				renderItem={renderRow}
				keyExtractor={(item, index) => index.toString()}
			/>

			{selectedGrocery && (
				<GroceryDetails
					grocery={selectedGrocery}
					ref={bottomSheetRef}
					isVisible={!!selectedGrocery}
					onClose={() => {
						setSelectedGrocery(null);
						bottomSheetRef.current?.close();
					}}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: "#fff",
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 16,
	},
	groceryContainer: {
		width: "48%",
	},
});

export default Index;
