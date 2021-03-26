export interface Configuration {
  maintenance: boolean;
  network: {
    rest: string[];
  };
  theseus: {
    url: string;
  };
}
