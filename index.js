
const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    console.log({ clientX, clientY });

    //0 - 1
    const { innerWidth, innerHeight } = window;
    const fractionX = clientX / innerWidth; //0 - 1
    const fractionY = clientY / innerHeight; //0 - 1

    console.log({ fractionX, fractionY  });

    const pupilX = -5 + fractionX * 40;
    const pupilY = -5 + fractionY * 30;

    console.log({ pupilX, pupilY });

    document.querySelectorAll('.pupil')
    .forEach(el => {
        el.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    })

}

window.addEventListener('mousemove', handleMouseMove);

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
