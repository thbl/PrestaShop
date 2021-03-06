require('module-alias/register');
const BOBasePage = require('@pages/BO/BObasePage');

module.exports = class productSettings extends BOBasePage {
  constructor(page) {
    super(page);

    this.pageTitle = 'Product Settings •';
    this.successfulUpdateMessage = 'Update successful';

    // Selectors
    // Products general form
    this.productGeneralForm = '#configuration_fieldset_products';
    this.switchCatalogModeLabel = 'label[for=\'form_general_catalog_mode_%TOGGLE\']';
    this.switchShowPricesLabel = 'label[for=\'form_general_catalog_mode_with_prices_%TOGGLE\']';
    this.maxSizeShortDescriptionInput = '#form_general_short_description_limit';
    this.newDaysNumberInput = '#form_general_new_days_number';
    this.switchForceUpdateFriendlyURLLabel = 'label[for=\'form_general_force_friendly_url_%TOGGLE\']';
    this.quantityDiscountBasedOnSelect = '#form_general_quantity_discount';
    this.switchDefaultActivationStatusLabel = 'label[for=\'form_general_default_status_%TOGGLE\']';
    this.saveProductGeneralFormButton = `${this.productGeneralForm} .card-footer button`;
    // Product page selectors
    this.productPageForm = '#configuration_fieldset_fo_product_page';
    this.switchDisplayAvailableQuantities = 'label[for=\'form_page_display_quantities_%TOGGLE\']';
    this.remainingQuantityInput = '#form_page_display_last_quantities';
    this.displayUnavailableAttributesLabel = 'label[for=\'form_page_display_unavailable_attributes_%TOGGLE\']';
    this.saveProductPageFormButton = `${this.productPageForm} .card-footer button`;
  }

  /*
    Methods
  */

  /**
   * Enable/disable catalog mode
   * @param toEnable, true to enable and false to disable
   * @return {Promise<string>}
   */
  async changeCatalogModeStatus(toEnable = true) {
    await this.waitForSelectorAndClick(this.switchCatalogModeLabel.replace('%TOGGLE', toEnable ? 1 : 0));
    await this.clickAndWaitForNavigation(this.saveProductGeneralFormButton);
    return this.getTextContent(this.alertSuccessBlock);
  }

  /**
   * Enable/disable show prices
   * @param toEnable, true to enable and false to disable
   * @return {Promise<string>}
   */
  async setShowPricesStatus(toEnable = true) {
    await this.waitForSelectorAndClick(this.switchShowPricesLabel.replace('%TOGGLE', toEnable ? 1 : 0));
    await this.clickAndWaitForNavigation(this.saveProductGeneralFormButton);
    return this.getTextContent(this.alertSuccessBlock);
  }

  /**
   * Update number of days
   * @param numberOfDays
   * @returns {Promise<string|*>}
   */
  async updateNumberOfDays(numberOfDays) {
    await this.setValue(this.newDaysNumberInput, numberOfDays.toString());
    await this.clickAndWaitForNavigation(this.saveProductGeneralFormButton);
    return this.getTextContent(this.alertSuccessBlock);
  }

  /**
   * Update max size of short description
   * @param size
   * @returns {Promise<string|*>}
   */
  async UpdateMaxSizeOfSummary(size) {
    await this.setValue(this.maxSizeShortDescriptionInput, size.toString());
    await this.clickAndWaitForNavigation(this.saveProductGeneralFormButton);
    return this.getTextContent(this.alertSuccessBlock);
  }

  /**
   * Enable/Disable force update of friendly URL
   * @param toEnable
   * @returns {Promise<string>}
   */
  async setForceUpdateFriendlyURLStatus(toEnable = true) {
    await this.waitForSelectorAndClick(this.switchForceUpdateFriendlyURLLabel.replace('%TOGGLE', toEnable ? 1 : 0));
    await this.clickAndWaitForNavigation(this.saveProductGeneralFormButton);
    return this.getTextContent(this.alertSuccessBlock);
  }

  /**
   * Change default activation status
   * @param toEnable
   * @returns {Promise<string>}
   */
  async setDefaultActivationStatus(toEnable = true) {
    await this.waitForSelectorAndClick(this.switchDefaultActivationStatusLabel.replace('%TOGGLE', toEnable ? 1 : 0));
    await this.clickAndWaitForNavigation(this.saveProductGeneralFormButton);
    return this.getTextContent(this.alertSuccessBlock);
  }

  /**
   * Choose quantity discounts based on
   * @param basedOn
   * @returns {Promise<string>}
   */
  async chooseQuantityDiscountsBasedOn(basedOn) {
    await this.selectByVisibleText(this.quantityDiscountBasedOnSelect, basedOn);
    await this.clickAndWaitForNavigation(this.saveProductGeneralFormButton);
    return this.getTextContent(this.alertSuccessBlock);
  }

  /**
   * Enable/ Disable display available quantities
   * @param toEnable
   * @returns {Promise<string|*>}
   */
  async setDisplayAvailableQuantitiesStatus(toEnable = true) {
    await this.waitForSelectorAndClick(this.switchDisplayAvailableQuantities.replace('%TOGGLE', toEnable ? 1 : 0));
    await this.clickAndWaitForNavigation(this.saveProductPageFormButton);
    return this.getTextContent(this.alertSuccessBlock);
  }

  /**
   * Set display remaining quantities
   * @param quantity
   * @returns {Promise<string>}
   */
  async setDisplayRemainingQuantities(quantity) {
    await this.setValue(this.remainingQuantityInput, quantity.toString());
    await this.clickAndWaitForNavigation(this.saveProductPageFormButton);
    return this.getTextContent(this.alertSuccessBlock);
  }

  /**
   * Set display unavailable product attributes
   * @param toEnable
   * @returns {Promise<string>}
   */
  async setDisplayUnavailableProductAttributesStatus(toEnable = true) {
    await this.waitForSelectorAndClick(this.displayUnavailableAttributesLabel.replace('%TOGGLE', toEnable ? 1 : 0));
    await this.clickAndWaitForNavigation(this.saveProductPageFormButton);
    return this.getTextContent(this.alertSuccessBlock);
  }
};
