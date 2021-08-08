import { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class TutorMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing stackable fluid widths={7} size='large' inverted>
                    <Menu.Item
                        
                        name='class 1 to 5'
                        active={activeItem === 'class 1 to 5'}
                        as='a'
                        href='/tutors/1-5'
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='class 6 to 8'
                        as='a'
                        href='/tutors/6-8'
                        active={activeItem === 'class 6 to 8'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='class 9 to 10'
                        as='a'
                        href='/tutors/9-10'
                        active={activeItem === 'class 9 to 10'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='class 11 to 12'
                        as='a'
                        href='/tutors/11-12'
                        active={activeItem === 'class 11 to 12'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='programming'
                        as='a'
                        href='/tutors/programming'
                        active={activeItem === 'programming'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='iT'
                        as='a'
                        href='/tutors/IT'
                        active={activeItem === 'iT'}
                        onClick={this.handleItemClick}
                    />

                    <Menu.Item
                        name='languages'
                        as='a'
                        href='/tutors/languages'
                        active={activeItem === 'languages'}
                        onClick={this.handleItemClick}
                    />
                </Menu>


            </div>
        )
    }
}
