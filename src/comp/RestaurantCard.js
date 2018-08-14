import React from 'react'
import { Card, Image, Rating } from 'semantic-ui-react'

export default class RestaurantCard extends React.Component {
  render() {
    return (
      <Card>
        <Image src='https://placehold.it/250' />
        <Card.Content>
          <Card.Header>{this.props.rest.title}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.rest.serves}</span>
          </Card.Meta>
          <Card.Description>Open from {this.props.rest.opens} to {this.props.rest.closes}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Rating maxRating={5} defaultRating={this.props.rest.rating} icon='star' size='large' />
        </Card.Content>
      </Card>
    )
  }
}