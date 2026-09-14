document.documentElement.classList.add('js')

const reveals = document.querySelectorAll('.reveal')
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('sichtbar')
        io.unobserve(e.target)
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
  reveals.forEach((el) => io.observe(el))
} else {
  reveals.forEach((el) => el.classList.add('sichtbar'))
}

const form = document.getElementById('anfrage-form')
if (form) {
  const status = document.getElementById('form-status')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let ok = true
    let first = null
    form.querySelectorAll('.feld').forEach((feld) => {
      const input = feld.querySelector('input, textarea')
      const wert = input.value.trim()
      let fehler = ''
      if (input.required && !wert) fehler = 'Bitte ausfüllen.'
      else if (input.type === 'email' && wert && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(wert)) fehler = 'Bitte eine gültige E-Mail-Adresse eingeben.'
      feld.classList.toggle('ungueltig', !!fehler)
      input.setAttribute('aria-invalid', fehler ? 'true' : 'false')
      if (fehler && !first) { ok = false; first = input }
    })
    if (!ok) { first.focus(); return }
    const d = new FormData(form)
    const body = [
      'Vorname: ' + (d.get('vorname') || '-'),
      'Nachname: ' + (d.get('nachname') || '-'),
      'E-Mail: ' + d.get('email'),
      'Telefon: ' + d.get('telefon'),
      'Wunschtermin: ' + (d.get('wunschtermin') || '-'),
      '',
      d.get('nachricht'),
      '',
      'Gesendet über die Website'
    ].join('\n')
    window.location.href = 'mailto:info@jordirauemungen.ch?subject=' + encodeURIComponent('Anfrage über die Website') + '&body=' + encodeURIComponent(body)
    status.textContent = 'Ihr E-Mail-Programm sollte sich geöffnet haben. Klappt das nicht, erreichen Sie uns direkt unter 079 376 54 41.'
    status.classList.add('sichtbar')
  })
}
