const countryDb = require('../../../data-access/countryDb');
const pincodeDb = require('../../../data-access/pincodeDb');
const stateDb = require('../../../data-access/stateDb');

const countrySchema = require('../../../validation/schema/country');

const createValidation = require('../../../validation')(countrySchema.createSchema);
const updateValidation = require('../../../validation')(countrySchema.updateSchema);
const filterValidation = require('../../../validation')(countrySchema.filterValidationSchema);
const addCountryUsecase = require('../../../use-case/country/addCountry')({
  countryDb,
  createValidation 
});
const bulkInsertCountryUsecase = require('../../../use-case/country/bulkInsertCountry')({ countryDb });
const findAllCountryUsecase = require('../../../use-case/country/findAllCountry')({
  countryDb,
  filterValidation
});
const getCountryCountUsecase = require('../../../use-case/country/getCountryCount')({
  countryDb,
  filterValidation
});
const getCountryUsecase = require('../../../use-case/country/getCountry')({
  countryDb,
  filterValidation
});
const updateCountryUsecase = require('../../../use-case/country/updateCountry')({
  countryDb,
  updateValidation 
});
const partialUpdateCountryUsecase = require('../../../use-case/country/partialUpdateCountry')({ countryDb });
const bulkUpdateCountryUsecase = require('../../../use-case/country/bulkUpdateCountry')({ countryDb });
const softDeleteCountryUsecase = require('../../../use-case/country/softDeleteCountry')({
  countryDb,
  pincodeDb,
  stateDb
});
const softDeleteManyCountryUsecase = require('../../../use-case/country/softDeleteManyCountry')({
  countryDb,
  pincodeDb,
  stateDb
});
const deleteCountryUsecase = require('../../../use-case/country/deleteCountry')({
  countryDb,
  pincodeDb,
  stateDb
});
const deleteManyCountryUsecase = require('../../../use-case/country/deleteManyCountry')({
  countryDb,
  pincodeDb,
  stateDb
});

const countryController = require('./country');

const addCountry = countryController.addCountry(addCountryUsecase);
const bulkInsertCountry = countryController.bulkInsertCountry(bulkInsertCountryUsecase);
const findAllCountry = countryController.findAllCountry(findAllCountryUsecase);
const getCountryCount = countryController.getCountryCount(getCountryCountUsecase);
const getCountryById = countryController.getCountry(getCountryUsecase);
const updateCountry = countryController.updateCountry(updateCountryUsecase);
const partialUpdateCountry = countryController.partialUpdateCountry(partialUpdateCountryUsecase);
const bulkUpdateCountry = countryController.bulkUpdateCountry(bulkUpdateCountryUsecase);
const softDeleteCountry = countryController.softDeleteCountry(softDeleteCountryUsecase);
const softDeleteManyCountry = countryController.softDeleteManyCountry(softDeleteManyCountryUsecase);
const deleteCountry = countryController.deleteCountry(deleteCountryUsecase);
const deleteManyCountry = countryController.deleteManyCountry(deleteManyCountryUsecase);

module.exports = {
  addCountry,
  bulkInsertCountry,
  findAllCountry,
  getCountryCount,
  getCountryById,
  updateCountry,
  partialUpdateCountry,
  bulkUpdateCountry,
  softDeleteCountry,
  softDeleteManyCountry,
  deleteCountry,
  deleteManyCountry,
};