import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Sizes } from "@/constants/Sizes";

export default function Header({ title }: { title: string }) {
	return (
		<SafeAreaView
			style={{
				backgroundColor: "#fff",
				paddingBottom: Sizes.margin.small,
			}}
		>
			<Text
				style={{
					textAlign: "center",
					fontSize: Sizes.text.large,
					fontWeight: "bold",
				}}
			>
				{title}
			</Text>
		</SafeAreaView>
	);
}
