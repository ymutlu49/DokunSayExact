import Chip from '../common/Chip';
import { THEME } from '../../constants/theme';

const MaterialsTab = ({
  addChips, addZeroPair, clearAll, startSidebarDrag,
  showTray, setShowTray, resetTray,
  showFactory, setShowFactory, factoryReset,
  showThermometer, setShowThermometer, setTemp,
  showNumberLine, setShowNumberLine, resetNlPosition,
  walkStep, animateNumberLine, resetNumberLine,
}) => (
  <div style={{ flex: 1, overflowY: 'auto', padding: '10px 12px', scrollbarWidth: 'thin' }}>
    {/* Pozitif Pullar */}
    <div style={{ background: '#fff', borderRadius: 12, padding: '8px 10px', marginBottom: 6, border: '1px solid rgba(0,0,0,.05)' }}>
      <div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: THEME.posB, marginBottom: 5 }}>
        {'\u2295 Pozitif Pullar'}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {[1, 2, 3].map((n) => (
          <div key={n} style={{ width: 28, height: 28, cursor: 'grab', touchAction: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onPointerDown={(e) => startSidebarDrag('pos', 1, e)}>
            <Chip type="pos" size={13} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 2, marginTop: 5 }}>
        {[1, 3, 5, 10].map((n) => (
          <button key={n} onClick={() => addChips('pos', n)} style={{
            flex: 1, padding: '3px 0', borderRadius: 5,
            border: '1px solid rgba(34,197,94,.2)', background: 'rgba(34,197,94,.04)',
            cursor: 'pointer', fontSize: 8, fontWeight: 700, color: THEME.posB, fontFamily: 'inherit',
          }}>{'+' + n}</button>
        ))}
      </div>
    </div>

    {/* Negatif Pullar */}
    <div style={{ background: '#fff', borderRadius: 12, padding: '8px 10px', marginBottom: 6, border: '1px solid rgba(0,0,0,.05)' }}>
      <div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: THEME.negB, marginBottom: 5 }}>
        {'\u2296 Negatif Pullar'}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {[1, 2, 3].map((n) => (
          <div key={n} style={{ width: 28, height: 28, cursor: 'grab', touchAction: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onPointerDown={(e) => startSidebarDrag('neg', 1, e)}>
            <Chip type="neg" size={13} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 2, marginTop: 5 }}>
        {[1, 3, 5, 10].map((n) => (
          <button key={n} onClick={() => addChips('neg', n)} style={{
            flex: 1, padding: '3px 0', borderRadius: 5,
            border: '1px solid rgba(239,68,68,.2)', background: 'rgba(239,68,68,.04)',
            cursor: 'pointer', fontSize: 8, fontWeight: 700, color: THEME.negB, fontFamily: 'inherit',
          }}>{'-' + n}</button>
        ))}
      </div>
    </div>

    {/* S\u0131f\u0131r \u00c7ifti */}
    <div style={{ background: '#fff', borderRadius: 12, padding: '8px 10px', marginBottom: 6, border: '1px solid rgba(0,0,0,.05)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: '#6d28d9' }}>{'\uD83D\uDFE3 S\u0131f\u0131r \u00c7ifti'}</div>
        <span style={{ fontSize: 8, color: '#aaa' }}>{'(+1)+(\u22121)=0'}</span>
      </div>
      <button onClick={addZeroPair} style={{
        width: '100%', marginTop: 4, padding: '5px 0', borderRadius: 6,
        border: '1.5px solid rgba(139,92,246,.2)', background: 'rgba(139,92,246,.04)',
        cursor: 'pointer', fontSize: 10, fontWeight: 700, color: '#6d28d9', fontFamily: 'inherit',
      }}>{'\u2295\u2296 Ekle'}</button>
    </div>

    {/* Ara\u00e7lar */}
    <div style={{ background: '#fff', borderRadius: 12, padding: '8px 10px', marginBottom: 6, border: '1px solid rgba(0,0,0,.05)' }}>
      <div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: THEME.accentD, marginBottom: 4 }}>
        {'\uD83E\uDDEE Ara\u00e7lar'}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* \u0130\u015flem Tepsisi */}
        {showTray ? (
          <button onClick={() => { setShowTray(false); resetTray(); }} style={{
            padding: '5px 8px', borderRadius: 6, border: '1px solid rgba(245,158,11,.3)',
            background: THEME.accentL, cursor: 'pointer', fontSize: 10, fontWeight: 700,
            color: THEME.accentD, fontFamily: 'inherit', textAlign: 'left',
          }}>{'\u2715 Tepsiyi Kapat'}</button>
        ) : (
          <div onPointerDown={(e) => startSidebarDrag('tool', 'tray', e)} style={{
            padding: '5px 8px', borderRadius: 6, border: '1px solid ' + THEME.sideB,
            background: '#fff', cursor: 'grab', fontSize: 10, fontWeight: 700,
            color: THEME.accentD, touchAction: 'none', display: 'flex', alignItems: 'center', gap: 6,
          }}>
            {'\uD83E\uDDEE \u0130\u015flem Tepsisi'}
            <span style={{ marginLeft: 'auto', fontSize: 8, color: '#ccc' }}>{'\u22ee\u22ee'}</span>
          </div>
        )}
        {/* Fabrika */}
        {showFactory ? (
          <button onClick={() => { setShowFactory(false); factoryReset(); }} style={{
            padding: '5px 8px', borderRadius: 6, border: '1px solid rgba(124,58,237,.3)',
            background: 'rgba(124,58,237,.06)', cursor: 'pointer', fontSize: 10, fontWeight: 700,
            color: '#7c3aed', fontFamily: 'inherit', textAlign: 'left',
          }}>{'\u2715 Fabrikay\u0131 Kapat'}</button>
        ) : (
          <div onPointerDown={(e) => startSidebarDrag('tool', 'fab', e)} style={{
            padding: '5px 8px', borderRadius: 6, border: '1px solid rgba(0,0,0,.06)',
            background: '#fff', cursor: 'grab', fontSize: 10, fontWeight: 700,
            color: '#7c3aed', touchAction: 'none', display: 'flex', alignItems: 'center', gap: 6,
          }}>
            {'\uD83C\uDFED Tam-Say Fabrikas\u0131'}
            <span style={{ marginLeft: 'auto', fontSize: 8, color: '#ccc' }}>{'\u22ee\u22ee'}</span>
          </div>
        )}
        {/* Termometre */}
        {showThermometer ? (
          <button onClick={() => { setShowThermometer(false); setTemp(0); }} style={{
            padding: '5px 8px', borderRadius: 6, border: '1px solid rgba(239,68,68,.3)',
            background: 'rgba(239,68,68,.04)', cursor: 'pointer', fontSize: 10, fontWeight: 700,
            color: THEME.negB, fontFamily: 'inherit', textAlign: 'left',
          }}>{'\u2715 Termometreyi Kapat'}</button>
        ) : (
          <div onPointerDown={(e) => startSidebarDrag('tool', 'tm', e)} style={{
            padding: '5px 8px', borderRadius: 6, border: '1px solid rgba(0,0,0,.06)',
            background: '#fff', cursor: 'grab', fontSize: 10, fontWeight: 700,
            color: THEME.negB, touchAction: 'none', display: 'flex', alignItems: 'center', gap: 6,
          }}>
            {'\uD83C\uDF21\uFE0F Termometre'}
            <span style={{ marginLeft: 'auto', fontSize: 8, color: '#ccc' }}>{'\u22ee\u22ee'}</span>
          </div>
        )}
        {/* Say\u0131 Do\u011frusu */}
        {showNumberLine ? (
          <button onClick={() => { setShowNumberLine(false); resetNlPosition(); }} style={{
            padding: '5px 8px', borderRadius: 6, border: '1px solid rgba(59,130,246,.3)',
            background: 'rgba(59,130,246,.06)', cursor: 'pointer', fontSize: 10, fontWeight: 700,
            color: THEME.blue, fontFamily: 'inherit', textAlign: 'left',
          }}>{'\u2715 Say\u0131 Do\u011frusunu Kapat'}</button>
        ) : (
          <div onPointerDown={(e) => startSidebarDrag('tool', 'nl', e)} style={{
            padding: '5px 8px', borderRadius: 6, border: '1px solid rgba(0,0,0,.06)',
            background: '#fff', cursor: 'grab', fontSize: 10, fontWeight: 700,
            color: THEME.blue, touchAction: 'none', display: 'flex', alignItems: 'center', gap: 6,
          }}>
            {'\uD83D\uDCCF Say\u0131 Do\u011frusu'}
            <span style={{ marginLeft: 'auto', fontSize: 8, color: '#ccc' }}>{'\u22ee\u22ee'}</span>
          </div>
        )}
      </div>
    </div>

    {/* Say\u0131 do\u011frusu kontrolleri */}
    {showNumberLine && (
      <div style={{ background: '#fff', borderRadius: 12, padding: '8px 10px', marginBottom: 6, border: '1px solid rgba(59,130,246,.1)' }}>
        <div style={{ display: 'flex', gap: 2, marginBottom: 3 }}>
          <button onClick={() => walkStep('left')} style={{ flex: 1, padding: '4px 0', borderRadius: 5, border: '1px solid rgba(239,68,68,.2)', background: 'rgba(239,68,68,.04)', cursor: 'pointer', fontSize: 8, fontWeight: 800, color: THEME.negB, fontFamily: 'inherit' }}>{'\u25c0 Sola'}</button>
          <button onClick={() => { resetNumberLine(); }} style={{ flex: 1, padding: '4px 0', borderRadius: 5, border: '1px solid rgba(139,92,246,.2)', background: 'rgba(139,92,246,.04)', cursor: 'pointer', fontSize: 8, fontWeight: 800, color: '#6d28d9', fontFamily: 'inherit' }}>{'\u2299'}</button>
          <button onClick={() => walkStep('right')} style={{ flex: 1, padding: '4px 0', borderRadius: 5, border: '1px solid rgba(34,197,94,.2)', background: 'rgba(34,197,94,.04)', cursor: 'pointer', fontSize: 8, fontWeight: 800, color: THEME.posB, fontFamily: 'inherit' }}>{'Sa\u011fa \u25b6'}</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          <button onClick={() => animateNumberLine(0, 4)} style={{ padding: '3px 0', borderRadius: 4, border: '1px solid rgba(34,197,94,.15)', background: 'rgba(34,197,94,.03)', cursor: 'pointer', fontSize: 7, fontWeight: 700, color: THEME.posB, fontFamily: 'inherit' }}>{'0\u2192+4'}</button>
          <button onClick={() => animateNumberLine(0, -3)} style={{ padding: '3px 0', borderRadius: 4, border: '1px solid rgba(239,68,68,.15)', background: 'rgba(239,68,68,.03)', cursor: 'pointer', fontSize: 7, fontWeight: 700, color: THEME.negB, fontFamily: 'inherit' }}>{'0\u2192\u22123'}</button>
          <button onClick={() => animateNumberLine(3, -7)} style={{ padding: '3px 0', borderRadius: 4, border: '1px solid rgba(139,92,246,.15)', background: 'rgba(139,92,246,.03)', cursor: 'pointer', fontSize: 7, fontWeight: 700, color: '#6d28d9', fontFamily: 'inherit' }}>{'(+3)+(\u22127)'}</button>
          <button onClick={() => resetNumberLine()} style={{ padding: '3px 0', borderRadius: 4, border: '1px solid ' + THEME.sideB, background: '#fff', cursor: 'pointer', fontSize: 7, fontWeight: 700, color: '#999', fontFamily: 'inherit' }}>{'\uD83D\uDDD1 Temizle'}</button>
        </div>
      </div>
    )}

    {/* \u0130\u015faret & Say\u0131 Kartlar\u0131 */}
    <div style={{ background: '#fff', borderRadius: 12, padding: '8px 10px', marginBottom: 6, border: '1px solid rgba(0,0,0,.05)' }}>
      <div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: THEME.accent, marginBottom: 4 }}>
        {'\u0130\u015faret & Say\u0131 Kartlar\u0131'}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginBottom: 4 }}>
        {['+', '\u2212', '\u00d7', '\u00f7', '=', '<', '>'].map((op) => (
          <div key={op} style={{
            width: 26, height: 26, borderRadius: 6, background: '#fff',
            border: '1.5px solid ' + THEME.sideB, display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'grab', fontSize: 13, fontWeight: 900, color: THEME.accent, touchAction: 'none',
          }} onPointerDown={(e) => startSidebarDrag('op', op, e)}>{op}</div>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((n) => (
          <div key={n} style={{
            padding: '2px 4px', borderRadius: 4,
            background: n > 0 ? 'rgba(34,197,94,.05)' : n < 0 ? 'rgba(239,68,68,.05)' : 'rgba(139,92,246,.05)',
            border: '1px solid ' + (n > 0 ? THEME.pos : n < 0 ? THEME.neg : '#8b5cf6'),
            cursor: 'grab', fontSize: 9, fontWeight: 800,
            color: n > 0 ? THEME.posB : n < 0 ? THEME.negB : '#6d28d9',
            touchAction: 'none', minWidth: 22, textAlign: 'center',
          }} onPointerDown={(e) => startSidebarDrag('num', n, e)}>
            {n > 0 ? '+' + n : n}
          </div>
        ))}
      </div>
    </div>

    {/* \u00d6rnek & Temizle */}
    <div style={{ display: 'flex', gap: 4 }}>
      <button onClick={() => { addChips('pos', 3); addChips('neg', 2); }} style={{
        flex: 1, padding: '7px 0', borderRadius: 8, border: 'none',
        background: 'linear-gradient(135deg,' + THEME.accent + ',' + THEME.accentD + ')',
        color: '#fff', fontSize: 10, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
      }}>{'\u26a1 \u00d6rnek'}</button>
      <button onClick={clearAll} style={{
        flex: 1, padding: '7px 0', borderRadius: 8,
        border: '1.5px solid ' + THEME.sideB, background: '#fff',
        color: '#888', fontSize: 10, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
      }}>{'\uD83D\uDDD1 Temizle'}</button>
    </div>
  </div>
);

export default MaterialsTab;
