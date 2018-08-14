import React from 'react'
import { Container, Grid, Input } from 'semantic-ui-react'
import RestaurantCard from './RestaurantCard';
import { API_KEY } from '../constants'
import axios from 'axios'

export default class Header extends React.Component {

  state = {
    restaurants: [
      {
        id: '124', // R.res_id
        title: 'Kanchan2 Cuisine 124', // name
        photo: 'http://placehold.it/250', //featured_image
        rating: 5, //user_rating.aggregate_rating
        serves: 'non veg', // cuisines
        opens: '12 AM', // is_delivering_now
      }
    ]
  }

  render() {
    return (
      <Container>
        <br />
        <Input icon='search' placeholder='Search...' fluid />
        <br />
        <Grid stackable columns={4}>
          {this.state.restaurants.map((restaurant, i) =>
            <Grid.Column key={i}>
              <RestaurantCard rest={restaurant.restaurant} />
            </Grid.Column>
          )}
        </Grid>
        <br />
      </Container>
    )
  }

  componentDidMount = () => {
    axios.get('https://developers.zomato.com/api/v2.1/search?entity_id=14&entity_type=city&count=20&sort=rating&order=desc', {
      headers: {
        "user-key": API_KEY
      }
    })
      .then((response) => {
        console.log(response.data.restaurants);
        this.setState({
          restaurants: response.data.restaurants
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
}