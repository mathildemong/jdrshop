const {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('./products')

const Product = require('../models/products')
const mockInsertOne = jest.fn()
jest.mock('mongodb', () => {
  return {
    Db: jest.fn().mockImplementation(() => ({
      collection : () => {
        return {
          insertOne: mockInsertOne
        }
      }
    }))
  }
})

const mockErrorLog = jest.spyOn(console, 'error')
const jsonMock = jest.fn()
const statusMock = jest.fn().mockReturnThis()

describe('The Product Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  describe('the `addProduct` method', () => {
    const request = {
      body: {
        name: 'Test Product Name',
        category: 'Test Category'
      }
    }
    test('should add a product and return its id if no error',  async () => {
      mockInsertOne.mockResolvedValue(({
        _id: 42
      }))
      const mockResponse = {
        json: jsonMock,
        status: statusMock
      }
      await addProduct(request, mockResponse)
      expect(jsonMock).toHaveBeenCalledWith({
        _id: 42
      })
      expect(mockInsertOne).toHaveBeenCalledWith(expect.any(Object))
    })
    test('should log an error if something goes wrong and not throw',async  () => {
      mockInsertOne.mockRejectedValue(new Error('Uh-oh'))      
      const mockResponse = {
        json: jsonMock,
        status: statusMock
      }
      await addProduct(request, mockResponse)
      expect(statusMock).toHaveBeenCalledWith(500)
      expect(jsonMock).toHaveBeenCalledWith('Uh-oh')
      expect(mockErrorLog).toHaveBeenCalled()
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