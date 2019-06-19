import React from 'react'
import { shallow,mount } from 'enzyme'
import PhoneBook, { MoreDetails } from './PhoneBook'
import { MemoryRouter } from 'react-router'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'

// jest.mock('react-router-dom')

describe('phoneBook', () => {
  it('displays two rows of name', () => {
    const contactValues = [
      {name: 'Peter', phoneNumber: 9920826255},
      {name: 'Leo', phoneNumber: 8369576889},
    ]
    const wrapper = shallow(<PhoneBook contactValues={contactValues}/>)
    expect(wrapper.find('.contact')).toHaveLength(2)

  })

  it('should render MoreDetails component when routed to it', () => {
    const contactValues = [
      {
        name: 'Peter',
        phoneNumber: 9920826255,
      },
      {
        name: 'Leo',
        phoneNumber: 8369576889,
      },
      {
        name: 'Connie',
        phoneNumber: 9920520220,
      },
    ]
    const component = mount(
      <MemoryRouter initialEntries={['/more-details/Peter']}>
        <PhoneBook contactValues={contactValues}/>
      </MemoryRouter>)

    // let link = component.find(Link)

    // link.first().simulate('click')

    let moreDetails = component.find(MoreDetails)

    // console.log(component.html())
    // console.log(component.debug())
    expect(moreDetails).toHaveLength(1)
  })

})