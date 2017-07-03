const path = require('path');
var api = require('../dist/main');
var grid = path.join(__dirname,  './components/grid/Grid.vue');
var button = path.join(__dirname,  './components/button/Button.vue');
var exampleVuex = path.join(__dirname,  './components/vuex/example.vue');
const expect = require("chai").expect;
let docGrid;
let docButton;

describe('tests grid', () => {
	docGrid = api.parse(grid);

	it('should return an object', () => {
		expect(docGrid).to.be.an('object')
	})

	it('The component name should be grid', () => {
		expect(docGrid.displayName).to.equal('grid');
	})

	it('should the component have tags', () => {
		expect(typeof docGrid['tags'] !== 'undefined').to.be.true
	})

	it('should the component have authors', () => {
		expect(typeof docGrid['tags']['author'] !== 'undefined').to.be.true
	})

	it('should the component have description', () => {
		expect(typeof docGrid['description'] !== 'undefined').to.be.true
	})

	it('should have methods', () => {
		expect(typeof docGrid['methods'] !== 'undefined').to.be.true
	})

	it('should the component have one method', () => {
		expect(Object.keys(docGrid['methods']).length).to.equal(1)
	})

	it('should have props', () => {
		expect(typeof docGrid['props'] !== 'undefined').to.be.true
	})

	it('should the component have version', () => {
		expect(typeof docGrid['tags']['version'] !== 'undefined').to.be.true
	})

	it('should the component have four props', () => {
		expect(Object.keys(docGrid['props']).length).to.equal(4)
	})

	it('should the prop msg have four tags', () => {
		expect(Object.keys(docGrid['props']['msg']['tags']).length).to.equal(4)
	})
})

describe('tests button', () => {
	docButton = api.parse(button);
	// console.log(JSON.stringify(docButton, null, 2));

	it('should return an object', () => {
		expect(docButton).to.be.an('object')
	})

	it('The component name should be buttonComponent', () => {
		expect(docButton.displayName).to.equal('buttonComponent');
	})

	it('The component should have a description', () => {
		expect(docButton.description).to.equal('This is an example of creating a reusable grid component and using it with external data.');
	})

	it('should the component have two tags', () => {
		expect(Object.keys(docButton['tags']).length).to.equal(2)
	})

	it('should the component have size prop default equal normal', () => {
		expect(docButton['props']['size']['defaultValue']['value']).to.equal('"normal"')
	})

	it('should the component have color prop default equal #333', () => {
		expect(docButton['props']['color']['defaultValue']['value']).to.equal('"#333"')
	})

	it('should the component have authors', () => {
		expect(typeof docButton['tags']['author'] !== 'undefined').to.be.true
	})

	it('should dont have methods', () => {
		expect(docButton['methods'].length).to.equal(0)
	})

	it('should have props', () => {
		expect(typeof docButton['props'] !== 'undefined').to.be.true
	})

	it('should the component have version', () => {
		expect(typeof docButton['tags']['version'] !== 'undefined').to.be.true
	})

	it('should the component have four props', () => {
		expect(Object.keys(docButton['props']).length).to.equal(4)
	})
})

describe('test example vuex', () =>{
	const docVuex = api.parse(exampleVuex);

	it('should return an object', () => {
		expect(docVuex).to.be.an('object')
	})

	it('The component name should be example', () => {
		expect(docVuex.displayName).to.equal('example');
	})

	it('The component should have a description', () => {
		expect(docVuex.description).to.equal('Partial mapping, object spread operator example');
	})
})
