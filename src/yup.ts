import moment from "moment";
import * as yup from "yup";
import { validateUsername } from "./validations";

yup.addMethod(yup.string, "isValidUsername", function (message) {
  return this.test("check-if-username-is-valid", message, function (value) {
    const { path, createError } = this;

    if (!validateUsername(value)) {
      return createError({ path, message });
    }

    return true;
  });
});

yup.addMethod(yup.string, "isValidName", function (message) {
  return this.test("check-if-name-is-valid", message, function (value) {
    const { path, createError } = this;
    if (value?.length && !/^[a-zA-Z ]*$/.test(value)) {
      return createError({ path, message });
    }

    return true;
  });
});

yup.addMethod(yup.string, "isValidMobile", function (message) {
  return this.test(
    "check-if-mobile-number-is-valid",
    message,
    function (value) {
      const { path, createError } = this;
      if (value?.length && !/^[1-9]{3}-\d{3}-\d{4}$/.test(value)) {
        return createError({ path, message });
      }

      return true;
    }
  );
});

yup.addMethod(yup.string, "isValidEmail", function (message) {
  return this.test("check-if-email-is-valid", message, function (value) {
    const { path, createError } = this;
    if (
      value?.length &&
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
    ) {
      return createError({ path, message });
    }

    return true;
  });
});

yup.addMethod(yup.string, "isValidAadhar", function (message) {
  return this.test(
    "check-if-aadhar-number-is-valid",
    message,
    function (value) {
      const { path, createError } = this;
      if (value?.length && !/^\d{4}-\d{4}-\d{4}$/.test(value)) {
        return createError({ path, message });
      }

      return true;
    }
  );
});

yup.addMethod(yup.date, "dateRquired", function (message) {
  return this.test("check-if-date-is-given", message, function (value) {
    const { path, createError } = this;
    if (!moment(value).isValid()) {
      return createError({ path, message });
    }

    return true;
  });
});

yup.addMethod(yup.date, "isValidDate", function (message) {
  return this.test("check-if-date-is-valid", message, function (value) {
    const { path, createError } = this;
    if (!!value && !moment(value).isValid()) {
      return createError({ path, message });
    }

    return true;
  });
});

export default yup;
