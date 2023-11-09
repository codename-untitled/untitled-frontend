/* eslint-disable @typescript-eslint/no-explicit-any */

import { APIError } from 'helpers/api.error';

export type APIErrorType = typeof APIError;

class API {
  private baseURL: string;

  private token?: string | null;

  private RequestError: APIErrorType;

  constructor(baseURL: string, RequestError: APIErrorType) {
    this.baseURL = baseURL;
    this.token = null;
    this.RequestError = RequestError;
  }

  private getURL(path: string) {
    return `${this.baseURL}/${path}`;
  }

  private get headers() {
    return {
      Authorization: `Bearer ${this.token}`,
      credentials: 'include',
      'Content-Type': 'application/json',
    };
  }

  static async handleResponse(response: Response, RequestError: APIErrorType) {
    if (response.ok) return response.json();

    const { status } = response;
    const responseData = await response.json();

    const errorMessage = responseData.message || 'Network Error';
    const error = new RequestError(errorMessage, status, responseData);

    throw error;
  }

  authorize = (token?: string | null) => {
    this.token = token;
  };

  delete = async (url: string) => {
    const options = {
      method: 'DELETE',
      headers: this.headers,
    };

    const response = await fetch(url, options);

    return API.handleResponse(response, this.RequestError);
  };

  get = async (path: string, signal?: AbortSignal) => {
    const options = {
      signal,
      method: 'GET',
      headers: this.headers,
    };

    const response = await fetch(this.getURL(path), options);

    return API.handleResponse(response, this.RequestError);
  };

  patch = async (path: string, body: Record<string, any>) => {
    const options = {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body),
    };

    const response = await fetch(this.getURL(path), options);

    return API.handleResponse(response, this.RequestError);
  };

  post = async (path: string, body: Record<string, any>) => {
    const options = {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    };

    const response = await fetch(this.getURL(path), options);

    return API.handleResponse(response, this.RequestError);
  };

  postFile = async (path: string, body: FormData) => {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
      body,
    };

    const response = await fetch(this.getURL(path), options);

    return API.handleResponse(response, this.RequestError);
  };

  ping = async (path: string) => {
    const options = {
      method: 'PING',
      headers: this.headers,
    };

    const response = await fetch(this.getURL(path), options);

    return API.handleResponse(response, this.RequestError);
  };
}

const baseURL = process.env.API_HOST || '';

export const api = new API(baseURL, APIError);
