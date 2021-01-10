

const loadCaptcha = (callback) => {
  const existingScript = document.getElementById('recaptcha');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.id = 'recaptcha';
    document.body.appendChild(script);
    script.onload = () => { 
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};

export default loadCaptcha;