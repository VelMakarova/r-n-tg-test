const tg = window.Telegram.WebApp;

export const useTelegram = () => {

  const onClose = () => {
    tg.close()
  }

  const onReady = () => {
    tg.ready()
  }

  const onToggleButton = () => {
    return tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show()
  }

  return {
    tg,
    onClose,
    onToggleButton,
    onReady,
    user: tg.initDataUnsafe?.user,
  }
}
