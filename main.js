window.onload = () => {

  /*
    Bai 1
  */

  const btnSum = document.getElementById('btn-sum')

  btnSum.addEventListener('click', function () {
    const firstNum = document.getElementById('first-number').value
    const secondNum = document.getElementById('second-number').value
    const resultElement = document.getElementById('result-sum')

    const result = Number(firstNum) + Number(secondNum)

    resultElement.innerHTML = "Tong: " + result
  })

  /*
   Bai 2
 */

  const divBox = document.getElementById('box')

  divBox.addEventListener('click', function () {
    const { style } = divBox
    const { background } = style

    style.background = background == 'red' ? 'green' : 'red'
  })

  /*
    Bai 3
  */

  const selProductTyle = document.getElementById('sel-productType')

  selProductTyle.addEventListener('change', function () {
    const productTyle = selProductTyle.value

    const ulLaptop = document.getElementById('ul-laptop')
    const ulPhone = document.getElementById('ul-phone')
    const ulTV = document.getElementById('ul-tv')

    hideProductUls([ulLaptop, ulPhone, ulTV])

    switch (productTyle) {
      case 'laptop':
        showProductUl(ulLaptop)
        break
      case 'phone':
        showProductUl(ulPhone)
        break
      case 'television':
        showProductUl(ulTV)
        break
    }
  })

  function hideProductUls(uls) {
    uls.forEach(ul => {
      ul.style.display = 'none'
    });
  }

  function showProductUl(ul) {
    ul.style.display = 'block'
  }

  const event = new Event('change')
  selProductTyle.dispatchEvent(event);
}
