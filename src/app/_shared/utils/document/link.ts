import { coerceArray } from '@angular/cdk/coercion';

export const getLocalLinkWithParams = (urlParams: string): string => {
  return location.origin + location.pathname + (urlParams && `?${urlParams}`);
};

export const getLocalLink = ({
  excludeQueryParams,
}: { excludeQueryParams?: string[] | string } = {}): string => {
  const queryParams = new URLSearchParams(location.search);

  coerceArray(excludeQueryParams).forEach((param) => queryParams.delete(param));

  return getLocalLinkWithParams(queryParams.toString());
};
