function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

function checkEmailValidity(email) {
  const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if (emailPattern.test(email) === false) {
    return false;
  } else {
    return true;
  }
}

function checkSubscribeValidity() {
  let email = document.querySelector('#subscribe-email-input').value;
  return checkEmailValidity(email);
}

function openSubscribeModal() {
  let modal = document.querySelector('#modal');
  let overlay = document.querySelector('#overlay');
  modal.style.display = 'flex';
  overlay.style.display = 'block';
}

function closeSubscribeModal() {
  let modal = document.querySelector('#modal');
  let overlay = document.querySelector('#overlay');
  modal.style.display = 'none';
  overlay.style.display = 'none';
}

function onEmailSubmit() {
  // let email = document.querySelector('#subscribe-email-input').value;
  // 현재 서버로 전송하지 않는 상태
  // 실제 전송을 하기 위해서는, email을 서버 URL로 전송 필요
  let input = document.querySelector('#subscribe-email-input');
  input.value = null;
  closeSubscribeModal();
}

function openSidebar() {
  let sidebar = document.querySelector('nav');
  sidebar.animate(
    [{ transform: 'translateX(0)' }, { transform: 'translateX(-100%)' }],
    {
      duration: 300,
      fill: 'forwards',
      easing: 'ease-in-out',
    }
  );
}

function closeSidebar() {
  let sidebar = document.querySelector('nav');
  sidebar.animate(
    [{ transform: 'translateX(-100%)' }, { transform: 'translateX(0)' }],
    {
      duration: 300,
      fill: 'forwards',
      easing: 'ease-in-out',
    }
  );
}

function onSubscribeClick() {
  if (checkSubscribeValidity()) {
    openSubscribeModal();
  } else {
    alert('올바른 이메일을 입력하세요.');
  }
}
