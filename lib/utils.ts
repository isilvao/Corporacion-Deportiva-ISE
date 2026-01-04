import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(src: string) {
  const isProd = process.env.NODE_ENV === 'production'
  const basePath = isProd ? '/Corporacion-Deportiva-ISE' : ''
  return `${basePath}${src.startsWith('/') ? src : `/${src}`}`
}
