const feedbackFormEl = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  try {
    const formDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    if (formDataFromLS === null) {
      return;
    }

    formData = formDataFromLS;
    console.log(formData);

    for (const key in formDataFromLS) {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
    }
  } catch (error) {
    console.log(error);
  }
};

fillFormFields();

const onFormFieldChange = event => {
  const { target: formFieldEl } = event;
  const fieldValue = formFieldEl.value.trim();
  const fieldName = formFieldEl.name;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

feedbackFormEl.addEventListener('input', onFormFieldChange);

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const { currentTarget: formEl } = event;

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  formEl.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
