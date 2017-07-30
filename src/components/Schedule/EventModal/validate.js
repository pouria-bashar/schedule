export const validate = (values)  => (
  {
    name: [minimumLength(10)]
  }
)



const minimumLength = (length, message = 'Must be more than 1 character') => {
  return (value) => {
    if(value.length < length) {
      return message;
    }
  }
}
