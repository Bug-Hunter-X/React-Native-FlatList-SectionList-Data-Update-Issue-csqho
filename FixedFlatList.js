// BuggyFlatList.js
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const BuggyFlatList = () => {
  const [data, setData] = useState([{ key: 'a' }, { key: 'b' }]);

  const updateData = () => {
    // BAD: This doesn't create a new array reference
    data.push({ key: 'c' });
    setData(data); //FlatList doesn't rerender
  };

  return (
    <View>
      <FlatList data={data} renderItem={({ item }) => <Text>{item.key}</Text>} />
      <Button title="Update Data" onPress={updateData} />
    </View>
  );
};

// FixedFlatList.js
import React, { useState } from 'react';
import { FlatList, Text, View, Button } from 'react-native';

const FixedFlatList = () => {
  const [data, setData] = useState([{ key: 'a' }, { key: 'b' }]);

  const updateData = () => {
    // GOOD: Creates a new array reference
    setData([...data, { key: 'c' }]);
  };

  return (
    <View>
      <FlatList data={data} renderItem={({ item }) => <Text>{item.key}</Text>} />
      <Button title="Update Data" onPress={updateData} />
    </View>
  );
};

export default FixedFlatList; 