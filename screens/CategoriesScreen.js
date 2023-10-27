import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { SafeAreaView } from "react-native-safe-area-context";

const renderCatetoryItem = function (itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoriesScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCatetoryItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;
