export const errorHelper = (err) => {
  if (!err.response) return ['Error: Network Error'];

  if (err.response.data?.errors?.full_messages) return err.response.data.errors.full_messages;
  if (err.response.data?.errors) return err.response.data.errors;
  if (err.response.data?.error) return [err.response.data.error];
  if (err.response.data?.message) return [err.response.data.message];

  return ['Error: Network Error'];
};
