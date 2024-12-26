import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedRestaurants from './components/FeaturedRestaurants'
import Categories from './components/Categories'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import QuickSearch from './components/QuickSearch'
import AuthPage from './components/Login'
import { AuthProvider } from './components/AuthContext'
import RestaurantsPage from './components/RestaurantsPage'
import RestaurantDetailPage from './components/RestaurantDetailPage'
import CoffeePage from './components/CoffeePage'
import DessertsPage from './components/DessetPage'
import HealthyOptionsPage from './components/HealthyFoods'
import PizzaPage from './components/PizzeriaPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Header/>
      <Hero/>
      <FeaturedRestaurants/>
      <Categories/>
      <QuickSearch/>
      <HowItWorks/>
      <Footer/>
      </>
    )
  },

  {
    path: '/coffeepage',
    element: (
      <>
      <Header/>
      <CoffeePage/>
      <Footer/>
      </>
    )
  },

  {
    path: '/pizzapage',
    element: (
      <>
      <Header/>
      <PizzaPage/>
      <Footer/>
      </>
    )
  },

  {
    path: '/dessertspage',
    element: (
      <>
      <Header/>
      <DessertsPage/>
      <Footer/>
      </>
    )
  },

  {
    path: '/healthypage',
    element: (
      <>
      <Header/>
      <HealthyOptionsPage/>
      <Footer/>
      </>
    )
  },

  {
    path: '/signup',
    element: (
      <>
      <AuthPage/>
      </>
    )
  },

  {
    path: '/restaurantpage',
    element: (
      <>
      <Header/>
      <RestaurantsPage/>
      <Footer/>
      </>
    )
  },

  {
    path: '/restaurantpage/:id',
    element: (
      <>
      <Header/>
      <RestaurantDetailPage/>
      <Footer/>
      </>
    )
  },
])

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App