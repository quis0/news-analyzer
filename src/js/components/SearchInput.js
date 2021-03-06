export class SearchInput {
  constructor(callback, dataStorage) {
    this._form = document.querySelector('.search__form');
    this._checkInputValidity = this._checkInputValidity.bind(this);
    this._handlerInputForm = this._handlerInputForm.bind(this);
    this._callback = callback;
    this._dataStorage = dataStorage;
    this.setHandlers();
  }

  _isValidate(input) {
    input.setCustomValidity('');

    if (input.validity.tooShort || input.validity.tooLong) {
      input.setCustomValidity('Введите не менее 3 символов');
      return false;
    }

    return input.checkValidity();
  }

  _isFieldValid(input) {
    const errorElem = input.parentNode.querySelector(`#error-${input.id}`);

    const isValid = this._isValidate(input);

    errorElem.textContent = input.validationMessage;

    return isValid;
  }

  _isFormValid(form) {
    const inputs = [...form.elements];

    let isValid = true;

    inputs.forEach((input) => {
      if (input.type !== 'submit') {
        if (!this._isFieldValid(input)) isValid = false;
      }
    });

    return isValid;
  }

  setSubmitButtonState(state) {
    const button = this._form.button;
    if (state) {
      button.removeAttribute('disabled');
      button.classList.add(`search__button_status_valid`);
      button.classList.remove(`search__button_status_invalid`);
    } else {
      button.setAttribute('disabled', true);
      button.classList.add(`search__button_status_invalid`);
      button.classList.remove(`search__button_status_valid`);
    }
  }

  _checkInputValidity(evt) {
    evt.preventDefault();

    if (this._isFormValid(this._form)) {
      this._callback(this._form.text.value);
    }
  }

  _handlerInputForm(evt) {
    const inputs = [...evt.currentTarget.elements];

    if (evt.target.type !== 'submit') {
      this._isFieldValid(evt.target);

      if (inputs.every(this._isValidate)) {
        this.setSubmitButtonState(true);
      } else {
        this.setSubmitButtonState(false);
      }
    }
  };

  setHandlers() {
    this._form.addEventListener('submit', this._checkInputValidity);
    this._form.addEventListener('input', this._handlerInputForm)
  };

  render() {
    this._form.text.value = this._dataStorage.get('requestName');
  }
}
