{
  const cards = {
    position: 'relative',
    listStyleType: 'none',
    padding: '0',
    maxWidth: '34em',
    margin: '20% auto 0'
  };

  const card = {
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '2',
    background: '#ccc',
    borderRadius: '30px',
    padding: '40px',
    boxShadow: '0 0 40px #000',
    transform: 'translateY(0) rotate(4deg) translateX(25px) scale(1)',
    transformOrigin: '0 0',
    transition: 'transform 0.6s cubic-bezier(.8,.2,.1,0.8) 0.1s,\n    background 0.4s linear',
    cursor: 'pointer',
    userSelect: 'none'
  };

  const card_last_child = {
    marginBottom: '0'
  };

  const card__next = {
    zIndex: '5',
    transform: 'translateY(-25px) rotate(4deg) translateX(25px) scale(1)'
  };

  const card__out = {
    animation: 'card-out 0.6s cubic-bezier(.8,.2,.1,0.8)',
    transform: 'translateY(-50px) rotate(8deg) translateX(55px) scale(0.95)',
    zIndex: '1',
    background: '#bbb'
  };

  const card__current = {
    cursor: 'auto',
    userSelect: 'auto',
    position: 'relative',
    zIndex: '10',
    opacity: '1',
    background: '#EEE',
    transform: 'rotate(-1deg) translateX(0%) scale(1)'
  };

  const h1 = {
    margin: '0'
  };

  const html = {
    height: '100%'
  };

  const body = {
    padding: '40px',
    background: '#222232'
  }
}
