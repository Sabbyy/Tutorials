import React from 'react'
import { Card, Image } from 'semantic-ui-react'
/*
{
  id: '124', // R.res_id
  title: 'Kanchan2 Cuisine 124', // name
  photo: 'http://placehold.it/250', //featured_image
  rating: 5, //user_rating.aggregate_rating
  serves: 'non veg', // cuisines
  opens: '12 AM', // is_delivering_now
}
*/
export default class RestaurantCard extends React.Component {
  render() {
    if (this.props.rest) {
      console.log('rest:', this.props.rest)
      return (
        <Card>
          <Image src={this.props.rest.thumb ? this.props.rest.thumb : 'https://placehold.it/250x200'} />
          <Card.Content>
            <Card.Header>{this.props.rest.name}</Card.Header>
            <Card.Meta>
              <span className='date'>{this.props.rest.cuisines}</span>
            </Card.Meta>
            <Card.Description>{this.props.rest.is_delivering_now ? 'Open Now' : 'Closed'}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            {/* <Rating maxRating={5} defaultRating={this.props.rest.user_rating.aggregate_rating} icon='star' size='large' /> */}
          </Card.Content>
        </Card>
      )
    }
    else
      return <div>Loading data..</div>
  }
}