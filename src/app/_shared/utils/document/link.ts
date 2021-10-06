export const getLocalLinkWithParams = (urlParams: string): string => {
  return location.origin + location.pathname + (urlParams && `?${urlParams}`);
};
