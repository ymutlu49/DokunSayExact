import Logo from '../common/Logo';
import { THEME } from '../../constants/theme';

const AboutModal = ({ onClose }) => (
  <div onClick={onClose} style={{
    position: 'fixed', inset: 0, zIndex: 9999,
    background: 'rgba(0,0,0,.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
  }}>
    <div onClick={(e) => e.stopPropagation()} style={{
      background: '#faf6ed', borderRadius: 28, maxWidth: 460, width: '100%',
      maxHeight: '90vh', overflowY: 'auto', animation: 'popIn .35s',
    }}>
      <div style={{ textAlign: 'center', padding: '32px 32px 20px' }}>
        <Logo size={80} />
        <div style={{ fontSize: 28, fontWeight: 900, color: THEME.text, marginTop: 14 }}>DokunSay</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: THEME.accentD, marginBottom: 12 }}>Tam Say\ılar \Ö\ğretim Materyali</div>
        <div style={{ width: 50, height: 4, borderRadius: 2, background: THEME.accent, margin: '0 auto 16px' }} />
        <div style={{ fontSize: 13, color: '#666', lineHeight: 1.7, textAlign: 'left', padding: '0 8px' }}>
          DokunSay Tam Say\ılar, somut manip\ülatif temelli \ö\ğretim yakla\ş\ım\ıyla \ö\ğrencilerin pozitif ve negatif tam say\ılar\ı, s\ıf\ır \çifti kavram\ın\ı ve d\ört i\şlemi anlamalar\ın\ı destekler. Renkli pullar, say\ı do\ğrusunda y\ür\üyen karakter, i\şlem tepsisi, tam-say fabrikas\ı, asans\ör ve termometre sim\ülasyonlar\ı ile zenginle\ştirilmi\ştir.
        </div>
      </div>
      <div style={{ margin: '0 24px 20px', background: '#fff', borderRadius: 16, padding: '16px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg,#fbbf24,#f59e0b)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{'\�\�'}</div>
          <div style={{ fontSize: 15, fontWeight: 900, color: THEME.text }}>Prof. Dr. Y\ılmaz Mutlu</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg,#93c5fd,#3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{'\�\�\‍\�\�'}</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 900, color: THEME.text }}>Rumeysa Durgun</div>
            <div style={{ fontSize: 10, color: '#888' }}>Matematik \Ö\ğretmeni</div>
          </div>
        </div>
      </div>
      <div style={{ padding: '0 32px 24px' }}>
        <button onClick={onClose} style={{
          width: '100%', padding: '12px 0', borderRadius: 14, border: 'none',
          background: 'linear-gradient(135deg,' + THEME.accent + ',' + THEME.accentD + ')',
          color: '#fff', fontSize: 15, fontWeight: 800, cursor: 'pointer',
        }}>Kapat</button>
      </div>
    </div>
  </div>
);

export default AboutModal;
