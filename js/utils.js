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
  let email = document.querySelector('#subscription-email').value;
  return checkEmailValidity(email);
}

function openSubscribeModal() {
  let modal = document.querySelector('#modal');
  let overlay = document.querySelector('#overlay');
  modal.style.display = 'flex';
  overlay.style.display = 'block';
}

function onSubscribeClick() {
  if (checkSubscribeValidity()) {
    openSubscribeModal();
  } else {
    alert('올바른 이메일을 입력하세요.');
  }
}
