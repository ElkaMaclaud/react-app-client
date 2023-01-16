// /**
//  * @jest-environment-jsdom
//  */
// import React from "react";
// import { Dropdown } from "../Dropdown";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// import { shallow, configure } from 'enzyme';
// import { ExitStatus } from "typescript";

// configure({adapter: new Adapter()});

// describe('Dropdown', () => {
//     test('should render', () => {
//         const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
//         expect(wrapper).toBeDefined();
//         //console.log(wrapper.find('div.container').debug());
//         // console.log(window);
//         expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
//     })

//     test('should render (snapshot', () => {
//         const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)

//         expect(wrapper).toMatchSnapshot
//     })
// }) 