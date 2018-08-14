import React from 'react'
import { Container, Grid, Input } from 'semantic-ui-react'
import RestaurantCard from './RestaurantCard';

export default class Header extends React.Component {

  state = {
    restaurants: [
      {
        id: '124',
        title: 'Kanchan2 Cuisine 124',
        photo: 'http://placehold.it/250',
        rating: 5,
        serves: 'non veg',
        opens: '12 AM',
        closes: '12 PM',
      },
      {
        id: '125',
        title: 'Kanchan5 Cuisine 125',
        photo: 'http://placehold.it/250',
        rating: 2.5,
        serves: 'veg and non veg',
        opens: '12 AM',
        closes: '11 PM',
      },
      {
        id: '126',
        title: 'Kanchan Cuisine 126',
        photo: 'http://placehold.it/250',
        rating: 2.5,
        serves: 'veg and non veg',
        opens: '12 AM',
        closes: '12 PM',
      },
      {
        id: '127',
        title: 'Kanchan Cuisine 127',
        photo: 'http://placehold.it/250',
        rating: 2.5,
        serves: 'veg and non veg',
        opens: '12 AM',
        closes: '12 PM',
      },
      {
        id: '128',
        title: 'Kanchan Cuisine 128',
        photo: 'http://placehold.it/250',
        rating: 3.5,
        serves: 'veg and non veg',
        opens: '12 AM',
        closes: '12 PM',
      },
      {
        id: '129',
        title: 'Kanchan Cuisine 129',
        photo: 'http://placehold.it/250',
        rating: 2.5,
        serves: 'veg and non veg',
        opens: '12 AM',
        closes: '12 PM',
      },
      {
        id: '110',
        title: 'Kanchan Cuisine 110',
        photo: 'http://placehold.it/250',
        rating: 1.5,
        serves: 'veg and non veg',
        opens: '1 AM',
        closes: '12 PM',
      },
      {
        id: '1231',
        title: 'Kanchan Cuisine 231',
        photo: 'http://placehold.it/250',
        rating: 2.5,
        serves: 'non veg',
        opens: '12 AM',
        closes: '12 PM',
      },
      {
        id: '1232',
        title: 'Kanchan Cuisine 232',
        photo: 'http://placehold.it/250',
        rating: 2.5,
        serves: 'veg and non veg',
        opens: '12 AM',
        closes: '12 PM',
      },
    ]
  }

  render() {
    return (
      <Container>
        <br />
        <Input icon='search' placeholder='Search...' fluid />
        <br />
        <Grid stackable columns={4}>
          {this.state.restaurants.map((restaurant) =>
            <Grid.Column key={restaurant.id}>
              <RestaurantCard
                rest={restaurant}
              />
            </Grid.Column>
          )}
        </Grid>
        <br />
      </Container>
    )
  }
}