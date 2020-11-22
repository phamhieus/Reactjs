const Lesson15 = function () {
  let users = [{
    Id: 1,
    FullName: 'Nguyễn Văn Nam',
    Gender: 'Nữ',
    Age: 12
  },
  {
    Id: 2,
    FullName: 'Nguyễn Văn Nữ',
    Gender: 'Nam',
    Age: 12
  },
  {
    Id: 3,
    FullName: 'Nguyễn Văn Test',
    Gender: 'Nữ',
    Age: 12
  }]

  const appendButton = (className, textContent, user, td, event) => {
    const button = document.createElement('button')

    button.type = 'button'
    button.className = className
    button.textContent = textContent
    button.value = user ? user.Id : null

    if (event) button.addEventListener('click', event)

    td.appendChild(button)
  }

  const _TableUser = function () {
    const tableBody = document.getElementById('tableBody')

    const appendTdCheckBox = (user, tr) => {
      const tdCheckBox = document.createElement('td')
      const checkBox = document.createElement('input')

      checkBox.type = 'checkBox'
      checkBox.value = user ? user.Id : null

      tdCheckBox.appendChild(checkBox)
      tr.appendChild(tdCheckBox)
    }

    const appendTdAction = (user, tr) => {
      const tdAction = document.createElement('td')

      appendButton('btn btn-primary btnEdit', 'Edit', user, tdAction)
      appendButton('btn btn-danger btnDelete', 'Delete', user, tdAction)

      tr.appendChild(tdAction)
    }

    const appendTdUserProperty = (user, tr) => {
      for (let key in user) {
        if (user.hasOwnProperty(key)) {
          const td = document.createElement('td')
          const value = user[key]

          td.innerHTML = value

          tr.appendChild(td)
        }
      }
    }

    const renderTable = (users = [], tableBody) => {
      tableBody.innerHTML = ''

      users.forEach(user => {
        const tr = document.createElement('tr')

        appendTdCheckBox(user, tr)
        appendTdUserProperty(user, tr)
        appendTdAction(user, tr)

        tableBody.appendChild(tr)
      })
    }

    renderTable(users, tableBody)
  }

  const _EditUserTable = function () {
    let tempTrs = []

    const btnCanleEvent = (event) => {
      const id = Number(event.target.value)
      const tr = event.target.parentElement.parentElement
      const tempTr = tempTrs.find(item => item.id === id)
      const { element } = tempTr

      tr.innerHTML = element

      tempTrs.remove(tempTr)
      addEditEvent()
    }

    const btnSaveEvent = (event) => {
      const id = Number(event.target.value)
      const tr = event.target.parentElement.parentElement
      const textBoxs = tr.getElementsByTagName("input")
      const select = tr.getElementsByTagName("select")[0]

      let user = users.find(u => u.Id === id)

      if (!user) {
        user = {
          Id: id,
          FullName: '',
          Age: 0
        }

        users.push(user)
      }

      user.Gender = select.value

      for (let i = 0; i < textBoxs.length; i++) {
        const { name, value } = textBoxs[i]

        if (user.hasOwnProperty(name)) {
          user[name] = value
        }
      }

      _TableUser()
      addEditEvent()
    }

    const btnDeteletEvent = (event) => {
      const id = Number(event.target.value)

      users = users.filter(u => u.Id != id)

      _TableUser()
      addEditEvent()
    }

    const btnDeteletMany = (event) => {
      const checkBoxIds = document.querySelectorAll('input[type="checkBox"]:checked')
      const userIds = []

      if (checkBoxIds) {
        for (let i = 0; i < checkBoxIds.length; i++) {
          userIds.push(Number(checkBoxIds[i].value))
        }

        users = users.filter(u => !userIds.includes(u.Id))

        _TableUser()
        addEditEvent()
      }
    }

    const appendTdCheckBox = (user, tr) => {
      const tdCheckBox = document.createElement('td')
      const checkBox = document.createElement('input')

      checkBox.checked = true
      checkBox.type = 'checkBox'
      checkBox.value = user ? user.Id : null

      tdCheckBox.appendChild(checkBox)
      tr.appendChild(tdCheckBox)
    }

    const createTextBox = (value, name, type) => {
      const txt = document.createElement('input')
      const td = document.createElement('td')

      txt.type = type
      txt.value = value
      txt.name = name

      td.appendChild(txt)

      return td
    }

    const createSelect = (value, name, options) => {
      const select = document.createElement('select')
      const td = document.createElement('td')

      select.name = name

      options.forEach(option => {
        const optionElement = document.createElement('option')

        optionElement.value = option
        optionElement.textContent = option

        if (value === option) {
          optionElement.selected = true
        }

        select.appendChild(optionElement)
      })

      td.appendChild(select)

      return td
    }

    const appendTdEditedUserProperty = (user, tr) => {
      const tdId = document.createElement('td')

      tdId.innerText = user.Id

      tr.appendChild(tdId)
      tr.appendChild(createTextBox(user ? user.FullName : null, 'FullName', 'text'))
      tr.appendChild(createSelect(user ? user.Gender : null, "Gender", ["Nam", "Nữ"]))
      tr.appendChild(createTextBox(user ? user.Age : null, 'Age', 'number'))
    }

    const appendTdEditedAction = (user, tr) => {
      const tdAction = document.createElement('td')

      appendButton('btn btn-success', 'Save', user, tdAction, btnSaveEvent)
      appendButton('btn btn-warning', 'Cancle', user, tdAction, btnCanleEvent)

      if (user) appendButton('btn btn-danger', 'Delete', user, tdAction, btnDeteletEvent)

      tr.appendChild(tdAction)
    }

    const appendRowEdit = (user = {}, tr) => {
      appendTdCheckBox(user, tr)
      appendTdEditedUserProperty(user, tr)
      appendTdEditedAction(user, tr)
    }


    const btnAddEvent = (event) => {
      const id = users[users.length - 1].Id + 1
      const user = { Id: id, FullName: '', Age: 0 }
      const tr = document.createElement("tr")
      const tableBody = document.getElementById('tableBody')

      tempTrs.push({ id, element: tr.innerHTML })
      tr.innerHTML = ''

      appendRowEdit(user, tr)
      tableBody.appendChild(tr)
    }


    const btnEditEvent = (event) => {
      const id = Number(event.target.value)
      const user = users.find(u => u.Id === id)
      const tr = event.target.parentElement.parentElement

      tempTrs.push({ id, element: tr.innerHTML })
      tr.innerHTML = ''

      appendRowEdit(user, tr)
    }

    function addEditEvent() {
      const btnEdits = document.getElementsByClassName('btnEdit')
      const btnDeletes = document.getElementsByClassName('btnDelete')


      for (let i = 0; i < btnEdits.length; i++) {
        btnEdits[i].removeEventListener('click', btnEditEvent)
        btnEdits[i].addEventListener('click', btnEditEvent)

        btnDeletes[i].removeEventListener('click', btnDeteletEvent)
        btnDeletes[i].addEventListener('click', btnDeteletEvent)
      }
    }

    function addDeleteManyNAdd() {
      const btnAdd = document.getElementById('btnAdd')
      const btnDeleteMany = document.getElementById('btnDeleteMany')

      btnAdd.addEventListener('click', btnAddEvent)
      btnDeleteMany.addEventListener('click', btnDeteletMany)
    }

    addEditEvent()
    addDeleteManyNAdd()
  }

  return {
    init: function () {
      _TableUser()
      _EditUserTable()
    }
  }
}()

document.addEventListener('DOMContentLoaded', function () {
  Lesson15.init()
})

