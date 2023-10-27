import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import Category from '../models/category';
interface CategoryItem {
  item: Category;
}

const renderCategoryItem = function ({item}: CategoryItem) {
  return <CategoryGridTile title={item.title} color={item.color} />;
};

const CategoriesScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default CategoriesScreen;
