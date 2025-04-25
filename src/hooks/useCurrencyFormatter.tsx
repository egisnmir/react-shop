import { useMemo } from 'react';

export function useCurrencyFormatter(locale: string, currency: string) {
    return useMemo(() => {
      const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
      });
  
      return (value: number) => formatter.format(value);
    }, [locale, currency]);
  }
  