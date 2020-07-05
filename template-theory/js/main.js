function openMenuMobile(isOpen) {
    const name = window.document.getElementById('nav-mobile')

    if (isOpen) {
        name.style.right = '0px'
    } else {
        name.style.right = '-380px'
    }
}