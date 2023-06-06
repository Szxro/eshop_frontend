export const createExceptionError = function (name: string) {
  return class ExceptionFactory extends Error {
    constructor(message: string) {
      super(message); //message of the token
      this.name = name; // name of the exception itself
    }

    //can add more properties to make it more customable
  };
};
