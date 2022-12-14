import React from 'react'

import Layout from '../src/components/layout/Layout'
import CartTable from '../src/components/cart/CartTable'
import { useSelector } from 'react-redux'
import NoCart from '../src/components/cart/NoCart'
import styles from '../styles/Cart.module.css'


const Cart = () => {
    const carts = useSelector((state) => state.carts)
    return (
        <Layout>
            <div className={styles.cartPageContainer}>
                {
                    carts.carts.length > 0 ? <CartTable></CartTable> : <NoCart></NoCart>
                }
            </div>
        </Layout>
    )
}

export default Cart