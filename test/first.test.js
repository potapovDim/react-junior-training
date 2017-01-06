import React from 'react'
import {mount} from 'enzyme'
import {expect} from 'chai'

const StatelessComponent = ({title}) => (<h1>{title}</h1>)

class TestComponent extends React.Component {

    state = {
        name: null
    }
    render() {
        const {name} = this.state
        return (
            <div>
                <input style={{width: '100px', height:'20px'}} onChange={(event) => {
                    console.log(event.target.value)
                    this.setState({name: event.target.value})}
            }/>
                <StatelessComponent title={name} />
                <div>HELLO</div>
            </div>
        )
    }
}

describe('Initial test' , () => {
    it('value display on page', () => {
        const inputValue = 'test _ value'
        const wrapper = mount(<TestComponent test_props={"testProps"}/>)
        wrapper.find('input').simulate('change', {target: {value:inputValue}})
        expect(wrapper.state()).to.eql({name:inputValue})

        expect(wrapper.type()).to.equal(TestComponent)
        expect(wrapper.containsMatchingElement(
            <div>HELLO</div>
            )).to.equal(true)
    })
    it('TestComponent exist', () => {
        const wrapper = mount(<TestComponent test_props={"testProps"}/>)
        expect(wrapper.type()).to.equal(TestComponent)
    })
     it('Hello text exist', () => {
        const wrapper = mount(<TestComponent test_props={"testProps"}/>)
        expect(wrapper.html().includes('<div>HELLO</div>')).to.eql(true)
    })
    it('input exist', () => {
        const wrapper = mount(<TestComponent test_props={"testProps"}/>)
        expect(wrapper.find('input')).to.have.length(1)
    })
    it('input may have letters, numbers and symbols', () => {
        const wrapper = mount(<TestComponent test_props={"testProps"}/>)

        const inputNumber = '1234567890'
        wrapper.find('input').simulate('change', {target: {value:inputNumber}})
        expect(wrapper.state()).to.eql({name:inputNumber})

        const inputLetters = 'QWERTYqwerty'
        wrapper.find('input').simulate('change', {target: {value:inputLetters}})
        expect(wrapper.state()).to.eql({name:inputLetters})

        const inputLettersAndNumbers = 'QWERTY1234567890qwerty'
        wrapper.find('input').simulate('change', {target: {value:inputLettersAndNumbers}})
        expect(wrapper.state()).to.eql({name:inputLettersAndNumbers})

        const inputSymbols = '#$%^&*'
        wrapper.find('input').simulate('change', {target: {value: inputSymbols}})
        expect(wrapper.state()).to.eql({name: inputSymbols})

        const inputLettersAndNumbersAndSymbols = '#$%^&*(ghjkas432243)'
        wrapper.find('input').simulate('change', {target: {value: inputLettersAndNumbersAndSymbols}})
        expect(wrapper.state()).to.eql({name: inputLettersAndNumbersAndSymbols})
    })
})

