import http from '@/utils/http'

export const login = (data: Record<string, any> = {}) => {
  return http.get('/area', { data })
}
