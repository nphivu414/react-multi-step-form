import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];

function ProductDetails() {
  return (
    <List disablePadding>
      {products.map((product) => (
        <ListItem key={product.name}>
          <ListItemText primary={product.name} secondary={product.desc} />
          <Typography variant="body2">{product.price}</Typography>
        </ListItem>
      ))}
      <ListItem>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1">$34.06</Typography>
      </ListItem>
    </List>
  );
}

export default ProductDetails;
