/// <reference types="vite/types/importMeta.d.ts" />

import { QueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const API_URL = "/api";
export const ACTUAL_API_URL = "https://www.doctoranytime.gr";
export const QUESTIONS_API_URL = `${ACTUAL_API_URL}/searchq`;
export const GENERATED_URL_PREFIX = "/s/Psychologos?";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const getURL = (path: string) =>
  API_URL + (path.startsWith("/") ? path : "/" + path);

const apiService = axios.create({});

export const get = <T>(
  path: string,
  params: Record<string, unknown> = {}
): Promise<AxiosResponse<T>> =>
  apiService.get(getURL(path), {
    params,
    headers,
  });

export const queryClient = new QueryClient();
