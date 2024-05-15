const {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('./products')

describe('The Product Controller', () => {
  describe('the `addProduct` method', () => {
    test('should add a product and return its id if no error',  () => {
      // to do
    })
    test('should throw an error if something goes wrong', () => {
      // to do
    })
  })

  describe('the `getAllProducts` method', () => {
    test('should return a list of all products if no error', () => {
      // to do
    })
    test('should throw an error if something goes wrong', () => {
      // to do
    })
  })

  describe('the `getProduct` method', () => {
    test('should get one product by its id if no error', () => {
      // to do
    })
    test('should throw an error if something goes wrong', () => {
      // to do
    })
  })

  describe('the `updateProduct` method', () => {
    test('should update a product by its id if no error', () => {
      // to do
    })
    test('should throw an error if something goes wrong', () => {
      // to do
    })
  })

  describe('the `deleteProduct` method', () => {
    test('should delete a product using its id is no error', () => {
      // to do
    })
    test('should throw an error if something goes wrong', () => {
      // to do
    })
  })
})