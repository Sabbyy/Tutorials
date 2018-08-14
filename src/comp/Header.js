import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class Header extends Component {
  state = {
    activeItem: 'restaurants'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
        <br />
        <Menu inverted>
          <Menu.Item color='red' name='restaurants' active={activeItem === 'restaurants'} onClick={this.handleItemClick}>
            Restaurants
          </Menu.Item>
          <Menu.Item name='reviews' active={activeItem === 'reviews'} onClick={this.handleItemClick}>
            Reviews
        </Menu.Item>

          <Menu.Item
            position='right'
            name='categories'
            active={activeItem === 'categories'}
            onClick={this.handleItemClick}
          >
            Categories
        </Menu.Item>
        </Menu>
      </Container>
    )
  }
}
