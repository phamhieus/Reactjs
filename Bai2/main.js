

let Lesson14 = function () {
  let DeepMenu = function () {
    const deepMenu = [
      {
        title: 'Home',
        subTitle: 'sweet home',
        link: '/home',
        icon: 'fa fa-home',
      },
      {
        title: 'Home',
        subTitle: 'About us',
        link: '/about-us',
        icon: 'fa fa-edit',
        isActive: true
      },
      {
        title: 'Features',
        subTitle: 'sweet home',
        link: '/features',
        icon: 'fa fa-gift',
      },
      {
        title: 'News',
        subTitle: 'sweet home',
        link: '/news',
        icon: 'fa fa-globe',
      },
      {
        title: 'Blog',
        subTitle: 'what they say',
        link: '/blog',
        icon: 'fa fa-comments-o',
        children: [
          {
            title: 'Mission',
            link: '/blog/mission',
            icon: 'fa fa-globe',
          },
          {
            title: 'Our Team',
            link: '/blog/our-team',
            icon: 'fa fa-group',
            children: [
              {
                title: 'Leyla Sparks',
                link: '/blog/our-team/leyla-sparks',
                icon: 'fa fa-female',
              },
              {
                title: 'Gleb Ismailov',
                link: '/blog/our-team/gleb-ismailov',
                icon: 'fa fa-male',
                children: [
                  {
                    title: 'About',
                    link: '/blog/our-team/gleb-ismailov/about',
                    icon: 'fa fa-leaf',
                  },
                  {
                    title: 'Skills',
                    link: '/blog/our-team/gleb-ismailov/skills',
                    icon: 'fa fa-tasks',
                  }
                ]
              },
              {
                title: 'Viktoria Gibbers',
                link: '/blog/our-team/viktoria-gibbers',
                icon: 'fa fa-female',
              },
            ]
          },
        ]
      },
      {
        title: 'Portfolio',
        subTitle: 'sweet home',
        link: '/portfolio',
        icon: 'fa fa-picture-o',
      },
      {
        title: 'Contacts',
        subTitle: 'drop a line',
        link: '/contacts',
        icon: 'fa fa-envelope-o',
      },
    ]


    const menuElement = document.getElementById('menu')

    const renderMenu = (arrayItem = [], parrent, levelMenu = 0) => {

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

      initMenu(shallowMenu, parrent, levelMenu)
    }

    renderMenu(shallowMenu, shallowElement)

  }

  return {
    init: function () {
      DeepMenu()
    }
  }
}()

document.addEventListener('DOMContentLoaded', function () {
  Lesson14.init()
})

