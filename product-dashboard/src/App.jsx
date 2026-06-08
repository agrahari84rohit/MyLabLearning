import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ProductList from './components/ProductList.jsx'

export default function App() {
  const products = [
    { id: 'prod-1', name: 'Wireless Keyboard', price: 49.99, inStock: true },
    { id: 'prod-2', name: 'Bluetooth Speaker', price: 79.95, inStock: false },
    { id: 'prod-3', name: 'Laptop Stand', price: 29.99, inStock: true },
    { id: 'prod-4', name: 'USB-C Hub', price: 39.5, inStock: false },
  ]

  return (
    <Box
      sx={{
        maxWidth: 960,
        mx: 'auto',
        p: { xs: 2, sm: 4 },
        minHeight: '100vh',
        bgcolor: '#f4f6fb',
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Product Dashboard
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Browse available products and see which items are currently in stock.
      </Typography>
      <ProductList products={products} />
    </Box>
  )
}
