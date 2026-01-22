function display(x) {
            let a = document.querySelector(".screen");
            if (x == 'Evaluate') {
                let b = a.innerText;
                console.log(b);
                a.innerText = eval(b);
            } else if (x == 'Clear') {
                a.innerText = '0';
            } else if (a.innerText == 0) {
                a.innerText = '';
                a.innerText += x;
            } else {
                a.innerText += x;
            }
        }