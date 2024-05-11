import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Array<ClassValue>): string {
  return twMerge(clsx(inputs));
}

export function formatDate(date: number | Date | undefined): string {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'long',
    timeZone: 'America/Sao_Paulo',
  })
    .format(date)
    .replace(' BRT', '');
}
