import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import ProductCard from './ProductCard.jsx'

export default function ProductList({ products }) {
  const hasAvailable = products.some((product) => product.inStock)

  return (
    <>
      <Typography variant="h5" component="h2" gutterBottom>
        Available Products
      </Typography>
      {!hasAvailable ? (
        <Typography variant="body1" color="text.secondary">
          All products are currently out of stock.
        </Typography>
      ) : null}
      <Stack spacing={2}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Stack>
    </>
  )
}
