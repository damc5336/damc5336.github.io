const quotes = [
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "The purpose of our lives is to be happy.",
      author: "Dalai Lama"
    },
    {
      quote: "Get busy living or get busy dying.",
      author: "Stephen King"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    }
  ];
  
  const quoteText = document.getElementById('js-quote-text');
  const authorText = document.getElementById('js-author-text');
  const loader = document.getElementById('loader');
  
  document.getElementById('js-new-quote').addEventListener('click', getQuote);
  
  function getQuote() {
    loader.style.display = 'block';
    quoteText.textContent = '';
    authorText.textContent = '';
  
    setTimeout(() => {
      const random = Math.floor(Math.random() * quotes.length);
      const current = quotes[random];
  
      quoteText.textContent = `"${current.quote}"`;
      authorText.textContent = `— ${current.author}`;
  
      loader.style.display = 'none';
    }, 800);
  }
  
  getQuote();
  