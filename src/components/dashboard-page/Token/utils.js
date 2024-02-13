const parseNumToMil = (data = {}, key) => {
  const metrics = data[key];
  return `$${(metrics / 1000000).toFixed(1)}M`;
};

const parseMetricsWeeklyChange = (data = {}, key) => {
  const metrics = data[key];
  const roundedMetrics = Math.round(metrics);
  const metricsWithSign = roundedMetrics > 0 ? `+${roundedMetrics}` : roundedMetrics;
  return `${metricsWithSign}%`;
};

export const getTokenPriceMetrics = (data = {}) => [
  {
    figure: 'Marketcap',
    rate: parseNumToMil(data, 'marketCap'),
    growthRate: parseMetricsWeeklyChange(data, 'marketCapWeeklyChange'),
    termDefinitionKey: 'marketcap',
  },
  {
    figure: 'Volume (24h)',
    rate: parseNumToMil(data, 'volume'),
    growthRate: parseMetricsWeeklyChange(data, 'volumeWeeklyChange'),
    termDefinitionKey: 'volume',
  },
  {
    figure: 'FDV',
    rate: parseNumToMil(data, 'fullyDilutedValue'),
    termDefinitionKey: 'fdv',
  },
];

export const parsePercentage = val => {
  const shouldReturnInt = val?.toFixed(1)?.includes('.0');
  return `${val?.toFixed(shouldReturnInt ? 0 : 1)}%`;
};
