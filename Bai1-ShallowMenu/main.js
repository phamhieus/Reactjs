

let Lesson14 = function () {
  let ShallowMenu = function () {
    const shallowMenu = [
      {
        title: 'Dashboard',
        link: '/dashboard',
        children: [
          {
            title: 'Tool',
            link: '/dashboard/tool'
          },
          {
            title: 'Reports',
            link: '/dashboard/reports'
          },
          {
            title: 'Analytics',
            link: '/dashboard/analytics'
          },
          {
            title: 'Code Blocks',
            link: '/dashboard/code-blocks'
          },
        ]
      },
      {
        title: 'Sales',
        link: '/sales',
        children: [
          {
            title: 'New Sales',
            link: '/sales/new-sales'
          },
          {
            title: 'Expired Sales',
            link: '/sales/expired-sales'
          },
          {
            title: 'Sales Reports',
            link: '/sales/sales-reports'
          },
          {
            title: 'Deliveries',
            link: '/sales/deliveries'
          },
        ]
      },
      {
        title: 'Messages',
        link: '/messages',
        children: [
          {
            title: 'Inbox',
            link: '/messages/inbox'
          },
          {
            title: 'Outbox',
            link: '/messages/outbox'
          },
          {
            title: 'Sent',
            link: '/messages/sent'
          },
          {
            title: 'Archived',
            link: '/messages/archived'
          },
        ]
      },
      {
        title: 'Users',
        link: '/users',
        children: [
          {
            title: 'New User',
            link: '/users/new-user'
          },
          {
            title: 'User Groups',
            link: '/users/user-groups'
          },
          {
            title: 'Permissions',
            link: '/users/permissions'
          },
          {
            title: 'passwords',
            link: '/users/passwords'
          },
        ]
      },
      {
        title: 'Settings',
        link: '/settings',
        children: [
          {
            title: 'Databases',
            link: '/settings/databases'
          },
          {
            title: 'Design',
            link: '/settings/design'
          },
          {
            title: 'Change User',
            link: '/settings/change-user'
          },
          {
            title: 'Log Out',
            link: '/settings/log-out'
          },
        ]
      },
    ]

    const iconShallow = {
      Dashboard: "fas fa-tachometer-alt",
      Sales: "fas fa-truck-moving",
      Messages: "fas fa-envelope",
      Users: "fas fa-user-friends",
      Settings: "fas fa-cog"
    }

    const shallowElement = document.getElementById('shallow')

    const renderMenu = (shallowMenu = [], parrent) => {

      const appendIcon = (a) => {
        const span = document.createElement('span')

        span.className = 'fas fa-chevron-right btn-show-sub-menu'
        a.className = 'nav-item'

        a.appendChild(span)
      }

      const setIconForLi = (item, a) => {
        const icon = document.createElement('i')

        switch (item.title) {
          case 'Dashboard':
            icon.className = iconShallow.Dashboard
            break;
          case 'Sales':
            icon.className = iconShallow.Sales
            break;
          case 'Messages':
            icon.className = iconShallow.Messages
            break;
          case 'Users':
            icon.className = iconShallow.Users
            break;
          case 'Settings':
            icon.className = iconShallow.Settings
            break;
        }

        a.appendChild(icon)
      }

      const initMenu = (items, parrent) => {
        const ul = document.createElement('ul')

        items.forEach(item => {
          const li = document.createElement('li')
          const a = document.createElement('a')
          const text = document.createTextNode(item.title)

          setIconForLi(item, a)
          a.appendChild(text)
          a.href = item.link

          if (item.children) {
            appendIcon(a)
            li.appendChild(a)

            initMenu(item.children, li)
          } else {
            li.appendChild(a)
          }

          ul.appendChild(li)
        })

        parrent.appendChild(ul)
      }

      const eventShowMenu = (e) => {
        const a = e.target
        const li = a.parentElement
        const ul = li.getElementsByTagName("ul")[0]
        const span = a.getElementsByTagName('span')[0]

        e.preventDefault()
        ul.classList.toggle('show')
        span.classList.toggle('rotate')
      }

      const clickShowMenuEvent = () => {
        const arrA = document.getElementsByClassName('nav-item')

        for (let i = 0; i < arrA.length; i++) {
          arrA[i].addEventListener('click', eventShowMenu)
        }
      }

      initMenu(shallowMenu, parrent)
      clickShowMenuEvent()
    }

    renderMenu(shallowMenu, shallowElement)

  }

  return {
    init: function () {
      ShallowMenu()
    }
  }
}()

document.addEventListener('DOMContentLoaded', function () {
  Lesson14.init()
})

