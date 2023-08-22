import { NAV_ITEMS } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ h }) {
  return isHourValid(h)
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

function isSelectOptionValid({ value, label }) {
  return isNumber(value) && isString(label)
}

export function isUndefinedOrNull(value) {
  return isNull(value) || isUndefined(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

function isNull(value) {
  return value === null
}

function isUndefined(value) {
  return value === undefined
}

function isNumber(value) {
  return typeof value === 'number'
}

function isString(label) {
  return typeof label === 'string'
}
