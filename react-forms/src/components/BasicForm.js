import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value.trim())
  );

  const emailErrorText =
    "The entered email is invalid.\nPlease ensure your email only contains character/digit/underscore/dash.\nThere should contain '@' and a domain name follow after.\nLastly, dot ('.') cannot be the first or last character and dot ('.') will not come one after the other. ";

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            value={enteredFirstNameValue}
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">First name cannot be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={enteredLastNameValue}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Last name cannot be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={enteredEmailValue}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text" style={{ "white-space": "pre-line" }}>
            {emailErrorText}.
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
