let Lesson15 = function () {
  const pokemons = [
    { id: 1, name: 'Charmander', hp: 39, atk: 52 },
    { id: 2, name: 'Pikachu', hp: 35, atk: 55 },
    { id: 3, name: 'Squirtle', hp: 44, atk: 48 },
    { id: 4, name: 'Bulbasaur', hp: 45, atk: 49 },
    { id: 5, name: 'Mew', hp: 100, atk: 100 },
    { id: 6, name: 'Pidgey', hp: 40, atk: 45 },
    { id: 7, name: 'Abra', hp: 25, atk: 20 },
    { id: 8, name: 'Snorlax', hp: 160, atk: 110 },
    { id: 9, name: 'Caterpie', hp: 45, atk: 30 },
    { id: 10, name: 'Dratini', hp: 41, atk: 64 },
    { id: 11, name: 'Eevee', hp: 55, atk: 55 },
    { id: 12, name: 'Jigglypuff', hp: 115, atk: 45 }
  ]
  let pokemonSelecteds = []

  const PokeGame = function () {
    const updateProcessBar = (idElement, number) => {
      const pb = document.getElementById(idElement)

      pb.style.width = `${number}%`
      pb.ariaValuenow = number
    }

    const updateSpan = (idElement, number) => {
      const span = document.getElementById(idElement)

      span.innerText = ` ${number}`
    }

    const removeAllSelectStatus = () => {
      const lis = document.getElementsByTagName('li')

      for (let i = 0; i < lis.length; i++) {
        if (lis[i].classList.contains('selected')) {
          lis[i].classList.remove('selected')
        }
      }
    }

    const liClickEvent = (event) => {
      const id = Number(event.target.value)
      const poke = pokemons.find(poke => poke.id == id)
      const pokeName = poke.name.toLowerCase()
      const imgUrl = `./pokemon/${pokeName}.png`
      const thumbnailImg = document.getElementById('thumbnail-selected-pokemon')
      const pokeNameEle = document.getElementById('name-selected-pokemon')
      const btnAddPoke = document.getElementById('btn-add-pokemon')
      const li = event.target.parentElement

      updateProcessBar('pbHp', poke.hp / 2)
      updateProcessBar('pbAtk', poke.atk / 2)

      updateSpan('hp', poke.hp)
      updateSpan('atk', poke.atk)

      removeAllSelectStatus()

      li.classList.add('selected')
      pokeNameEle.innerText = poke.name
      thumbnailImg.src = imgUrl

      btnAddPoke.value = id
    }

    const renderListPokemon = (pokemons = [], ul) => {
      pokemons.forEach(poke => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const pokeNameImg = poke.name.toLowerCase()
        const baseUrl = `./pokemon/${pokeNameImg}.png`

        img.src = baseUrl
        img.alt = poke.Name
        img.className = 'm-4'
        img.style.width = '120px'
        img.value = poke.id

        li.className = 'col-3'
        li.value = poke.id
        li.addEventListener('click', liClickEvent)
        li.id = `li${poke.id}`

        li.appendChild(img)
        ul.appendChild(li)

        const event = new Event('click')
        li.dispatchEvent(event)
      })
    }

    const headerContentDBClick = (event) => {
      const current = event.target
      const newCont = document.createElement('input')

      newCont.type = 'text'
      newCont.className = 'form-control'

      current.appendChild(newCont)

      newCont.focus().blur(function () {
        const newcontent = newCont.value;
        current.innerHtml = newcontent
      })
    }

    const appendPokeSelected = (pokemonSelecteds) => {
      let index = 0
      const selectedElements = document.getElementsByClassName('pokemon-select-item')

      for (let i = 0; i < selectedElements.length; i++) {
        selectedElements[i].innerHTML = ''
      }

      pokemonSelecteds.forEach(poke => {
        selectedElements[index].innerHTML = `<div class="box-select">
              <span class="icon-close" id="span${poke.id}">
                <i class="fas fa-times" id="i${poke.id}"></i>
              </span>
              <img src="./pokemon/${poke.name.toLowerCase()}.png" alt="${poke.name}" id-data="${poke.id}" class="pokemon-select-img">
            </div>`

        index++
      })

      addDeleteEvent()
    }

    const removePokemon = (event) => {
      const pokeId = Number(event.target.id.replace("sp", "").replace("i", ""))
      pokemonSelecteds = pokemonSelecteds.filter(p => p.id != pokeId)
      appendPokeSelected(pokemonSelecteds)
      updateLiStatus(pokeId, true)
    }

    const updateLiStatus = (id, enable) => {
      const li = document.getElementById(`li${id}`)

      if (!enable) {
        li.classList.add('disable')
      } else {
        li.classList.remove('disable')
      }
    }

    const isLiEnable = (id) => {
      const li = document.getElementById(`li${id}`)
      return li.classList.contains('disable')
    }

    const addPokemon = (event) => {
      const id = Number(event.target.value)
      const poke = pokemons.find(p => p.id === id)

      if (pokemonSelecteds.length < 5) {
        if (!isLiEnable(id)) {
          pokemonSelecteds.push(poke)
          appendPokeSelected(pokemonSelecteds)
          updateLiStatus(id, false)
        }
      } else {
        const alertMax = document.getElementById('pMaxSelAlert')
        alertMax.style.display = 'block'

        alert('You have selected 5 pokemon')
      }
    }

    function addDeleteEvent() {
      const deleteIcons = document.getElementsByClassName('icon-close')

      if (deleteIcons) {
        for (let i = 0; i < deleteIcons.length; i++) {
          deleteIcons[i].addEventListener('click', removePokemon)
        }
      }
    }

    const ul = document.getElementById('ulPokeImgs')
    const btnAddPoke = document.getElementById('btn-add-pokemon')
    const fixTitleSelect = e => e.target.setAttribute('contentEditable', 'true')

    document.querySelector('.heading-box-select').addEventListener('dblclick', fixTitleSelect)
    btnAddPoke.addEventListener('click', addPokemon)
    renderListPokemon(pokemons, ul)
  }

  return {
    init: function () {
      PokeGame()
    }
  }
}()

document.addEventListener('DOMContentLoaded', function () {
  Lesson15.init()
})
