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

    const hideProductUls = (uls) => {
      uls.forEach(ul => {
        ul.style.display = 'none'
      });
    }

    const showProductUl = (ul) => {
      ul.style.display = 'block'
    }

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

  const event = new Event('change')
  selProductTyle.dispatchEvent(event);

  /*
    Bai 4
  */
  const menu = [
    {
      name: 'Home',
      children: [
        {
          name: 'Home 1',
          children: [
            {
              name: 'Home 1.1',
              children: [
                { name: 'Home 1.1.1' }
              ]
            },
            {
              name: 'Home 1.2',
              children: [
                { name: 'Home 1.2.1' }
              ]
            }
          ]
        },
        {
          name: 'Home 2',
          children: [
            {
              name: 'Home 2.1'
            }
          ]
        },
        {
          name: 'Home 3',
          children: [
            {
              name: 'Home 3.1'
            }
          ]
        }
      ]
    },
    {
      name: 'About',
      children: [
        {
          name: 'About 1',
          children: [
            {
              name: 'About 1.1',
              children: [
                { name: 'About 1.1.1' }
              ]
            },
            {
              name: 'About 1.2',
              children: [
                {
                  name: 'About 1.2.1',
                  children: [
                    { name: 'About 1.2.1.1' },
                    { name: 'About 1.2.1.2' },
                    { name: 'About 1.2.1.3' }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'Home 2',
          children: [
            {
              name: 'Home 2.1'
            }
          ]
        }
      ]
    }
  ]

  const ulMenu = document.getElementById('menu')


  const menuBar = (menus = [], parentElemt = ulMenu, levelMenu = 0) => {
    const appendLi = (item, parrent, levelMenu) => {
      const li = document.createElement("li")
      const a = document.createElement("a")

      a.textContent = item.name
      li.appendChild(a)

      if (item.children) {
        appendUl(item, li, levelMenu)
      }


      parrent.appendChild(li)
    }

    const appendUl = (item, li, levelMenu) => {
      const ul = document.createElement("ul")

      ul.className = 'child'
      li.className = 'parent'

      if (levelMenu > 0) {
        appendSpan(li)
      }

      menuBar(item.children, ul, levelMenu + 1)

      li.appendChild(ul)
    }

    const appendSpan = (li) => {
      const span = document.createElement("span")

      span.className = 'expand'
      span.textContent = '>>'

      li.appendChild(span)
    }

    menus.forEach(item => {
      appendLi(item, parentElemt, levelMenu)
    })
  }

  menuBar(menu, ulMenu)
}

