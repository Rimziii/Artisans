
export default function Navbar({ onSearch }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setSearch(e.target.value);
    if (onSearch) onSearch(e.target.value);
  }

  return (
    <header className="app-header">
      <div className="brand">
        <AnimatedLogo />
        <div>
          <div style={{fontWeight:700,fontSize:18,color:'#333333',fontFamily:'Playfair Display, serif'}}>AI Marketplace for Artisans</div>
        </div>
      </div>
      <div className="search-bar" style={{position:'relative',width:'50%',maxWidth:400}}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleChange}
          style={{
            width: '100%',
            height: 40,
            background: '#FDF6E3',
            border: '2px solid #6B8E23',
            borderRadius: 24,
            boxShadow: '0 2px 8px rgba(107,142,35,0.08)',
            padding: '0 44px 0 16px',
            fontFamily: 'Lato, Open Sans, Arial, sans-serif',
            color: '#333333',
            fontSize: 16,
            outline: 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onFocus={e => {
            e.target.style.borderColor = '#A9C47F';
            navigate('/explore');
          }}
          onBlur={e => e.target.style.borderColor = '#6B8E23'}
          aria-label="Search products"
        />
        <span
          style={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#6B8E23',
            cursor: 'pointer',
            transition: 'color 0.2s',
            fontSize: 22,
            display: 'flex',
            alignItems: 'center',
            animation: 'shimmer 2s infinite',
          }}
          tabIndex={0}
          role="button"
          aria-label="Search"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="8" stroke="#6B8E23" strokeWidth="2" />
            <rect x="16" y="16" width="6" height="2" rx="1" transform="rotate(45 16 16)" fill="#6B8E23" />
          </svg>
        </span>
        <style>{`
          @keyframes shimmer {
            0% { filter: brightness(1); }
            50% { filter: brightness(1.2); }
            100% { filter: brightness(1); }
          }
        `}</style>
      </div>
      <div className="icons">
        <span>❤️</span>
        <span>🛒</span>
      </div>
    </header>
  );
}
