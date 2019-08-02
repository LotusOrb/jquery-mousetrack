

$.fn.rndmousetrack = function (mode,localstorename,viewcolor) { 
  console.log(mode)
  switch (mode) {
    case 'track':
      if (localStorage.getItem(localstorename) === null) {
        const MouseData = []
        this.mousemove(function (e) {
          MouseData.push(`{"x":"${e.pageX - 16}","y": "${e.pageY - 16}"}`)
          localStorage.setItem('MouseData', `${MouseData}`)
        });
      } else {
        const MouseData = [localStorage.getItem(localstorename)]
        this.mousemove(function (e) {
          MouseData.push(`{"x":"${e.pageX - 32}","y": "${e.pageY - 32}"}`)
          localStorage.setItem('MouseData', `${MouseData}`)
        });
      }
      break;
    case 'view':
      const getter1 = localStorage.getItem(localstorename);
      const getter2 = `[${getter1}]`;
      const getter3 = JSON.parse(getter2)
      // console.log(getter3)
    for (let index = 0; index < getter3.length; index++) {
        const elm = getter3[index];
        console.log(elm)
        this.append(`<div style="top:${elm.y}px;left:${elm.x}px;background-color: ${viewcolor};width: 32px;height: 32px;position: absolute;opacity: 0.1;border-radius: 100px;z-index: 999999999999;"></div>`)
      }
      break;
    case 'clean':
      localStorage.removeItem(localstorename)
    default:
      break;
  }

}