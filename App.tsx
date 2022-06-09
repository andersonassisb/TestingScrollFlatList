import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const ARRAY_LENGTH = 50;
const ITEM_WIDTH = 50;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const listRef = React.useRef(null);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const numbers = React.useMemo(() => new Array(ARRAY_LENGTH), []);
  numbers.fill(0, 0, numbers.length);

  const getItemLayout = (_, index: number) => ({
    length: ARRAY_LENGTH,
    offset: ITEM_WIDTH * index,
    index,
  });

  // const scrollToIndex = React.useCallback(() => {
  //   listRef?.current?.scrollToIndex({animated: true, index: 16});
  // }, []);

  // React.useEffect(() => {
  //   scrollToIndex();
  // }, [scrollToIndex]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        ref={listRef}
        getItemLayout={getItemLayout}
        showsHorizontalScrollIndicator
        contentContainerStyle={styles.container}
        initialScrollIndex={15}
        data={numbers}
        horizontal
        renderItem={({item, index}) => (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: ITEM_WIDTH,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>
              {item} {index}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
});

export default App;
