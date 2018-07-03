const RoutesAdapter = (request, response) => {
  const req = request;
  const res = response;

  /**
   * objectJson
   * oprions {HTTP_STATUS_CODE: ?}
   * @param {*} objectJson
   * @param {*}
   */
  const asyncResponse = (objectJson = { status: 'success' }, options = { HTTP_STATUS_CODE: 200 }) => {
    return new Promise(() => {
      return res.status(options.HTTP_STATUS_CODE).json(objectJson);
    }).catch(err => {
      return res.errorResponse(500, 'internal error');
    });
  }

  const errorResponse = (statusCode = 500, message = 'error') => {
    return res.status(statusCode).json({ status: message });
  }

  return {
    asyncResponse: asyncResponse,
    errorResponse: errorResponse
  }
}

export default RoutesAdapter;
