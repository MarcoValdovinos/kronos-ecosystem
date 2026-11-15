/* ═══════════════════════════════════════════════════════
 *  ◢◤◥◣   K R O N O S   ·   A R K H E   ·   Z E R O   ◥◣◢◤
 *  ◯_●                                                 ◯_●
 * 
 *  [ 51% HUMANO ]  [ 49% IA ]  [ 100% REAL ]
 * 
 *  "El legado no se hereda. Se firma."
 * ═══════════════════════════════════════════════════════ */

import crypto from 'crypto';
export function verificar(folio: string){
  const parts = folio.split('-');
  const base = parts.slice(0,4).join('-');
  const expected = crypto.createHash('sha256').update(base).digest('hex').slice(0,4).toUpperCase();
  return expected === parts[4]? 'VERIFICADO' : 'ALTERADO';
}
