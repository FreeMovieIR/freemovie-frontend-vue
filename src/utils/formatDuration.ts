export function formatDuration(duration: number | string): string {
  const durationNumber
    = typeof duration === 'string' ? Number.parseInt(duration, 10) : duration

  if (isNaN(durationNumber) || durationNumber <= 0) {
    return '0m'
  }

  const hours = Math.floor(durationNumber / 60)
  const minutes = Math.floor(durationNumber % 60)

  if (hours === 0) {
    return `${minutes}m`
  }

  return `${hours}h  ${minutes > 0 ? `${minutes}m` : ''}`
}
