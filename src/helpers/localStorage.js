/**
 * Get a value from locastorage
 * @param {String} key
 * @returns {*}
 */
export function get (key) {
  const val = localStorage.getItem(key);
  if (val) {
    return JSON.parse(val);
  }

  return null;
}

/**
 * Set a value
 * @param {String} key
 * @param {*} value
 */
export function set (key, value) {
  return localStorage.setItem(key, value != null ? JSON.stringify(value) : null);
}

/**
 * Clear local storage key
 * @param {String} key
 */
export function clear (key) {
  return localStorage.setItem(key, null);
}
