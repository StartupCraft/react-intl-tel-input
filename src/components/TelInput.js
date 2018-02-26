import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from 'react-input-mask';

class TelInput extends Component {
  render() {
    return (
      <Input
        { ...this.props.inputProps }
        inputRef={ this.props.refCallback }
        type="tel"
        autoComplete={ this.props.autoComplete }
        className={ this.props.className }
        disabled={ this.props.disabled ? 'disabled' : false }
        readOnly={ this.props.readonly ? 'readonly' : false }
        name={ this.props.fieldName }
        id={ this.props.fieldId }
        value={ this.props.value }
        placeholder={ this.props.placeholder }
        onChange={ this.props.handleInputChange }
        onBlur={ this.props.handleOnBlur }
        autoFocus={ this.props.autoFocus }
        alwaysShowMask
        mask={ this.props.mask }
        maskChar="_"
      />
    );
  }
}

TelInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  fieldName: PropTypes.string,
  fieldId: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleOnBlur: PropTypes.func,
  autoFocus: PropTypes.bool,
  autoComplete: PropTypes.string,
  inputProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  refCallback: PropTypes.func.isRequired,
  mask: PropTypes.string,
};

export default TelInput;
