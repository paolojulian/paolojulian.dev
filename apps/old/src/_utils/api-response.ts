import { NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IAPIResponse<Data, Error = null | any> {
  ok: boolean;
  data: Data
  error?: Error
}

function APIResponseOK<Data>(data: Data): IAPIResponse<Data, null> {
  return {
    ok: true,
    data
  }
}

function APIResponseError<Error>(error: Error): IAPIResponse<null, Error> {
  return {
    ok: false,
    data: null,
    error
  }
}

export function methodNotAllowed(res: NextApiResponse) {
  return res.status(405).json({ message: 'Method not allowed ' })
}


export const APIResponse = {
  ok: APIResponseOK,
  error: APIResponseError
}