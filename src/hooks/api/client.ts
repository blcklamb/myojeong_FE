/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import type { AxiosRequestHeaders } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface InternalAxiosRequestConfig<D = any>
  extends AxiosRequestConfig<D> {
  headers: AxiosRequestHeaders;
}

const logOnDev = (message: string, color: string) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`%c${message}`, `color: ${color}`);
  }
};

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const { method, url } = config;
  logOnDev(`🐰 [API] ${method?.toUpperCase()} ${url} | onRequest`, "blue");
  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  const { method, url } = response.config;
  const { status } = response;

  logOnDev(
    `🐰 [API] ${method?.toUpperCase()} ${url} | Response ${status}`,
    "green"
  );
  return response;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config as AxiosRequestConfig;
    const { status, statusText } = error.response as AxiosResponse;

    logOnDev(
      `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${statusText} | ${message}`,
      "red"
    );
  }
  return Promise.reject(error);
};

const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: { "Content-Type": "application/json" },
});

client.interceptors.request.use(
  (config): InternalAxiosRequestConfig => onRequest(config)
);

client.interceptors.response.use(
  (config): AxiosResponse => onResponse(config),
  (error): Promise<AxiosError> => onErrorResponse(error)
);

export default client;
