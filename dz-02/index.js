function getPath(elem) {
    const {
      tagName,
      id,
      className,
      parentNode
    } = elem;
  
    if (tagName === 'HTML') return 'HTML';
  
    let str = tagName;
  
    str += (id !== '') ? `#${id}` : '';
  
    if (className) {
      const classes = className.split(/\s/);
      for (let i = 0; i < classes.length; i++) {
        str += `.${classes[i]}`;
      }
    }
  
    let childIndex = 1;
  
    for (let e = elem; e.previousElementSibling; e = e.previousElementSibling) {
      childIndex += 1;
    }
  
    str += `:nth-child(${childIndex})`;
  
    return `${getPath(parentNode)} > ${str}`;
  }

  

export default getPath;