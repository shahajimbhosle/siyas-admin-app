import { Field, getIn } from "formik";
import { FormFieldError } from "../styled-components";
import FormGroup from "rsuite/esm/FormGroup";
import FormControlLabel from "rsuite/esm/FormControlLabel";
import FormHelpText from "rsuite/esm/FormHelpText";
import FormControl from "rsuite/esm/FormControl";

const FormikControl = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  onChange = () => {},
  onBlur = () => {},
  label,
  helpText,
  ...rest
}) => {
  const {
    onChange: formikOnChange,
    onBlur: formikOnBlur,
    name,
    ...restFields
  } = field;

  const customOnChange = (e) => {
    setFieldValue(name, e);
    formikOnChange(e);
    onChange(e);
  };

  const customOnBlur = (e) => {
    formikOnBlur(e);
    onBlur(e);
  };

  const textFieldProps = {
    name,
    onChange: customOnChange,
    onBlur: customOnBlur,
    ...restFields,
    ...rest,
  };

  return (
    <FormGroup>
      {label && <FormControlLabel>{label}</FormControlLabel>}
      <FormControl {...textFieldProps} />
      {helpText && <FormHelpText>{helpText}</FormHelpText>}
      {getIn(touched, name) && getIn(errors, name) && (
        <FormFieldError>{getIn(errors, name)}</FormFieldError>
      )}
    </FormGroup>
  );
};

const FormikFieldControl = (props) => {
  return <Field component={FormikControl} {...props} />;
};

export default FormikFieldControl;
