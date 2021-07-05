import { ContentModel } from "../models";
import { sum } from "../views/sum";

export const hello = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `
      1 + 2 = ${sum(1,2)}
      Success at ${new Date()}`,
      input: event,
    }),
  };

  callback(null, response);
}

