export interface Network {
  maintenance: boolean;
  network: {
    rest: string[];
  };
  theseus: {
    url: string;
  };
  vulcan: {
    url: string;
  };
}

export interface Configuration {
  networks: Record<string, Network>;
}
