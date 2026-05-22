// src/utils/format.ts
export const fmt = (num: number) => 
  'KES ' + Number(num).toLocaleString();

export const fmtDate = (date: string) =>
  new Date(date).toLocaleDateString('en-KE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

export const fmtPhone = (phone: string) =>
  phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');

export const fmtCurrency = (num: number, currency = 'KES') =>
  new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency,
  }).format(num);