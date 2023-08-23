import { PAGE_TIMELINE } from './constants'
import { isPageValid } from './validators'

export function normalizePageHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export function generateTimelineItems() {
  const timelineItems = []
  for (let h = 0; h < 24; h++) {
    timelineItems.push({ h })
  }
  return timelineItems
}

export function generateActivitySelectOptions(activities) {
  return activities.map((label, value) => ({ label, value }))
}
