const boxContact = document.querySelector('.box__contact')
for (let index = 0; index < 145; index++) {
  boxContact.innerHTML += `
    <div class="contact__wrapper">
      <div class="contact__img">
        <div class="border__light wrapper__img__contact">
          <img src="/img/contact.jpeg" class="img__contact">
        </div>
      </div>
      <div class="contact__info">
        <div class="contact__chat">
          <p class="mb-0 font-semibold">Brace Indonesia</p>
          <small class="text-info">Thursday</small>
        </div>
        <div class="contact__chat">
          <span class="text-sm">https://insights.stackoverflow.com/survey @Mas Ulwan @Mas Rajip kampoos. id @Mas Aris @Rizal Imp @Adit</span>
          <div class="contact__icon">
            <div class="pinned__wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
const inputMessage = document.querySelector('.input_message')
if (inputMessage) {
  const users = ['Aris Wahyudiyanto', 'M. Rizal', 'Jonikin']
  const messageWrapper = document.querySelector('.message__wrapper')
  if (messageWrapper) {
    inputMessage.addEventListener('keyup', function(evt) {
      if (this.value !== "" && evt.keyCode === 13) {
        messageWrapper.innerHTML += `
          <div class="is_message__content flex-end">
            <div class="is_message__wrapper">
              <div class="is_message">
                <span>${this.value}</span>
                <p>20:14</p>
              </div>
            </div>
          </div>
        `
        setTimeout(() => {
          messageWrapper.innerHTML += `
            <div class="is_message__content">
              <div class="is_message__wrapper">
                <div class="is_message">
                  <p>${users[Math.floor(Math.random() * users.length)]}</p>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, magnam.</span>
                  <p>20:14</p>
                </div>
              </div>
            </div>
          `
        }, 2000);
        this.value = ''
      }
    })
  }
}