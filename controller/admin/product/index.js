const productDb = require('../../../data-access/productDb');

const productSchema = require('../../../validation/schema/product');

const createValidation = require('../../../validation')(productSchema.createSchema);
const updateValidation = require('../../../validation')(productSchema.updateSchema);
const filterValidation = require('../../../validation')(productSchema.filterValidationSchema);
const addProductUsecase = require('../../../use-case/product/addProduct')({
  productDb,
  createValidation 
});
const bulkInsertProductUsecase = require('../../../use-case/product/bulkInsertProduct')({ productDb });
const findAllProductUsecase = require('../../../use-case/product/findAllProduct')({
  productDb,
  filterValidation
});
const getProductCountUsecase = require('../../../use-case/product/getProductCount')({
  productDb,
  filterValidation
});
const getProductUsecase = require('../../../use-case/product/getProduct')({
  productDb,
  filterValidation
});
const updateProductUsecase = require('../../../use-case/product/updateProduct')({
  productDb,
  updateValidation 
});
const partialUpdateProductUsecase = require('../../../use-case/product/partialUpdateProduct')({ productDb });
const bulkUpdateProductUsecase = require('../../../use-case/product/bulkUpdateProduct')({ productDb });
const softDeleteProductUsecase = require('../../../use-case/product/softDeleteProduct')({ productDb });
const softDeleteManyProductUsecase = require('../../../use-case/product/softDeleteManyProduct')({ productDb });
const deleteProductUsecase = require('../../../use-case/product/deleteProduct')({ productDb });
const deleteManyProductUsecase = require('../../../use-case/product/deleteManyProduct')({ productDb });

const productController = require('./product');

const addProduct = productController.addProduct(addProductUsecase);
const bulkInsertProduct = productController.bulkInsertProduct(bulkInsertProductUsecase);
const findAllProduct = productController.findAllProduct(findAllProductUsecase);
const getProductCount = productController.getProductCount(getProductCountUsecase);
const getProductById = productController.getProduct(getProductUsecase);
const updateProduct = productController.updateProduct(updateProductUsecase);
const partialUpdateProduct = productController.partialUpdateProduct(partialUpdateProductUsecase);
const bulkUpdateProduct = productController.bulkUpdateProduct(bulkUpdateProductUsecase);
const softDeleteProduct = productController.softDeleteProduct(softDeleteProductUsecase);
const softDeleteManyProduct = productController.softDeleteManyProduct(softDeleteManyProductUsecase);
const deleteProduct = productController.deleteProduct(deleteProductUsecase);
const deleteManyProduct = productController.deleteManyProduct(deleteManyProductUsecase);

module.exports = {
  addProduct,
  bulkInsertProduct,
  findAllProduct,
  getProductCount,
  getProductById,
  updateProduct,
  partialUpdateProduct,
  bulkUpdateProduct,
  softDeleteProduct,
  softDeleteManyProduct,
  deleteProduct,
  deleteManyProduct,
};