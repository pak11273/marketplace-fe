import { v4 } from 'uuid';

let key = process.env.PIXABAY_KEY;
let pixaAPI = `https://pixabay.com/api/${key}`;
console.log('key: ', pixaAPI);

export const products = [
  {
    id: v4(),
    item_picUrl:
      'https://post.healthline.com/wp-content/uploads/2020/09/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail-1-732x549.jpg',
    item_name: 'apples',
    item_price: '3.90',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://www.news-medical.net/image.axd?picture=2018%2F2%2Fbanana.jpg',
    item_name: 'bananas',
    item_price: '2.24',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg',
    item_name: 'oranges',
    item_price: '2.40',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'xyz',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'xyz',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'xyz',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'xyz',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'xyz',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
  {
    id: v4(),
    item_picUrl:
      'https://image.shutterstock.com/z/stock-photo-apple-grove-157171469.jpg',
    item_name: 'apples',
    item_price: '1.00',
    item_qty: 1,
    item_qty_measurement: 'lbs',
    item_category: 'fruits',
    owner_id: 'abc',
  },
];
