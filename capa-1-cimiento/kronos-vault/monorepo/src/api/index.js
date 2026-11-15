/* ═══════════════════════════════════════════════════════
 *  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
 *  ◯_●                                                 ◯_●
 * 
 *  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 * 
 *  "El legado no se hereda. Se firma."
 * ═══════════════════════════════════════════════════════ */

/**
 * CRONOS · src/api/index.js
 * ──────────────────────────
 * Punto de entrada unificado del sistema.
 * Conecta los motores con quien consuma la API.
 *
 * Se puede usar desde Node, desde el navegador (con <script type="module">)
 * o desde cualquier runtime compatible con ES Modules.
 */

import { interpretDate, interpretText } from '../symbolic_engine/index.js';
import { detectRepetitions, mode } from '../pattern_engine/index.js';
import { simulateCoin, simulateUniform } from '../quantum_simulator/index.js';
import { Event, Timeline } from '../core/timelines/index.js';

export const Cronos = {
  symbolic: {
    interpretDate,
    interpretText
  },
  pattern: {
    detectRepetitions,
    mode
  },
  simulator: {
    simulateCoin,
    simulateUniform
  },
  timeline: {
    Event,
    Timeline
  },
  meta: {
    name: 'CRONOS',
    version: '1.2.0',
    description: 'Sistema de Interpretación Temporal y Simbólica',
    disclaimer: 'No predice el futuro. Arquitectura conceptual.'
  }
};

export default Cronos;
