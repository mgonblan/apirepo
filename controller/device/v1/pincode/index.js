const pincodeDb = require('../../../../data-access/pincodeDb');

const pincodeSchema = require('../../../../validation/schema/pincode');

const createValidation = require('../../../../validation')(pincodeSchema.createSchema);
const updateValidation = require('../../../../validation')(pincodeSchema.updateSchema);
const filterValidation = require('../../../../validation')(pincodeSchema.filterValidationSchema);
const addPincodeUsecase = require('../../../../use-case/pincode/addPincode')({
  pincodeDb,
  createValidation 
});
const bulkInsertPincodeUsecase = require('../../../../use-case/pincode/bulkInsertPincode')({ pincodeDb });
const findAllPincodeUsecase = require('../../../../use-case/pincode/findAllPincode')({
  pincodeDb,
  filterValidation
});
const getPincodeCountUsecase = require('../../../../use-case/pincode/getPincodeCount')({
  pincodeDb,
  filterValidation
});
const getPincodeUsecase = require('../../../../use-case/pincode/getPincode')({
  pincodeDb,
  filterValidation
});
const updatePincodeUsecase = require('../../../../use-case/pincode/updatePincode')({
  pincodeDb,
  updateValidation 
});
const partialUpdatePincodeUsecase = require('../../../../use-case/pincode/partialUpdatePincode')({ pincodeDb });
const bulkUpdatePincodeUsecase = require('../../../../use-case/pincode/bulkUpdatePincode')({ pincodeDb });
const softDeletePincodeUsecase = require('../../../../use-case/pincode/softDeletePincode')({ pincodeDb });
const softDeleteManyPincodeUsecase = require('../../../../use-case/pincode/softDeleteManyPincode')({ pincodeDb });
const deletePincodeUsecase = require('../../../../use-case/pincode/deletePincode')({ pincodeDb });
const deleteManyPincodeUsecase = require('../../../../use-case/pincode/deleteManyPincode')({ pincodeDb });

const pincodeController = require('./pincode');

const addPincode = pincodeController.addPincode(addPincodeUsecase);
const bulkInsertPincode = pincodeController.bulkInsertPincode(bulkInsertPincodeUsecase);
const findAllPincode = pincodeController.findAllPincode(findAllPincodeUsecase);
const getPincodeCount = pincodeController.getPincodeCount(getPincodeCountUsecase);
const getPincodeById = pincodeController.getPincode(getPincodeUsecase);
const updatePincode = pincodeController.updatePincode(updatePincodeUsecase);
const partialUpdatePincode = pincodeController.partialUpdatePincode(partialUpdatePincodeUsecase);
const bulkUpdatePincode = pincodeController.bulkUpdatePincode(bulkUpdatePincodeUsecase);
const softDeletePincode = pincodeController.softDeletePincode(softDeletePincodeUsecase);
const softDeleteManyPincode = pincodeController.softDeleteManyPincode(softDeleteManyPincodeUsecase);
const deletePincode = pincodeController.deletePincode(deletePincodeUsecase);
const deleteManyPincode = pincodeController.deleteManyPincode(deleteManyPincodeUsecase);

module.exports = {
  addPincode,
  bulkInsertPincode,
  findAllPincode,
  getPincodeCount,
  getPincodeById,
  updatePincode,
  partialUpdatePincode,
  bulkUpdatePincode,
  softDeletePincode,
  softDeleteManyPincode,
  deletePincode,
  deleteManyPincode,
};