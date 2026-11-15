/* ═══════════════════════════════════════════════════════
 *  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
 *  ◯_●                                                 ◯_●
 * 
 *  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 * 
 *  "El legado no se hereda. Se firma."
 * ═══════════════════════════════════════════════════════ */

/**
 * CRONOS · src/symbolic_engine/index.js
 * ───────────────────────────────────────
 * Motor simbólico: interpreta el corpus cultural.
 * NO decide. NO predice. Traduce cultura a estructura.
 */

import { createNumber, reduceToDigit } from '../core/entities/number.js';
import { createDate } from '../core/entities/date.js';
import { reduceDate, reduceText } from '../core/rules/reduction.js';

/**
 * Interpreta una fecha en clave simbólica.
 * Devuelve estructura, no significado oculto.
 * @param {string} isoDate
 * @returns {object}
 */
export function interpretDate(isoDate) {
  const date = createDate(isoDate);
  const digit = reduceDate(isoDate);

  return {
    date,
    reduction: createNumber(digit, date.calendar),
    interpretation: 'estructura cultural',
    disclaimer: 'No predice. Solo organiza significado simbólico.',
    tag: '#cultura'
  };
}

/**
 * Interpreta un texto en clave simbólica.
 * @param {string} text
 * @returns {object}
 */
export function interpretText(text) {
  const digit = reduceText(text);

  return {
    original: text,
    reduction: createNumber(digit, 'pitagórica'),
    interpretation: 'estructura cultural',
    disclaimer: 'No predice. Solo organiza significado simbólico.',
    tag: '#cultura'
  };
}
