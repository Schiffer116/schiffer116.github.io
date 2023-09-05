const changeColor = (name, style, color) => {
  const prev = window.getComputedStyle(
    document.querySelector(name)
  )[style]
  const ele = document.querySelector(name)
  const keyframe = {}
  keyframe[style] = [prev, color]
  ele.animate(
    keyframe,
    1000,
  );
  ele.style[style] = color;
}

const changeColorAll = () => {
  const backgroundColor = ['body', '#new-quote', '#tweet-quote']
  const color = ['#text', '#author', '.fa-quote-left']

  const newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  backgroundColor.forEach(name => changeColor(name, 'backgroundColor', newColor));
  color.forEach(name => changeColor(name, 'color', newColor));
}

const changeQuote = async () => {
  changeColorAll()
  let quote = await fetch('https://api.quotable.io/random')
    .then(res => res.json())
  document.querySelector('#text').innerText = quote.content;
  document.querySelector('#author').innerText = '- ' + quote.author;
}

changeQuote()

