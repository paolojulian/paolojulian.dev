
let POMODORO_AUDIO: HTMLAudioElement;
if (typeof window !== 'undefined') {
  POMODORO_AUDIO = new Audio('/assets/audio/pomodoro-alert.mp3');
}
export function playRingingSound() {
  if (POMODORO_AUDIO) {
    POMODORO_AUDIO.currentTime = 0;
    POMODORO_AUDIO.play();
  }
}

export function stopRingingSound() {
  if (POMODORO_AUDIO) {
    POMODORO_AUDIO.pause();
    POMODORO_AUDIO.currentTime = 0;
  }
}


export function showNotification() {
  if (!("Notification" in window)) {
    // Not supported in a window
    console.error("test", 'Notifications are not supported');
    return;
  }

  const title = 'Pomodoro Complete';
  console.log("test", Notification.permission);
  if (Notification.permission === 'granted') {
    new Notification(title);
  }
}