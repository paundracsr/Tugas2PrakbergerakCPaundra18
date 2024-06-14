import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'TShirt',
        price: 179,
        photo:
          'https://cf.shopee.co.id/file/id-11134207-7r98y-lt4yy611tawpfe',
      },
      {
        id: 2,
        name: 'WorkShirt',
        price: 129,
        photo:
          'https://cf.shopee.co.id/file/id-11134207-7r98w-lq0mzbsu9idse8',
      },
      {
        id: 3,
        name: 'BoxyShirt',
        price: 149,
        photo:
          'https://cf.shopee.co.id/file/sg-11134201-7rd56-luelottfqyfd5a',
      },
      {
        id: 4,
        name: 'Tshirt',
        price: 119,
        photo:
          'https://cf.shopee.co.id/file/id-11134201-23020-07hfwzhm1ynv95',
      },
      {
        id: 5,
        name: 'Varsity',
        price: 579,
        photo:
          'https://cf.shopee.co.id/file/id-11134207-7qul8-lf4sem91doal99',
      },
      {
        id: 6,
        name: 'GorpCore',
        price: 159,
        photo:
          'https://cf.shopee.co.id/file/id-11134207-7r98u-lqz0nj00weg74d',
      },
      {
        id: 7,
        name: 'Hoodie',
        price: 169,
        photo:
          'https://cf.shopee.co.id/file/sg-11134201-22100-argbxou1x5hvc2',
      },
      {
        id: 8,
        name: 'Bomber',
        price: 159,
        photo:
          'https://cf.shopee.co.id/file/id-11134207-7r992-lqmu9ts0mhqo95',
      },
      
    ];
    setProducts(products);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 10 }}>
        <FlatList
          data={products}
          numColumns={2}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 24,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              ThriftShop
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: '#6c7de5',
                maxWidth: '45%',
                maxHeight: 400,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                padding: 20,
                borderRadius: 10,
                borderWidth: 2,
                shadowRadius: 5,
              }}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 90, height: 100, borderRadius: 5 }}
              />
              <Text style={{ paddingVertical: 20 }}>{item.name}</Text>
              <Text style={{ paddingBottom: 20 }}>Price: ${item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;
