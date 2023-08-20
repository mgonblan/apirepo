const walletTransactionDb = require('../../../../data-access/walletTransactionDb');

const walletTransactionSchema = require('../../../../validation/schema/walletTransaction');

const createValidation = require('../../../../validation')(walletTransactionSchema.createSchema);
const updateValidation = require('../../../../validation')(walletTransactionSchema.updateSchema);
const filterValidation = require('../../../../validation')(walletTransactionSchema.filterValidationSchema);
const addWalletTransactionUsecase = require('../../../../use-case/walletTransaction/addWalletTransaction')({
  walletTransactionDb,
  createValidation 
});
const bulkInsertWalletTransactionUsecase = require('../../../../use-case/walletTransaction/bulkInsertWalletTransaction')({ walletTransactionDb });
const findAllWalletTransactionUsecase = require('../../../../use-case/walletTransaction/findAllWalletTransaction')({
  walletTransactionDb,
  filterValidation
});
const getWalletTransactionCountUsecase = require('../../../../use-case/walletTransaction/getWalletTransactionCount')({
  walletTransactionDb,
  filterValidation
});
const getWalletTransactionUsecase = require('../../../../use-case/walletTransaction/getWalletTransaction')({
  walletTransactionDb,
  filterValidation
});
const updateWalletTransactionUsecase = require('../../../../use-case/walletTransaction/updateWalletTransaction')({
  walletTransactionDb,
  updateValidation 
});
const partialUpdateWalletTransactionUsecase = require('../../../../use-case/walletTransaction/partialUpdateWalletTransaction')({ walletTransactionDb });
const bulkUpdateWalletTransactionUsecase = require('../../../../use-case/walletTransaction/bulkUpdateWalletTransaction')({ walletTransactionDb });
const softDeleteWalletTransactionUsecase = require('../../../../use-case/walletTransaction/softDeleteWalletTransaction')({ walletTransactionDb });
const softDeleteManyWalletTransactionUsecase = require('../../../../use-case/walletTransaction/softDeleteManyWalletTransaction')({ walletTransactionDb });
const deleteWalletTransactionUsecase = require('../../../../use-case/walletTransaction/deleteWalletTransaction')({ walletTransactionDb });
const deleteManyWalletTransactionUsecase = require('../../../../use-case/walletTransaction/deleteManyWalletTransaction')({ walletTransactionDb });

const walletTransactionController = require('./walletTransaction');

const addWalletTransaction = walletTransactionController.addWalletTransaction(addWalletTransactionUsecase);
const bulkInsertWalletTransaction = walletTransactionController.bulkInsertWalletTransaction(bulkInsertWalletTransactionUsecase);
const findAllWalletTransaction = walletTransactionController.findAllWalletTransaction(findAllWalletTransactionUsecase);
const getWalletTransactionCount = walletTransactionController.getWalletTransactionCount(getWalletTransactionCountUsecase);
const getWalletTransactionById = walletTransactionController.getWalletTransaction(getWalletTransactionUsecase);
const updateWalletTransaction = walletTransactionController.updateWalletTransaction(updateWalletTransactionUsecase);
const partialUpdateWalletTransaction = walletTransactionController.partialUpdateWalletTransaction(partialUpdateWalletTransactionUsecase);
const bulkUpdateWalletTransaction = walletTransactionController.bulkUpdateWalletTransaction(bulkUpdateWalletTransactionUsecase);
const softDeleteWalletTransaction = walletTransactionController.softDeleteWalletTransaction(softDeleteWalletTransactionUsecase);
const softDeleteManyWalletTransaction = walletTransactionController.softDeleteManyWalletTransaction(softDeleteManyWalletTransactionUsecase);
const deleteWalletTransaction = walletTransactionController.deleteWalletTransaction(deleteWalletTransactionUsecase);
const deleteManyWalletTransaction = walletTransactionController.deleteManyWalletTransaction(deleteManyWalletTransactionUsecase);

module.exports = {
  addWalletTransaction,
  bulkInsertWalletTransaction,
  findAllWalletTransaction,
  getWalletTransactionCount,
  getWalletTransactionById,
  updateWalletTransaction,
  partialUpdateWalletTransaction,
  bulkUpdateWalletTransaction,
  softDeleteWalletTransaction,
  softDeleteManyWalletTransaction,
  deleteWalletTransaction,
  deleteManyWalletTransaction,
};