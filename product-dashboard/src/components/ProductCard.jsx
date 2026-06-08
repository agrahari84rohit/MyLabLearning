import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styles from '../styles/ProductCard.module.css'

export default function ProductCard({ product }) {
  const { name, price, inStock } = product

  return (
    <Card className={`${styles.card} ${!inStock ? styles.outOfStock : ''}`}>
      <CardContent>
        <Typography variant="h6" component="h3">
          {name}
        </Typography>
        <Typography className={styles.price} variant="subtitle1">
          ${price.toFixed(2)}
        </Typography>
        <Typography className={styles.status} color={inStock ? 'success.main' : 'error.main'}>
          {inStock ? 'In stock' : 'Out of stock'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" disabled={!inStock}>
          {inStock ? 'Buy now' : 'Notify me'}
        </Button>
      </CardActions>
    </Card>
  )
}
