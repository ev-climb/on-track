import { BUTTON_TYPES, NAV_ITEMS } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}

export function isTimelineItemValid({ h }) {
  return isHourValid(h)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function isActivityValid(activity) {
  return isNotEmptyString(activity)
}

export function isHourValid(h) {
  return isNumber(h) && h >= 0 && h < 24
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

export function isUndefinedOrNull(value) {
  return isNull(value) || isUndefined(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

function isSelectOptionValid({ value, label }) {
  return isNumber(value) && isNotEmptyString(label)
}

export function isUndefined(value) {
  return value === undefined
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

function isNull(value) {
  return value === null
}

function isNumber(value) {
  return typeof value === 'number'
}

function isString(label) {
  return typeof label === 'string'
}
