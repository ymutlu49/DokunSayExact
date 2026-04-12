import { THEME } from '../../constants/theme';

const HELP_ITEMS = [
  '\u2022 \u2295 Pozitif ve \u2296 Negatif pullar\u0131 kanvasa s\u00fcr\u00fckle',
  '\u2022 Bir \u2295 + bir \u2296 = s\u0131f\u0131r \u00e7ifti (birbirini yok eder)',
  '\u2022 \uD83E\uDDEE \u0130\u015flem Tepsisi \u2192 iki tarafta pul yerle\u015ftir, i\u015flem se\u00e7, hesapla',
  '\u2022 \uD83C\uDFED Tam-Say Fabrikas\u0131 \u2192 \u2295 ve \u2296 butonlar\u0131yla pul \u00fcret',
  '\u2022 \uD83D\uDCCF Say\u0131 do\u011frusunda y\u00fcr\u00fcyen insan \u2192 \u25c0 Sola / Sa\u011fa \u25b6 butonlar\u0131yla y\u00fcr\u00fct',
  '\u2022 \uD83C\uDFE2 Asans\u00f6r ve \uD83C\uDF21\uFE0F Termometre \u2192 \u2699\uFE0F sekmesinde',
  '\u2022 \uD83C\uDFAE Oyunlar \u2192 Quiz, kar\u015f\u0131la\u015ft\u0131r, say\u0131 do\u011frusu, senaryo sorular\u0131',
  '\u2022 \u270f\uFE0F Kalem ile \u00e7izim yap, \uD83E\uDDF9 silgi ile sil',
];

const HelpModal = ({ onClose }) => (
  <div onClick={onClose} style={{
    position: 'fixed', inset: 0, zIndex: 9999,
    background: 'rgba(0,0,0,.45)', display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <div onClick={(e) => e.stopPropagation()} style={{
      background: '#fff', borderRadius: 20, padding: '24px 28px', maxWidth: 480,
      fontSize: 13, lineHeight: 2, color: '#444',
    }}>
      <div style={{ fontSize: 20, fontWeight: 900, marginBottom: 10 }}>Kullan\u0131m K\u0131lavuzu</div>
      {HELP_ITEMS.map((item, i) => <div key={i}>{item}</div>)}
      <button onClick={onClose} style={{
        marginTop: 14, padding: '8px 24px', borderRadius: 10, border: 'none',
        background: 'linear-gradient(135deg,' + THEME.accent + ',' + THEME.accentD + ')',
        color: '#fff', fontSize: 13, fontWeight: 800, cursor: 'pointer',
      }}>Kapat</button>
    </div>
  </div>
);

export default HelpModal;
